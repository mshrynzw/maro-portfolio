import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer : React.FC = () => {
  return (
    <footer className="mx-0 grid w-full grid-cols-1 bg-slate-50 bg-opacity-90 px-8 py-6 shadow-xl backdrop-blur-sm space-y-2 dark:bg-neutral-900 dark:bg-opacity-90 md:space-y-0 md:grid-cols-3 md:px-14 lg:px-24">
      <div className="order-1 flex items-center justify-self-center space-x-3">
        <Link href="https://github.com/mshrynzw" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="header-link group">
            <FontAwesomeIcon icon={faGithub} className="h-[20px]"/>
            <div>Github</div>
          </a>
        </Link>
        <Link href="https://zenn.dev/mshrynzw" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="header-link group">
            <FontAwesomeIcon icon={faBook} className="h-[20px]"/>
            <div>Zenn</div>
          </a>
        </Link>
        <Link href="https://www.facebook.com/kaoru.yuki.5264" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="header-link group">
            <FontAwesomeIcon icon={faSquareFacebook} className="h-[20px]"/>
            <div>Facebook</div>
          </a>
        </Link>
      </div>
      <div className="order-3 flex items-center justify-self-center md:order-2">Copyright © {new Date().getFullYear()} maro</div>
      <div className="order-2 justify-self-center md:order-3">
        <Link href="mailto:maro00521000@gmail.com">
          <button className="mx-auto flex h-12 items-center rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-2xl transition-all duration-300 space-x-3 hover:bg-blue-500">
            <FontAwesomeIcon icon={faEnvelope} className="h-[20px]"/>
            <div className="ml-3">maro00521000@gmail.com</div>
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
