import Navigation from "./Navigation";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <div className="logo heading-primary">
            <FaLaptopCode className="logo-image" />
            <span className="logo-text">EMC</span>
          </div>
        </a>
      </Link>

      <Navigation />
    </header>
  );
};

export default Header;
