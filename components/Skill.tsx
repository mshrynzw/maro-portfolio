import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faPython, faJava } from "@fortawesome/free-brands-svg-icons"
import { faGem, faC, faGear } from "@fortawesome/free-solid-svg-icons"

const Skill : React.FC = () => {
  return (
    <section id="skill" className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <div className="w-full">
        <h2 className="secondary-title">Skill</h2>
        <p className="section-paragraph">
          私は以下のプログラミング言語を扱ってきました。
        </p>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-yellow-300 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faJs} className="text-yellow-300 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">JavaScript</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Next.js</div>
                <div className="badge">React</div>
                <div className="badge">Nuxt.js</div>
                <div className="badge">Vue.js</div>
              </div>
              <p className="text-secondary">
                Webアプリケーションを開発します。
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-blue-600 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faPython} className="text-blue-600 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Python</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Webスクレイピング</div>
                <div className="badge">自然言語処理</div>
              </div>
              <p className="text-secondary">
                Seleniumによるスクレピングやネガポジ判定の開発をしたことがあります。
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-red-800 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faGem} className="text-red-800 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Ruby</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Ruby on Rails</div>
              </div>
              <p className="text-secondary">
                オープンソースのカスタマイズや業務用Webアプリケーションの開発をしたことがあります。
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-orange-400 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faJava} className="text-orange-400 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Java</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Servlet/JSP</div>
              </div>
              <p className="text-secondary">
                CRUDのWebアプリケーションを開発しました。
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-purple-800 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faC} className="text-purple-800 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">C#</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">ASP.NET</div>
              </div>
              <p className="text-secondary">
                業務用Webアプリケーションの開発をしたことがあります。
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-wrap justify-center rounded border p-16 duration-300 hover:border-green-800 dark:border-blue-950 lg:space-x-32 lg:justify-start lg:px-16 lg:py-14">
            <div className="mb-6 self-center lg:mb-0">
              <FontAwesomeIcon icon={faGear} className="text-green-800 w-[144px]" style={{ fontSize: "144px" }}/>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Others</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">MySQL</div>
                <div className="badge">MongoDB</div>
                <div className="badge">SupaBase</div>
                <div className="badge">Strapi</div>
                <div className="badge">Vercel</div>
                <div className="badge">Render</div>
                <div className="badge">Heroku</div>
                <div className="badge">AWS</div>
                <div className="badge">AmazonLinux</div>
              </div>
              <p className="text-secondary">
                その他以上の技術を取得しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
