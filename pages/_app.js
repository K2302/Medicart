import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner, NavBar,About } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar >
          {/* <About/> */}
      </NavBar >
        <Component {...pageProps} />
         <About/>
        <Footer />
      </TrackingProvider>
    </>
  );
}
