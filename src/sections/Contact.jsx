import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Message from '../assets/message.png'
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent successfully!");
      setLoading(false);
      form.current.reset();
    })
    .catch(() => {
       toast.error("Failed to send message!");
      setLoading(false);
    });
};

  return (
    <section id="contact" className="py-10">
      <div className="max-w-7xl mx-auto bg-zinc-900/60 border border-white/10 rounded-lg p-3 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* left */}
          <div className="grid lg:col-span-4 lg:border-r lg:border-r-white/10 p-2">
            <h2 className="text-xl font-semibold ">Let's Connect</h2>
            <div className="mt-3 text-sm text-gray-500 leading-6">
              <p>Have a project in mind or just want to say hi?</p>
              <p>Feel free to reach out!</p>
            </div>
            <div className="w-full h-px bg-white/10 my-8"></div>

            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 items-center border border-gray-600/40 bg-gray-700/20 hover:bg-gray-950 font-semibold rounded-lg text-sm p-2">
                <FiMail className="text-violet-500" />
                <p>kunal07sikarwar@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center border border-gray-600/40 bg-gray-700/20 hover:bg-gray-950 font-semibold rounded-lg text-sm p-2">
                <FiPhone className="text-violet-500" />
                <p>9098296425</p>
              </div>
              <div className="flex gap-2 items-center border border-gray-600/40 bg-gray-700/20 hover:bg-gray-950 font-semibold rounded-lg text-sm p-2">
                <FiMapPin className="text-violet-500" />
                <p>India</p>
              </div>
            </div>
          </div>
          {/* center */}
          <form ref={form} onSubmit={sendEmail} className="grid lg:col-span-5  gap-5 ">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            <textarea
              rows="5"
              name="message"
              required
              placeholder="Your Message"
              className="w-full mt-5 bg-transparent border border-white/10 rounded-xl px-5 py-4 resize-none outline-none focus:border-violet-500"
            ></textarea>

            <button
            type="submit"
              className="
                mt-5
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-violet-500
                flex
                items-center
                justify-center
                gap-3
                hover:scale-105
                transition
                md:w-1/2
                lg:w-full 
                font-semibold
                
                "
            >
              {loading ? "Sending...": "Send Message"}
              <FiSend className="text-xl" />
            </button>
          </form>
          {/* right */}
          <div className=" lg:col-span-3 flex justify-center lg:items-center">
            <img className="sm:w-44 sm:h-40 md:w-64 md:h-60 lg:w-80 lg:h-60 object-fit" src={Message} alt="message.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
