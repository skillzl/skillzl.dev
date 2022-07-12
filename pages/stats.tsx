import Container from 'components/Container'

export default function Stats() {
return (

<Container>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-8">
        <div className="w-full mb-6 lg:mb-0">
          <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-green-500">Activity</h1>
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="bg-green-500 rounded-lg p-2 xl:p-6">
            <h2 className="title-font font-medium sm:text-2xl text-3xl text-white">1.03h/day</h2>
            <p className="leading-relaxed text-gray-100 font-bold">average</p>
          </div>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="bg-green-500 rounded-lg p-2 xl:p-6">
            <h2 className="title-font font-medium sm:text-2xl text-3xl text-white">vsc</h2>
            <p className="leading-relaxed text-gray-100 font-bold">app</p>
          </div>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="bg-green-500 rounded-lg p-2 xl:p-6">
            <h2 className="title-font font-medium sm:text-2xl text-3xl text-white">ts, js, go</h2>
            <p className="leading-relaxed text-gray-100 font-bold">langs</p>
          </div>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <div className="bg-green-500 rounded-lg p-2 xl:p-6">
            <h2 className="title-font font-medium sm:text-2xl text-3xl text-white">9+</h2>
            <p className="leading-relaxed text-gray-100 font-bold">projects</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <figure>
      <embed
        src="https://wakatime.com/share/@feb26803-ea8b-4949-bab0-08393a4fdd48/5b67484e-e04e-4256-bfc6-789101968eb7.svg">
      </embed>
    </figure>
  </section>
</Container>
)
}