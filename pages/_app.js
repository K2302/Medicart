import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner, NavBar,About } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";
import Contact from "../Components/Contact";
export default function App({ Component, pageProps }) {
  return (
    <div className="bg-indigo-200">
      <TrackingProvider>
        <NavBar >
          {/* <About/> */}
      </NavBar >
        <Component {...pageProps} />
         <About/>
         <Contact/>
        <Footer />
        
      </TrackingProvider>
    </div>
  );
}
