import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const phoneNumber = "+201556143143";
  const messengerLink = "https://www.messenger.com/t/100012486973938";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    "السلام عليكم ، اريد الاستفسار عن خدمات التصميم الخاصة بك."
  )}`;

  const contactItems = [
    {
      name: "WhatsApp",
      link: whatsappURL,
      color: "text-green-500",
      icon: <FaWhatsapp size={28} />,
    },
    {
      name: "Messenger",
      link: messengerLink,
      color: "text-blue-500",
      icon: <FaFacebookMessenger size={28} />,
    },
  ];

  return (
    <section
      className={`contact relative w-[85%] sm:w-[75%] max-w-7xl mx-auto mt-10 py-8 rounded-4xl overflow-hidden 
        bg-blue-50
      `}
    >
      {/* Decorations */}
      <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-green-400 rounded-full opacity-20"></div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <span className="flex gap-2 text-3xl font-semibold text-blue-600">
          Contact
          <h2 className={ "text-gray-800"}>
            Me
          </h2>
        </span>

        {/* Contact icons */}
        <div className="flex gap-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center w-16 h-16 
                ${darkMode ? "bg-gray-800" : "bg-white"}
                rounded-2xl shadow-md hover:shadow-xl transform hover:scale-110 
                transition-all duration-300`}
              title={item.name}
            >
              {React.cloneElement(item.icon, {
                className: `${item.color} transition-all duration-300 hover:text-white hover:drop-shadow-xl`,
              })}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-blue-400 to-blue-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-500"></span>
            </a>
          ))}
        </div>

        <h2
          className={`mt-4 max-w-sm text-center text-base ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Click the icons to message me directly on WhatsApp or Messenger. Quick
          and easy!
        </h2>
      </div>
    </section>
  );
}
