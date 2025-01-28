interface ContactProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  formData: {
    name: string;

    email: string;

    subject: string;

    message: string;
  };
}

const Contact: React.FC<ContactProps> = ({
  handleSubmit,
  handleChange,
  formData,
}) => {
  return (
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-white focus:shadow-md"
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
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-white focus:shadow-md"
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
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-white focus:shadow-md"
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
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-white focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md text-white font-semibold bg-gradient-to-r from-purple-400 via-purple-600 to-violet-600 hover:shadow-xl hover:shadow-purple-500 hover:scale-105 duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
