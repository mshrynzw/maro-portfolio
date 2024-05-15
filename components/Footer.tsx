import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareXTwitter, faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer : React.FC = () => {
  return (
    <footer className="shadow-xl mx-0 grid w-full grid-cols-1 bg-slate-50 bg-opacity-90 dark:bg-opacity-90 px-8 py-6 space-y-2 dark:bg-neutral-900 md:space-y-0 md:grid-cols-3 md:px-14 lg:px-24">
      <div className="order-1 flex items-center justify-self-center space-x-3">
        <div>
          {/*TODO:Link*/}
          <FontAwesomeIcon icon={faSquareXTwitter} className="h-[20px] hover:text-blue-400"/>
        </div>
        <div>
          {/*TODO:Link*/}
          <FontAwesomeIcon icon={faSquareInstagram} className="h-[20px] hover:text-pink-400"/>
        </div>
        <div>
          {/*TODO:Link*/}
          <FontAwesomeIcon icon={faSquareFacebook} className="h-[20px] hover:text-blue-600"/>
        </div>
      </div>
      <div className="order-3 justify-self-center md:order-2 flex items-center">Copyright © {new Date().getFullYear()} mshr</div>
      <div className="order-2 justify-self-center md:order-3">
        <Link href="mailto:mshr@gmail.com" >
          <button className="mx-auto flex h-12 items-center rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition-all duration-300 space-x-3 hover:bg-blue-500">
            <FontAwesomeIcon icon={faEnvelope} className="h-[20px]"/>
            <div className="ml-3">mshr@gmail.com</div>
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
