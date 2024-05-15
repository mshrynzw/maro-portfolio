import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Hero : React.FC = () => {
  return (
    <section id="home" className="container -z-10 mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="mx-auto max-w-xl rounded-md border border-gray-200/30 bg-gray-800/5 p-4 shadow-lg backdrop-blur-lg dark:bg-gray-800/30 md:my-36 lg:ml-20">
          <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
            TailWindCSS<br/>
            美しいサイト<br/>
            作ります
          </h1>
        </div>
        <Image src="/images/home.png" alt="home" width={1024} height={1024} className="right-6 -z-10 mx-auto mt-12 w-10/12 md:absolute md:mt-0 md:w-3/5 lg:top-36 lg:right-52 lg:max-w-xl"/>
      </div>
    </section>
  )
}

export default Hero
