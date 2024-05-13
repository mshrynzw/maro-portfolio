import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Hero : React.FC = () => {
  return (
    <section id="home" className="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="mx-auto max-w-xl rounded-md border border-gray-200/30 bg-gray-800/30 p-4 shadow-lg backdrop-blur-lg md:my-36 lg:ml-20">
          <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
            TailWindCSS<br/>
            美しいサイト<br/>
            作ります
          </h1>
          <Link href="/#portfolio">
            <button className="mx-auto mt-4 flex items-center rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition-all duration-300 space-x-3 hover:bg-blue-500 h-12">
              <FontAwesomeIcon icon={faRocket} className="h-[20px] hover:text-blue-400"/>
              <span>もっと見る</span>
            </button>
          </Link>
        </div>
        <Image src="/images/home.png" alt="home" width={1024} height={1024} className="right-6 -z-10 mx-auto mt-12 w-10/12 md:absolute md:mt-0 md:w-3/5 lg:top-36 lg:right-52 lg:max-w-xl"/>
      </div>
    </section>
  )
}

export default Hero
