import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Hero : React.FC = () => {
  return (
    <section id="home" className="container -z-10 mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="mx-auto max-w-xl rounded-md p-4 bg-transparent shadow-lg md:my-36 lg:ml-20">
          <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
            Next.js<br/>
            モダンサイト<br/>
            作ります
          </h1>
        </div>
        <Image src="/images/home.png" alt="home" width={1024} height={1024} className="right-6 -z-10 mx-auto mt-12 w-10/12 md:absolute md:mt-0 md:w-3/5 lg:top-36 lg:right-52 lg:max-w-xl"/>
      </div>
    </section>
  )
}

export default Hero
