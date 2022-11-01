import { FaMoon, FaSun } from 'react-icons/fa';
import linksData from './Links';
import useDarkMode from '../useDarkMode';

function returnLinks() {
  return linksData.map((link) => {
    return (
      <li
        className="mx-3 text-sm cursor-pointer hover:border-b-2 transition-all font-semibold first:ml-0 last:mr-0"
        key={link.id}
      >
        <a href={link.path}>{link.name}</a>
      </li>
    );
  });
}

function Navbar() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <nav className="bg-navColor py-3 dark:bg-navDark text-white px-16  justify-between items-center flex flex-col md:flex-row">
      <div className="logo">
        <p className="font-semibold text-2xl tracking-wider">myTunes</p>
      </div>
      <ul className="flex my-1 py-1">{returnLinks()}</ul>
      <button
        onClick={() => toggleTheme()}
        className="bg-footerColor p-2 rounded-md transition-all hover:border-2 hover:border-white"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
