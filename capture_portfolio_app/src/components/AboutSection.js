import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//! Framer Motion
import { motion } from "framer-motion";
import {titleAnimation, fade, photoAnim} from "../animation";
//! Wave 
import Wave from "./Wave";

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
                    //variants={container} initial="hidden" animate="show" className="title"
                >
                    <Hide >
                        <motion.h2 
                            //? here the initial, hidden and exit are herited from the parent motion.div in AboutUs.js
                            variants={titleAnimation} // initial="hidden" animate="show" 
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide >
                        <motion.h2 
                            //? here the initial, hidden and exit are herited from the parent motion.div in AboutUs.js
                            variants={titleAnimation} // initial="hidden" animate="show"
                        >
                            your <span>dreams</span>
                        </motion.h2 >
                    </Hide>
                    <Hide >
                        <motion.h2 
                            //? here the initial, hidden and exit are herited from the parent motion.div in AboutUs.js
                            variants={titleAnimation} // initial="hidden" animate="show" 
                        >
                            come true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing sklls.
                </motion.p>
                <motion.button variants={fade}>Contact</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave/>
        </About>
    )
}

export default AboutSection