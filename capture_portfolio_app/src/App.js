//! Import Pages
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import {Routes, Route, useLocation} from 'react-router-dom';
//!Animation
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <AnimatePresence exitBeforeEnter 
        /* exitBeforeEnter is to make sure the component in the page we are going to 
        doesnt render while this one is fading out */
        >
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<AboutUs/>}/>
                <Route path="/aboutus" exact element={<AboutUs/>}/>
                <Route path="/ourwork" exact element={<OurWork/>}/>
                <Route path="/ourwork/:id" element={<MovieDetail/>}/>
                <Route path="/contactus" exact element={<ContactUs/>}/>
            </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
