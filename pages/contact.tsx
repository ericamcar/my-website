import type { NextPage } from "next";
import { AiFillLinkedin } from "react-icons/ai";

const Contact: NextPage = () => {
  return (
    <div className="contact">
      <h1 className="heading-primary text-center">Contact</h1>
      <p className="text-center">
        Do you have a job opportunity or want to learn more? Contact me on
        LinkedIn.
      </p>
      <AiFillLinkedin className="contact-icon" />
    </div>
  );
};

export default Contact;
