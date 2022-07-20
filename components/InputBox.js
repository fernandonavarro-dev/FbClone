// import {useSession} from "next-auth/react"
import Image from "next/image"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { db, storage } from "../firebase"
import firebase from "firebase"
import 'firebase/firestore'

export default function InputBox() {
    // const [session] = useSession()
    const inputRef = useRef(null)
    const filepickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

    const sendPost = (e) => {
        e.preventDefault()

        if (!inputRef.current.value) return

        db.collection("posts").add({
            message: inputRef.current.value,
            name: "session.user.name",
            email: "session.user.email",
            image: "session.user.image",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {                    // we receive doc as response for .add to collection("posts")
            if (imageToPost) {              // if the user selected an image to post
                const uploadTask = storage  // upload task that uses storage from firebase
                    .ref(`posts/${doc.id}`)     // accessing the storage bucket -> posts collection
                    .putString(imageToPost, "data_url") // the image to post in a string format

                    removeImage()

                    uploadTask.on(          // when state changes we perform the image uploadTask
                        "state_change",
                        null,               // this is how we could track progress but not currently
                        (error) => console.error(error), // if error log it
                        () => {             // when the upload completes...
                            storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
                                db.collection("posts").doc(doc.id).set({    // we set the post of doc.id in collection("posts") to ...
                                    postImage: url
                                }, {merge: true})       // VERY IMPORTANT TO MERGE, OTHERWISE THE OTHER INFORMATION IS OVERWRITTEN BY postImage
                            })
                        }
                    )
            }
        })

        inputRef.current.value=""
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }

  return (
    <div id="inputbox-full" className="bg-white p-2 rounded-2xl shadow-md text-gray-500 front-medium mt-6">
        <div id="inputbox-top-half" className="flex space-x-4 p-4 items-center">
            <Image 
                alt=""
                id="inputbox-profile-image"
                className="rounded-full"
                src="https://links.papareact.com/l4v"
                width={40}
                height={40}
                layout="fixed"
            />
            <form id="inputbox-form" className="flex flex-1" >
                <input 
                    id="inputbox-input"
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    type="text" 
                    ref={inputRef}
                    placeholder="What's on your mind?" 
                />
                <button hidden type="submit" onClick={sendPost}>
                    Submit
                </button>
            </form>

            {imageToPost && (
                <div 
                    onClick={removeImage} 
                    className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor:pointer"
                    >
                        <img className="h-10 object-contain " src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center cursor-pointer">Remove</p>
                </div>
            )}
        </div>

        <div id="inputbox-bottom-half" className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>

            <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="h-7 text-green-400" />
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input
                    ref={filepickerRef}
                    onChange={addImageToPost}
                    type="file"
                    hidden
                    />
            </div>

            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300" />
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
            </div>

        </div>

    </div>
  )
}
