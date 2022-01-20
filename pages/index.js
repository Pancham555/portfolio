import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
export default function Home() {
  const [values, setValues] = useState({
    about: 465,
    services: 1125,
    contact: 2130,
  })
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setValues({ ...values, about: 410, services: 1220, contact: 2060 })
    }
  }, [values])
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Web Portfolio" />
        <link rel='icon' href="/profile.jpeg" type="image/x-icon" />
        <title>Pancham</title>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2026631357019919"
     crossorigin="anonymous"></script>
      </Head>
      <Navbar about={() => window.scroll(0, values.about)}
        services={() => window.scroll(0, values.services)}
        contact={() => window.scroll(0, values.contact)}
      />
      {/* Top */}
      <div className="mx-3 my-5">
        <div className="flex flex-row flex-wrap justify-between w-full h-auto">
          <div className="order-2 mx-4 my-auto font-medium md:w-1/2 md:order-1">
            <div className="text-xl md:text-2xl">
              Welcome to my portfolio</div>
            <div className="md:text-lg">
              Here, I showcase all the things that I can do and what I will do in the upcoming times.
              So stay tuned with my website as you will find some great deals here for your projects.
            </div>
          </div>
          <div className="order-1 w-10/12 mx-4 my-5 md:w-4/12 md:order-2 md:h-auto h-60">
            <Image src="/svg/undrawbuildingwebsitesi78t.svg" alt="front image"
              priority={true} unoptimized={true} quality='100'
              width='2000000' height='2000000' className='w-full h-full' layout='intrinsic'
            />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="mx-3 my-8">
        <div className="mx-5 my-auto font-medium">
          <div className="my-5 text-4xl font-medium text-center">
            About</div>
          <div className="flex flex-row flex-wrap justify-between w-full h-auto my-5">
            <div className="w-10/12 mx-4 md:w-4/12 md:h-auto h-60">
              <Image src="/svg/undrawstaticwebsite0107.svg" alt="front image"
                priority={true} unoptimized={true} layout='intrinsic'
                width='2000000' height='2000000' className='w-full h-full' quality='100' />
            </div>
            <div className="mx-5 my-auto font-medium md:w-1/2">
              <div className="text-xl md:text-2xl">
                About My work</div>
              <div className="md:text-lg">
                I am a full stack and a mobile app developer who can cross platfrom react native app and
                full stack web app with MERN (MongoDB,Express js,React,Node js) technologies. Currently I
                am focussed on making some projects to add in my resume.
              </div>
            </div>
          </div>
          <div className="mx-5">
            <div className="text-xl md:text-2xl">
              About Me</div>
            <div className="md:text-lg">
              I am a learner, freelancer, and a mobile app developer by passion and these
              are my side hustles which I do along with my collegue studies. Though I did made some
              projects which you will find on my github profile and I do have some industry experience
              but that is very little. So I will be happy if I get any opportunity to work on.
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="mx-3 my-5">
        <div className="my-5 text-4xl font-medium text-center">
          Services</div>
        <div className="flex flex-row flex-wrap justify-between w-full h-auto my-5">
          <div className="order-2 mx-5 my-auto font-medium md:w-1/2 md:order-1">
            <div className="my-3 text-xl md:text-2xl">
              Build a website</div>
            <div className="md:text-lg">
              You can build your own customised website/blog/web app. You can see some of my github
              projects to see my work
            </div>
          </div>
          <div className="order-1 w-10/12 mx-4 md:w-4/12 md:order-2 md:h-auto h-60">
            <Image src="/svg/undrawwebsitesetupred4y9.svg" alt="front image"
              priority={true} unoptimized={true} layout='intrinsic'
              width={2000000} height={2000000} className='w-full h-full' quality='100' />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between w-full h-auto my-5">
          <div className="order-2 mx-5 my-auto font-medium md:w-1/2 md:order-1">
            <div className="text-xl md:text-2xl">
              Build an app</div>
            <div className="md:text-lg">
              You can build your own customised react native app. You can see some of my github
              projects to see my work.
            </div>
          </div>
          <div className="order-1 w-10/12 mx-4 md:w-4/12 md:order-2 md:h-auto h-60">
            <Image src="/svg/undrawmobiledevelopment8gyo.svg" alt="front image"
              priority={true} unoptimized={true} layout='intrinsic'
              width={2000000} height={2000000} className='w-full h-full' quality='100' />
          </div>
        </div>

      </div>
      <div className="mx-3 my-8">
        <div className="mx-5 my-auto font-medium">
          <div className="my-5 text-4xl font-medium text-center">
            Contact</div>
          <div className="text-center md:text-lg">
            You can contact me this
            e-mail <a className='font-bold'>panchamb63@gmail.com</a> to know more about
            my projects or if you need to build an app/website.
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}
