import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/3Vgj5" method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
            >
              Email Address
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
              placeholder="Enter your subject"
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
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              className="shadow-form rounded-md bg-gradient-to-r from-purple-400 to-violet-600 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;