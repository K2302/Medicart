import React, { useEffect } from "react";
// import Team from "./Images/team_thumbnail.png";
// import ReactGa from "react-ga";
// import "./About.module.css";
import logo from "../Images/logo.png";

function About() {
  // useEffect(() => {
  //   ReactGa.pageview(window.location.pathname);
  // }, []);
  return (
    <div className="About-section">
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
      <div className="underline"></div>
      <div className="about">
        {/* <Image></Image> */}
        <div className="flex items-center justify-center ">
        <img  src="https://res.cloudinary.com/priyojit/image/upload/v1706899136/Screenshot_2024-02-02_193052-removebg-preview_r0lz1m.png"  alt="" />
        </div>
        <div className="about_text_div"   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="about_text">
            <div className="about_agro" style={{ textAlign: 'center' }}>
              <b style={{ textAlign: 'center' }}> ABOUT Medi-Cart: </b>
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
