import linksData from './Links';

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
  return (
    <nav className="bg-navColor py-3 text-white px-16  justify-between items-center flex flex-col md:flex-row">
      <div className="logo">
        <p className="font-semibold text-2xl tracking-wider">myTunes</p>
      </div>
      <ul className="flex my-1 py-1">{returnLinks()}</ul>
    </nav>
  );
}

export default Navbar;
