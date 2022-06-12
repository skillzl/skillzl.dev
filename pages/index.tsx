import Container from 'components/Container'
import Image from 'next/image'
import profilePic from 'public/images/avatar.png'

export default function Home() {
  return (
    <Container>
      <section className="mb-10 sm:flex sm:items-center sm:justify-between">
        <Image
          className="aspect-square rounded-full"
          src={profilePic}
          alt="Picture of the author"
          placeholder="blur"
          width={160}
          height={160}
          quality={85}
        />
        <header className="mt-6 max-w-lg sm:my-0 sm:order-first">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            skillzl
          </h1>
          <h2 className="mb-4 text-gray-400 dark:text-gray-400">
          self-thought programmer
          </h2>
        </header>
      </section>

      <footer className="mt-10 border-t pt-6 dark:border-gray-800" />

      <section>
      <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-green-50"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-green-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">2021 - 2022</h3>
                <p className="leading-tight text-justify">
                  Learned how to work with git and other cloud services.
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
                <h3 className="font-semibold text-lg mb-1">2020</h3>
                <p className="leading-tight text-justify">
                  Started learning <a className="text-gray-300" href="https://reactjs.org/">React</a> and I made my first attempt to create a new style website.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-green-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">2019</h3>
                <p className="leading-tight text-justify">
                  Joined <a className="text-gray-300" href="http://b1gcheats.club">b1gcheats.club</a> project as Lead Developer.
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
                <h3 className="font-semibold text-lg mb-1">2018</h3>
                <p className="leading-tight text-justify">
                  Got into the code-verse, starting my journey from a simple discord application project. <a className="text-gray-300" href="http://chrlwv.tech">chrlwv.tech</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
