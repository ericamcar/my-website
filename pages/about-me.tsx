import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <h1 className="heading-primary text-center">About me</h1>
      <p className="about-text">
        I am a Design and Manufacturing Engineering PhD candidate turned
        Software Developer. My research focuses on manufacturing strategy in
        start-ups, a subject which I also explored as a Research Intern at the
        Knowledge Transfer Network. I am very enthusiastic and passionate about
        tech and decided to make a career change to software development. I have
        had experience with product design strategy and translating user
        requirements into specifications from my undergrad degree and my PhD, as
        well as designing solutions to problems. However, building software
        excites me because I can bring ideas to life using just my laptop and a
        cup of coffee.
      </p>

      <p className="about-text">
        I started my last job as a junior developer and left as React Tech Lead:
        I fixed 2 bugs on my first day; proactively created documentation for
        their application on the third day; suggested improvements associated
        with React patterns and optimisation to avoid expensive computations,
        modern use of React, and code organisation (modularity and reusability)
        over the first and second week; and was asked by the CTO to lead the
        team with react by the end of the second week. In addition, I learned
        Rails while doing the job. This shows I learn fast, I am self-driven and
        I take initiative.
      </p>

      <p className="about-text">
        I am looking for a long-term opportunity at the moment where I can grow
        along with the product. I am very proactive and inventive, always
        looking for ways that things could be made better and I like to take
        ownership of my endeavours.
      </p>
      <div className="about-image">
        <Image
          className="about-image"
          src="/images/me.jpeg"
          alt=""
          width="150"
          height="150"
        />
      </div>
    </div>
  );
};

export default About;
