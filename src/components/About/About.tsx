import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hello there, my name is Sue, and I'm from Ho Chi Minh, Vietnam! Currently, I'm a sophomore and aspiring accountant studying at Boston University.
      </p>
      <p>
        I love learning and working with numbers. If you would like to read more about my experiences, visit me on LinkedIn at www.linkedin.com/in/suehoang!




      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}
