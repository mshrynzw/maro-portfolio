import React from "react"
import Link from "next/link"
import Image from "next/image"

const Portfolio : React.FC = () => {
  return (
    <section id="portfolio" className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="w-full">
        <h2 className="secondary-title">Portfolio</h2>
        <p className="section-paragraph">
          私が作ってきたWebアプリケーションがこちら
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="https://www.be-side-your.life/">
            <Image src="/images/portfolio1.jpg" alt="portfolio1" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
          </Link>
          <Link href="https://sekai-no-hekokitai-88ytcux35-mshrynzw.vercel.app/">
            <Image src="/images/portfolio2.jpg" alt="portfolio2" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
          </Link>
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
