import { FaMoon, FaSun} from 'react-icons/fa'
import {useState, useEffect} from "react"
const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Handle theme change
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded focus:outline-none text-gray-800 dark:text-gray-200 absolute right-10 top-10"
    >
      {isDarkMode ? <FaSun size={28} /> : <FaMoon size={28} />}
    </button>
  );
  
}

export default ToggleTheme