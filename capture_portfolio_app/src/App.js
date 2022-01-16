//! Import Pages
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router 
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <Routes>
            <Route path="/" exact element={<AboutUs/>}/>
            <Route path="/aboutus" exact element={<AboutUs/>}/>
            <Route path="/ourwork" exact element={<OurWork/>}/>
            <Route path="/ourwork/:id" element={<MovieDetail/>}/>
            <Route path="/contactus" exact element={<ContactUs/>}/>
        </Routes>
    </div>
  );
}

export default App;
