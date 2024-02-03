import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner, NavBar,About } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";
export default function App({ Component, pageProps }) {
  return (
    <div className="bg-indigo-200">
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
         <About/>
        <Footer />
      </TrackingProvider>
    </div>
  );
}
