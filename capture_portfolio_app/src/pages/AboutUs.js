//! Page Components
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import FAQSection from "../components/FAQSection"
import Nav from "../components/Nav"
import { motion } from "framer-motion";
import {pageAnimation} from "../animation";

const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection/>
            <ServicesSection/>
            <FAQSection/>
        </motion.div>
    )
}

export default AboutUs