import React, { useRef, useState, useCallback } from "react";
import useOnClickOutside from "../../customHooks/useOnClickOutside";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import NavToggle from "./NavToggle";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(
    wrapperRef,
    useCallback(() => setIsOpen(false), [])
  );

  const handleCheckboxChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="navigation" ref={wrapperRef}>
      <NavToggle isOpen={isOpen} handleCheckboxChange={handleCheckboxChange} />

      <nav className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-element navigation-dropdown">
            <Link href="/">
              <a className="navigation-link navigation-dropdown-btn">
                About me{" "}
                <IoMdArrowDropdown className="navigation-dropdown-btn-icon" />
              </a>
            </Link>
            <div className="navigation-dropdown-content">
              <Link href="/about-me">
                <a className="navigation-dropdown-item">
                  <div className="navigation-link-with-icon">
                    <BiCodeAlt className="mr-1" /> About me
                  </div>
                </a>
              </Link>
              <Link href="/cv">
                <a className="navigation-dropdown-item">
                  <div className="navigation-link-with-icon">
                    <BiCodeAlt className="mr-1" /> Curriculum vitae
                  </div>
                </a>
              </Link>
            </div>
          </li>

          <li className="navigation-element navigation-dropdown">
            <Link href="/">
              <a className="navigation-link navigation-dropdown-btn">
                Social Media{" "}
                <IoMdArrowDropdown className="navigation-dropdown-btn-icon" />
              </a>
            </Link>
            <div className="navigation-dropdown-content">
              <a
                href="https://www.linkedin.com/in/erica-melo-de-carvalho"
                className="navigation-dropdown-item"
              >
                <div className="navigation-link-with-icon">
                  <AiFillLinkedin className="mr-1" /> LinkedIn
                </div>
              </a>
              <a
                href="https://github.com/ericamcar"
                className="navigation-dropdown-item"
              >
                <div className="navigation-link-with-icon">
                  <AiFillGithub className="mr-1" /> GitHub
                </div>
              </a>
            </div>
          </li>

          <li className="navigation-element navigation-dropdown">
            <Link href="/contact">
              <a className="navigation-link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
