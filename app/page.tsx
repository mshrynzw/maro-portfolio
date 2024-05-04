import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 md:py-24">
      {/*<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">*/}
      {/*  <p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-8 pb-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
      {/*    Get started by editing&nbsp;*/}
      {/*    <code className="font-mono font-bold">app/page.tsx</code>*/}
      {/*  </p>*/}
      {/*  <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:size-auto lg:static lg:bg-none">*/}
      {/*    <a*/}
      {/*      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"*/}
      {/*      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      By{" "}*/}
      {/*      <Image*/}
      {/*        src="/vercel.svg"*/}
      {/*        alt="Vercel Logo"*/}
      {/*        className="dark:invert"*/}
      {/*        width={100}*/}
      {/*        height={24}*/}
      {/*        priority*/}
      {/*      />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <section id="home" className="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex max-w-xl flex-wrap justify-center rounded-md border border-gray-200/30 bg-gray-800/30 p-4 shadow-lg backdrop-blur-lg md:my-36 md:justify-start lg:ml-20">
            <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
              TailWindCSS<br />
              美しいサイト<br />
              作ります
            </h1>
            <button className="mt-4 flex items-center rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition-all duration-300 space-x-3 hover:bg-blue-500 h-12">
              <FontAwesomeIcon icon={faRocket} className="h-[20px] hover:text-blue-400"/>
              <span>もっと見る</span>
            </button>
          </div>
          <Image src="/images/home.png" alt="home" width={1024} height={1024} className="right-6 -z-10 mx-auto mt-12 w-10/12 md:absolute md:mt-0 md:w-3/5 lg:top-36 lg:right-52 lg:max-w-xl"/>
        </div>
      </section>

      <div
        className="mt-48 mb-12 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch] text-balance">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
