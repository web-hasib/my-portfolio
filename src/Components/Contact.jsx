
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; 
import { motion } from "framer-motion"; 
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


     const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/web-hasib",
      hoverColor: "hover:text-red-500",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      url: "https://www.facebook.com/web.hasibul/",
      hoverColor: "hover:text-blue-500",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://x.com/Hasibul9285",
      hoverColor: "hover:text-sky-400",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/-hasibul-islam-/",
      hoverColor: "hover:text-blue-400",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_8kvdilu", 
      "template_uvxcnbl",
      formData,
      "Nyx4m3XxLJU9tZ3eS"
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Your message has been sent successfully.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later!',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    );
};

  return (
    <section id="contact"
      className="container mx-auto p-8 py-10 max-w-7xl w-full
                        bg-gradient-to-r from-blue-900/20 to-green-950/20
                     rounded-xl shadow-lg overflow-hidden space-y-6 md:space-y-0
                        px-6 roboto text-gray-300 my-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-300 pb-20">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Contact Information */}
        <div className="md:w-1/2 bg-white/5 p-6 rounded-lg shadow-inner flex flex-col justify-between">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-300">
            Contact Information
          </h3>

          <div className="space-y-6 flex-grow">
            {/* Email */}
            <div className="flex items-center gap-3 text-lg text-gray-300">
              <FiMail className="text-blue-300 text-2xl" />
              <a
                href="mailto:jrweb.hasib@gmail.com"
                className="hover:underline"
              >
                {" "}
                jrweb.hasib@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 text-lg text-gray-300">
              <FaWhatsapp className="text-blue-300 text-2xl" />
              <a
                href="https://wa.me/8801303787940"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +8801303787940
              </a>
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 text-lg text-gray-300">
              <FiMapPin className="text-blue-300 text-2xl mt-1 flex-shrink-0" />
              <p>
                Natore, Bangladesh
              </p>
            </div>
            <motion.div
              className="flex pt-6 justify-start space-x-4 text-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-transform duration-300 ${link.hoverColor}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

         
          <div className="mt-8 p-4 bg-white/2 rounded-md h-32 md:h-24">
         
            <p className="text-gray-400 text-sm">
              {/* Empty space if needed  */}
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 bg-white/5 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-300">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/10 border border-blue-300/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/10 border border-blue-300/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/10 border border-blue-300/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-y"
              ></textarea>
            </div>

            {/* Send Email Button */}
            <button
              type="submit"
              className="w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500/10 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500/20 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400/20 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white z-10">Send Email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
