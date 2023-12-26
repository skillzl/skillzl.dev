function Contact() {
    return (
    <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/3Vgj5" method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="full name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              E-mail address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
          <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-purple-400 via-purple-600 to-violet-600 hover:shadow-xl hover:shadow-purple-500 hover:scale-105 duration-300 hover:from-violet-600 hover:to-purple-400"
          >
            Sumbit
            </button>
          </div>
        </form>
      </div>
      )
    }
export default Contact