import type { NextPage } from "next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const CV: NextPage = () => {
  return (
    <>
      <div className="cv-header">
        <div>
          <h1 className="heading-primary">Erica Melo de Carvalho</h1>
          <h2 className="heading-secondary">Software Engineer</h2>
        </div>
        <div>
          <a
            className="heading-secondary icon"
            href="https://www.linkedin.com/in/erica-melo-de-carvalho"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="heading-secondary icon"
            href="https://github.com/ericamcar"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <h3 className="heading-tertiary my-1">Skills and abilities</h3>
      <ul>
        <li>
          <strong>Frontend:</strong> React, NextJS, Redux, SASS, JavaScript,
          TypeScript, HTML, CSS, Bootstrap. Currently learning GraphQL
        </li>
        <li>
          <strong>Backend:</strong> Express, Node, Ruby, Ruby on Rails, MongoDB,
          PostgreSQL
        </li>
        <li>
          <strong>Other:</strong> Git, GitHub, Bash/Zsh. Native Portuguese,
          fluent English, and understands Spanish
        </li>
      </ul>

      <h3 className="heading-tertiary my-1">Education and Experience</h3>
      <h4 className="heading-quaternary">
        Software Engineer | Aug 2021 | Smarter Select, USA
      </h4>
      <p className="my-1">
        Implemented newly requested features with React, CSS, Ruby on Rails, and
        PostgreSQL. Fixed frontend (React/CSS) and backend (Ruby on
        Rails/PostgreSQL) operational bugs. Suggested efficiency improvements
        associated with React patterns, modern use of React, and code
        organisation strategies (which led to being asked to lead the team with
        react after only two weeks). Demoed a migration strategy from Rails
        views with embedded React components to NextJS using rewrites.
        Proactively created documentation for the repository.
      </p>

      <h4 className="heading-quaternary">
        Ph.D. in Design and Manufacture Engineering | Sep 2017 – Present |
        University of Strathclyde, UK
      </h4>
      <p className="my-1">
        Research on manufacturing strategy development in hardware start-ups.
        Supervised MSc Supply Chain students on their dissertation. Graded
        students’ assignments. Coursework in Qualitative and Quantitative
        Research Methods.
      </p>

      <h4 className="heading-quaternary">
        Research Intern | Sep 2019 –Sep 2020 | Knowledge Transfer Network &
        Innovation Caucus, UK
      </h4>
      <p className="my-1">
        Researched the barriers faced by innovators to scale up manufacturing
        and developed intervention strategies to support their journey. Wrote
        blogs to educate innovators on the prototype to manufacturing journey.
      </p>

      <h4 className="heading-quaternary">
        BEng Hons in Production Engineering and Management | 2017 | University
        of Strathclyde, UK
      </h4>
      <p className="my-1">
        Arthur Yip prize for Best Overall Performance. Graduated with First
        Class Honours. Applied mathematical models to improve the procurement
        strategy of a company as part of my dissertation. Coursework in
        Manufacturing, Production Management, Quality and Finance.
      </p>

      <h3 className="heading-tertiary my-1">Awards</h3>
      <ul>
        <li>
          <strong>Research Studentship</strong> | 2017 | University of
          Strathclyde, UK
        </li>
        <li>
          <strong>
            Arthur Yip prize for Best Overall Performance on BEng course
          </strong>{" "}
          | 2017 | University of Strathclyde, UK
        </li>
        <li>
          <strong>Science Without Borders Scholarship Program</strong> | 2014 |
          CNPq/Capes, Brazil
        </li>
      </ul>

      <h3 className="heading-tertiary my-1">Volunteering</h3>
      <ul>
        <li>
          <strong>Open Source Club Lead</strong> | Mintbean | Aug 2021 – Present
        </li>
        <li>
          <strong>Hiring Hackathon Code Mentor</strong> | Mintbean | Aug 2021 –
          Present
        </li>
        <li>
          <strong>Math Mentor</strong> | Lead Scotland | Sep 2019 – Jan 2020
        </li>
        <li>
          <strong>Volunteer Coordinator</strong> | The Prince’s Trust | Jul 2016
          – Oct 2016
        </li>
        <li>
          <strong>Cultural Awareness Speaker</strong> | AIESEC Lviv | Jul 2012 –
          Aug 2012
        </li>
      </ul>
    </>
  );
};

export default CV;
