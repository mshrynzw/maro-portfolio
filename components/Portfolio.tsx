import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
    >
      <div className="w-full">
        <h2 className="secondary-title">Portfolio</h2>

        {/* Webアプリケーション */}
        <h3 className="tertiary-title">Webアプリケーション</h3>
        <p className="section-paragraph">
          私が作ってきたWebアプリケーションがこちら
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 画像解析アプリ */}
          <div>
            <h3 className="tertiary-title">画像解析アプリ</h3>
            <Link href="https://iro-eta.vercel.app" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio8.png"
                  alt="portfolio8"
                  width={1280}
                  height={853}
                  className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/Iro" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Next.js</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Vercel</div>
            </div>
          </div>
          {/* 文字縦書きアプリ */}
          <div>
            <h3 className="tertiary-title">文字縦書きアプリ</h3>
            <Link href="https://tate-gilt.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio9.png"
                  alt="portfolio9"
                  width={1280}
                  height={853}
                  className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link href="https://github.com/mshrynzw/Tate" legacyBehavior>
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Next.js</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Vercel</div>
            </div>
          </div>
          {/* Blog・Webスクレイピング */}
          <div>
            <h3 className="tertiary-title">Blog・Webスクレイピング</h3>
            <Link href="https://www.be-side-your.life/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio1.png"
                  alt="portfolio1"
                  width={1280}
                  height={853}
                  className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/be-side_your_life-new_hp"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <Link
                href="https://github.com/mshrynzw/be-side_your_life-new_hp_data"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
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

          {/* 自然言語処理 */}
          <div>
            <h3 className="tertiary-title">自然言語処理</h3>
            <Image
              src="/images/portfolio3.jpg"
              alt="portfolio6"
              width={1280}
              height={853}
              className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
            />
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/text_summary"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Python</div>
              <div className="badge">テキスト要約</div>
            </div>
          </div>
        </div>

        {/* Webデザイン */}
        <h3 className="tertiary-title">Webデザイン</h3>
        <p className="section-paragraph">私が作ってきたWebデザインがこちら</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ヘアーサロンホームページ */}
          <div>
            <h3 className="tertiary-title">ヘアーサロン</h3>
            <Link href="https://nextjs-hp-hair-salon.vercel.app" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio_web_design_0.png"
                  alt="portfolio_web_design_0"
                  width={1366}
                  height={651}
                  className="h-auto w-full cursor-pointer rounded-md"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/nextjs_hp_hair_salon"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Vercel</div>
              <div className="badge">Next.js</div>
              <div className="badge">React</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Three.js</div>
              <div className="badge">GSAP</div>
            </div>
          </div>
          {/* 居酒屋ホームページ */}
          <div>
            <h3 className="tertiary-title">居酒屋</h3>
            <Link
              href="https://react-router-modern-minimal-izakaya-website.pages.dev"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio_web_design_1.png"
                  alt="portfolio_web_design_1"
                  width={1366}
                  height={651}
                  className="h-auto w-full cursor-pointer rounded-md"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/react-router_modern_minimal_izakaya_website"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Cloudflare</div>
              <div className="badge">React Router</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Three.js</div>
              <div className="badge">GSAP</div>
              <div className="badge">Framer Motion</div>
            </div>
          </div>
          {/* ゲーム配信者ホームページ */}
          <div>
            <h3 className="tertiary-title">ゲーム配信者</h3>
            <Link
              href="https://react-router-hp-sakanine.pages.dev"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio_web_design_2.png"
                  alt="portfolio_web_design_2"
                  width={1366}
                  height={651}
                  className="h-auto w-full cursor-pointer rounded-md"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/react-router_hp-sakanine"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
                </a>
              </Link>
              <div className="badge">Cloudflare</div>
              <div className="badge">React Router</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Framer Motion</div>
            </div>
          </div>
          {/* 3DCGホームページ */}
          <div>
            <h3 className="tertiary-title">3DCG</h3>
            <Link href="https://nextjs-webgl.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/portfolio2.png"
                  alt="portfolio2"
                  width={1280}
                  height={853}
                  className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72"
                />
              </a>
            </Link>
            <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
              <Link
                href="https://github.com/mshrynzw/nextjs-webgl"
                legacyBehavior
              >
                <a className="badge" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[20px] hover:text-blue-600"
                  />
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
