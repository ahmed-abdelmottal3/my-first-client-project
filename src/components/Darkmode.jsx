import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
function Darkmodecomp() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
<button
  onClick={() => setDarkMode(!darkMode)}
  className={`rounded-lg  cursor-pointer hover:bg-white hover:p-3 hover:rounded-full hover:text-blue-600  text-white transition-all duration-300
}`}
>
  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
</button>
  );
}

export default Darkmodecomp;