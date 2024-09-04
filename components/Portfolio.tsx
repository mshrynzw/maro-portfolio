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
            <h3 className="tertiary-title">Blog</h3>
            <Link href="https://www.be-side-your.life/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/images/portfolio1.png" alt="portfolio1" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/be-side_your_life-new_hp" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <Link href="https://github.com/mshrynzw/be-side_your_life-new_hp_data" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
              <div className="badge">SSG</div>
              <div className="badge">Three.js</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Vercel</div>
              <div className="badge">AWS</div>
              <div className="badge">Python</div>
              <div className="badge">Webスクレイピング</div>
            </div>
          </div>

          <div>
            <h3 className="tertiary-title">3DCG</h3>
            <Link href="https://nextjs-webgl.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/images/portfolio2.png" alt="portfolio2" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/nextjs-webgl" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">Three.js</div>
              <div className="badge">Shader</div>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
              <div className="badge">Vercel</div>
              <div className="badge">Tailwind CSS</div>
            </div>
          </div>

          <div>
            <h3 className="tertiary-title">Groupware</h3>
            <Link href="https://schedule-diary.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/images/portfolio3.jpg" alt="portfolio3" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/nextjs-firebase-groupware" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
              <div className="badge">ISR</div>
              <div className="badge">SSR</div>
              <div className="badge">Server Action</div>
              <div className="badge">Dynamic Import</div>
              <div className="badge">Vercel</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Firebase</div>
              <div className="primary">ID: test0001@gmail.com / PW :Te2t000!</div>
            </div>
          </div>


          <div>
            <h3 className="tertiary-title">Chat</h3>
            <Image src="/images/portfolio4.png" alt="portfolio6" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/nuxt-realtime-chat" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">Nuxt.js</div>
              <div className="badge">Vue.js</div>
              <div className="badge">SSG</div>
              <div className="badge">AWS</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Supabase</div>
              <div className="primary">ID: test0001@gmail.com / PW :Te2t000!</div>
            </div>
          </div>

          <div>
            <h3 className="tertiary-title">自然言語処理</h3>
            <Image src="/images/portfolio6.webp" alt="portfolio6" width={1280} height={853}
                   className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/text_summary" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">Python</div>
              <div className="badge">テキスト要約</div>
            </div>
          </div>

          <div>
            <h3 className="tertiary-title">Web APP</h3>
            <Link href="https://nextjs-music-measure.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/images/portfolio5.png" alt="portfolio4" width={1280} height={853} className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"/>
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/nextjs_music_measure" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-[20px] hover:text-blue-600"/>
                </a>
              </Link>
              <div className="badge">DTM</div>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
