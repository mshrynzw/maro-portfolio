"use client"
import React, { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBriefcase, faHouse, faMicrochip } from "@fortawesome/free-solid-svg-icons"

const Header : React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  return (
    <header className="mx-0 flex w-full items-center justify-between bg-slate-50 bg-opacity-90 px-8 py-6 shadow-xl backdrop-blur-sm dark:bg-neutral-900 md:px-14 lg:px-24">
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
      </nav>
      <button className="rounded-md border px-3 py-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} className="h-[20px]"/>
      </button>
      {isOpen && (
        <nav className="absolute top-24 right-0 bg-slate-50 bg-opacity-95 p-4 text-black shadow-xl backdrop-blur-sm space-y-2 dark:bg-neutral-900 dark:text-white">
          <Link href="/" className="header-link group" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faHouse} className="h-[20px]"/>
            <div>Home</div>
          </Link>
          <Link href="/#portfolio" className="header-link group" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBriefcase} className="h-[20px]"/>
            <div>Portfolio</div>
          </Link>
          <Link href="/#skill" className="header-link group" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faMicrochip} className="h-[20px]"/>
            <div>Skill</div>
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
