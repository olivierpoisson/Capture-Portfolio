import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//! Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
    //? This is a variable or "variant" for framer motion
    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity:1, transition: {duration: 2}}
    };

    //? this container represents the parent div of the motion.h2 we used with titleAnim
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration:1, ease: "easeOut", staggerChildren: 1, }}
    };

    return (
        <About>
            <Description>
                
                <motion.div
                    //? here we use hidden and show because it's what we used in container for the starting point and end point
                    //variants={container} initial="hidden" animate="show" className="title"
                >
                    <Hide >
                        <motion.h2 
                            //? here we use hidden and show because it's what we used in titleAnim for the starting point and end point
                            //variants={titleAnim} // initial="hidden" animate="show" 
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide >
                        <motion.h2 
                            //? here we use hidden and show because it's what we used in titleAnim for the starting point and end point
                            //variants={titleAnim} // initial="hidden" animate="show"
                        >
                            your <span>dreams</span>
                        </motion.h2 >
                    </Hide>
                    <Hide >
                        <motion.h2 
                            //? here we use hidden and show because it's what we used in titleAnim for the starting point and end point
                            //variants={titleAnim} // initial="hidden" animate="show" 
                        >
                            come true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing sklls.
                    
                </p>
                <button>Contact</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    )
}

export default AboutSection