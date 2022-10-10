import Container from 'components/Container'
import Image from 'next/image'
import profilePic from 'public/images/me.jpg'

export default function Home() {
  return (
    <Container>
  <section className="mb-10 sm:flex sm:items-center sm:justify-between">
   <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 dark:bg-gray-800">
    <div className="relative z-10">
      <Image className="w-full"
          src={profilePic}
          alt="Picture of the author"
          placeholder="blur"
          quality={85} />
      <div className="text-center absolute w-full">
        <p className="text-green-400 tracking-wide text-lg font-semibold">skillzl</p>
      </div>
    </div>
    <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
     <br />
    </div>
    <div className="pt-9 pb-4 dark:text-blue-50 text-center">
      <p>self-thought programmer</p>
    </div>
    <div className="pb-10 text-center tracking-wide flex justify-around">
      <div className="posts">
        <p className="text-green-500 text-sm">Projects</p>
        <p className="dark:text-blue-50">9+</p>
      </div>
      <div className="followers">
        <p className="text-green-500 text-sm">Experience</p>
        <p className="dark:text-blue-50">5 years</p>
      </div>
      <div className="following">
        <p className="text-green-500 text-sm">Languages</p>
        <p className="dark:text-blue-50">ts, js, go</p>
      </div>
    </div>
  </div>
 </section>
<footer className="mt-10 border-t pt-6 dark:border-gray-800" />
    <section>
      <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-green-50">
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-green-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2022</h3>
                <p className="leading-tight">
                  Working on new projects with more complex infrastructures and more powerful features. Also switched to deploy with more modern services.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"></div>
              </div>
              <div className="bg-green-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2021</h3>
                <p className="leading-tight">
                  Started learning <a className="font-bold text-green-900" href="https://reactjs.org/">React</a>. Also I made my first attempt to create a new modern website from scratch.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-green-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">2020</h3>
                <p className="leading-tight">
                  Joined <a className="font-bold text-green-900" href="http://b1gcheats.xyz">b1gcheats.xyz</a> project as Lead Developer. Started making more changes to the style I used to code my applications.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"
                ></div>
              </div>
              <div
                className="bg-green-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">2019</h3>
                <p className="leading-tight">
                  At the end of 2018 I started to learn the basic of programming. Started with my first project: <a className="font-bold text-green-900" href="http://chrlwv.tech">chrlwv.tech</a> beeing a Discord application written in javascript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
