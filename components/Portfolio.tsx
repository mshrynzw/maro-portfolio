import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Portfolio : React.FC = () => {
  return (
    <section id="portfolio" className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="w-full">
        <h2 className="secondary-title">Portfolio</h2>
        <p className="section-paragraph">
          私が作ってきたWebアプリケーションがこちら
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="https://github.com/mshrynzw/be-side_your_life-new_hp">
              <Image src="/images/portfolio1.png" alt="portfolio1" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link className="badge" href="https://github.com/mshrynzw">
                <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
              </Link>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
            </div>
          </div>

          <div>
            <Link href="https://nextjs-threejs-works.vercel.app/">
              <Image src="/images/portfolio2.png" alt="portfolio2" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link className="badge" href="https://github.com/mshrynzw/nextjs-threejs-works">
                <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
              </Link>
              <div className="badge">Three.js</div>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
            </div>
          </div>

          <Link href="https://schedule-diary.vercel.app/">
            <Image src="/images/portfolio3.jpg" alt="portfolio3" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
          </Link>
          <Link href="https://nextjs-music-measure.vercel.app/">
            <Image src="/images/portfolio4.jpg" alt="portfolio4" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
          </Link>
          <Image src="/images/portfolio5.jpg" alt="portfolio5" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
          <Image src="/images/portfolio6.jpg" alt="portfolio6" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
