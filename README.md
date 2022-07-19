This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tailwind CSS install

...:

- [...](https://) - ...
- [$ npx create-next-app my-project](https://tailwindcss.com/docs/guides/nextjs) - ...
- [$ cd my-project](https://tailwindcss.com/docs/guides/nextjs) - ...
- [$ npm install -D tailwindcss postcss autoprefixer](https://tailwindcss.com/docs/guides/nextjs) - ...
- [$ npx tailwindcss init -p](https://tailwindcss.com/docs/guides/nextjs) - ...
- [tailwind.config.js](https://tailwindcss.com/docs/guides/nextjs) - module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
- [global.css](https://tailwindcss.com/docs/guides/nextjs) - @tailwind base; @tailwind components; @tailwind utilities;
- [$ npm run dev](https://tailwindcss.com/docs/guides/nextjs) - ...
- [$ npm install @heroicons/react](https://www.youtube.com/watch?v=dBotWYKYYWc) - Tailwind icons baby!
- [...](https://) - ...

## Header

...:

CSS-related:

- [Header.js](https://) - import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
- [header-full](https://) - className="flex sticky top-0 bg-white items-center p-2 lg:px-5 shadow-md"
- [header-left](https://) - className="flex items-center"
- [header-searchbar](https://) - className="flex ml-2 items-center rounded-full bg-gray-100 p-2"
- [header-center](https://) - className="flex justify-center flex-grow"
- [header-center-icons](https://) - className="flex space-x-6 md:space-x-2"
- [header-right](https://) - className="flex items-center sm:space-x-2 justify-end"
- [header-user-icons](https://) - className="flex space-x-6 md:space-x-2"
- [HeaderIcon.js](https://) - ...
- [header-center-icon](https://) - className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500"
- [icon-header-center](https://) - className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`}
- [...](https://) - ...

## NextAuth

...:

- [...](https://next-auth.js.org/) - ...
- [api/auth/[...nextauth].js](https://next-auth.js.org/getting-started/example) - import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})
- [$ npm install next-auth](https://) - ...
- [...](https://) - ...
- [...](https://) - ...

## Sidebar

CSS related:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=5467s) - ...
- [components/Sidebar.js](https://) - import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid"
- [sidebar-full](https://) - className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]"
- [sidebar-row-div](https://) - className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer"
- [sidebar-row-icon](https://) - className="h-8 w-8 text-blue-500"
- [sidebar-row-title](https://) - className="hidden sm:inline-flex font-medium"
- [...](https://) - ...

## Feed

...:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=6487s) - ...
- [components/Feed.js](https://) - ...
- [feed-full](https://) - className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto"
- [feed-stories](https://) - className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl"
- [...](https://) - ...
- [...](https://) - ...

## Stories

...:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=6553s) - ...
- [components/Stories.js](https://) - ...
- [stories-full](https://) - className="flex justify-center space-x-3 mx-auto"
- [components/StoryCard.js](https://) - ...
- [storycard-full](https://) - className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105"
- [storycard-profile](https://) - className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
- [storycard-src](https://) - className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
- [...](https://) - ...

## InputBox 1

...:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=8132s) - ...
- [...](https://) - ...
- [...](https://) - ...

## Cloud Firestore

...:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=9086s) - ...
- [...](https://) - Create app -> create Firestore Db
- [...](https://) - ...

## InputBox 2

...:

- [...](https://www.youtube.com/watch?v=dBotWYKYYWc&t=9327s) - ...
- [...](https://) - ...
- [...](https://) - ...

## ...

...:

- [...](https://) - ...
- [...](https://) - ...
- [...](https://) - ...

## Bookmark

...:

- [...](https://) - ...