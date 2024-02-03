import React, { useEffect } from "react";
// import Team from "./Images/team_thumbnail.png";
// import ReactGa from "react-ga";
import "./About.module.css";
import logo from "../Images/logo.png";

function About() {
  // useEffect(() => {
  //   ReactGa.pageview(window.location.pathname);
  // }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8" id="about">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* for image and details  */}
      {/* <b><h1 className="about_heading" style={{ textAlign: 'center', }}>ABOUT US</h1></b> */}
      <div className=""></div>
      <div className="">
        {/* <Image></Image> */}
        <div className="flex items-center justify-center ">
          <img src=" https://res.cloudinary.com/dqxsihu7w/image/upload/v1706966576/Screenshot_2024-02-03_183219-removebg-preview_e9swdl.png" alt="" />
        </div>
        <div className="">
          <div className="">
            <div className="">
              <b> ABOUT Medi-Cart: </b>
              This site is developed for the medical system .
              <br></br>
              <br></br>
              The current medical attendance system faces challenges such as data fragmentation, privacy concerns, and inefficiencies in communication. Patient records are often scattered across various healthcare providers, leading to incomplete information and potential errors in diagnosis or treatment. Additionally, traditional systems may lack robust security measures, making patient data susceptible to breaches.
              <br></br>
              <br></br>
              Blockchain technology can address these issues by providing a decentralized and secure ledger for medical records. With blockchain, patient data can be securely stored, accessed, and updated in a tamper-resistant manner. This ensures a comprehensive and accurate medical history, enhancing collaboration among healthcare providers and safeguarding patient privacy through cryptographic techniques. Overall, blockchain has the potential to revolutionize the medical attendance system, promoting transparency, security, and efficiency.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
