import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      <Head>
        <title>Home</title>
      </Head>
      {/* Who am I, with picture to the right of the text */}
      <div className="flex flex-col md:flex-row items-center justify-center m-5">
        <div className="flex flex-col items-center justify-center md:w-1/2 md:mb-0 mb-5 space-y-2" >
          <h1 className="text-4xl font-bold text-center">
            Vito Van Hecke
          </h1>
          <p className="text-xl">
            I am a software developer based in Hasselt, Belgium.
          </p>
          <p className="text-xl">
            I primarily work with Javascript, but I also have experience with
            Python, Java, C# and Rust. <br />For my internship at school I got fimiliar
            with Oracle Apex, I made a few little project with this as well
          </p>
          <p className="text-xl">
            I really enjoy learning new things and I am always looking for
            opportunities to learn more.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <a href="/images/profo.jpeg" target={'_blank'}>
            <div className="h-80 w-80 mr-5 relative">
              <Image src="/images/profo.jpeg" alt="Vito Van Hecke" layout="fill" objectFit="cover" className="rounded-full" />
            </div>
          </a>
        </div>
      </div>

      {/* What projects have I done, with picture to the left of the text */}

      <div className="flex flex-col md:flex-row items-center justify-center m-5">
        <div className="flex flex-col items-center justify-center md:w-1/2 order-2 md:order-1 ">
          <a href="/images/apex-outfit.png" target={'_blank'}>
            <div className="h-80 w-80 mr-5 relative">
              <Image src="/images/apex-outfit.png" alt="Apex app example" layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2 order-1 md:order-2  md:mb-0 mb-5">
          <h1 className="text-4xl font-bold">
            Projects
          </h1>
          <div className="ml-3">
            <p className="text-xl">
              I have worked on a number of projects, some of which are listed below.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center ">
                <span className="text-right">Outfit budget application in <a href='https://apex.oracle.com' target={'_blank'} rel="noreferrer" className="text-slate-500 ">APEX</a></span>
                <div className="h-10 w-10 ml-3 relative">
                  <Image src="/images/apex.png" alt="Apex icon" layout="fill" objectFit="cover" />
                </div>
              </li>
              <li className="flex items-center">
                <span>A lot of API&apos;s for other projects in <a href="https://nodejs.org/en/" target={'_blank'} rel="noreferrer" className="text-slate-500 visited:text-slate-800">Nodejs</a></span>
                <div className="h-10 w-14 ml-3 relative">
                  <Image src="/images/nodejs.png" alt="NodeJS icon" layout="fill" objectFit="cover" />
                </div>
              </li>
              <li className="flex items-center">
                <span>Webscraper with <a href="https://www.python.org/" target={'_blank'} rel="noreferrer" className="text-slate-500 visited:text-slate-800">Python</a></span>
                <div className="h-10 w-10 ml-3 relative">
                  <Image src="/images/python.png" alt="Python icon" layout="fill" objectFit="cover" />
                </div>
              </li>
              <li className="flex items-center">
                <span>Simple console apps with <a href="https://www.rust-lang.org/" target={'_blank'} rel="noreferrer" className=" text-slate-500 visited:text-slate-800">Rust</a></span>
                <div className="h-10 w-10 ml-3 relative">
                  <Image src="/images/rust.png" alt="Rust icon" layout="fill" objectFit="cover" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
