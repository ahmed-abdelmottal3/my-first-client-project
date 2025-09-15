import { FaBehance, FaFacebookF } from "react-icons/fa";
import hero1 from "../assets/hero1.webp";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`pt-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-[90%] mx-auto max-w-6xl transition-all duration-500 ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      {/* صورة */}
      <div className="border-2 border-blue-500 p-2 rounded-full w-[250px] sm:w-[220px] md:w-[300px] flex-shrink-0">
        <img
          src={hero1}
          alt="Ahmed Saleh"
          className="w-full rounded-full"
        />
      </div>

      {/* النصوص */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 mt-6 md:mt-0">
        <h2 className="text-lg font-light transition-colors duration-500">
          Hello, I'm
        </h2>

        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-500 overflow-hidden whitespace-nowrap">
          Ahmed Saleh
        </h1>

        <TypeAnimation
          className="seq"
          sequence={["Designer", 1000, "Video Editor", 1000, "Freelancer", 1000]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '1.8rem', display: 'inline-block' }}
          repeat={Infinity}
        />

        {/* أزرار السوشيال */}
        <div className="flex gap-5 mt-4">
          <a
            href="https://www.behance.net/mandoahmed21"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-gray-200 hover:text-blue-600"
                : "bg-blue-600 text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaBehance size={24} />
          </a>

          <a
            href="https://www.facebook.com/ahmed.salh.927980"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-gray-200 hover:text-blue-600"
                : "bg-blue-600 text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
