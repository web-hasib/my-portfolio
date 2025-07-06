import { NavLink } from "react-router";

import Swal from "sweetalert2";
import Logo from "./Logo";
import Button from "./Shared/Button";
import { Link } from "react-scroll";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link
          to="about-me"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-gradient-to-r from-blue-900/40 to-green-950/30 max-w-7xl rounded-3xl   mx-auto sticky top-0 z-1 shadow-sm ">
      <div className="navbar  px-6 py-4   ">
        <div className="navbar-start">
          {/* Logo  */}
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="hidden lg:flex navbar-end items-center gap-2">
          {/* resume button  */}
          <a href="/resume.pdf?download=1"
     download='Hasibul`s resume' target="_blank">
            <Button className="mt-5" text="Resume"></Button>
          </a>
        </div>
        {/* dropdown  */}
        <div className="dropdown lg:hidden navbar-end dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="lg:hidden bg-black/40 border-0 text-white shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-600/80 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#d0f1f0ee] "
          >
            <div className="flex items-center justify-between mb-4">
              {/* resume button  */}
              <a href="/resume.pdf?download=1"
     download='Hasibul`s resume' target="_blank">
                <Button className="mt-5" text="Resume"></Button>
              </a>
            </div>
            <div className="">
              {/* i want bgred500 on hover into this divs chield */}
              {links}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
