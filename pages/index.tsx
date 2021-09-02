import type { NextPage } from "next";
import { FaLaptopCode } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className="home">
      <FaLaptopCode className="logo-image" />
      <h1 className="heading-primary highlight p-1">Erica Melo de Carvalho</h1>
      <h2 className="heading-secondary">Software Engineer</h2>
      <h3 className="heading-tertiary my-2">
        React | Redux | Node | Express | JavaScript | Typescript | SASS | HTML |
        CSS | MongoDB | PostgreSQL | Git | GitHub | Bash | Ruby | Ruby on Rails
      </h3>
    </div>
  );
};

export default Home;
