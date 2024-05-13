import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook, faBars, faBriefcase, faHouse, faMicrochip } from "@fortawesome/free-solid-svg-icons"

const Header : React.FC = () => {
  return (
    <header className="shadow-xl mx-0 flex w-full items-center justify-between bg-slate-50 bg-opacity-90 dark:bg-opacity-90 px-8 py-6 dark:bg-neutral-900 md:px-14 lg:px-24">
      <div className="text-5xl font-bold">mshr</div>
      <nav className="hidden space-x-2 md:flex">
        <Link href="/" className="header-link group">
          <FontAwesomeIcon icon={faHouse} className="h-[20px]"/>
          <div>Home</div>
        </Link>
        <Link href="/#portfolio" className="header-link group">
          <FontAwesomeIcon icon={faBriefcase} className="h-[20px]"/>
          <div>Portfolio</div>
        </Link>
        <Link href="/#skill" className="header-link group">
          <FontAwesomeIcon icon={faMicrochip} className="h-[20px]"/>
          <div>Skill</div>
        </Link>
        <Link href="/#contact" className="header-link group">
          <FontAwesomeIcon icon={faAddressBook} className="h-[20px]"/>
          <div>Contact</div>
        </Link>
      </nav>
      <div className="rounded-md border px-3 py-2 md:hidden">
        <FontAwesomeIcon icon={faBars} className="h-[20px]"/>
      </div>
    </header>
  )
}

export default Header
