//! Styled Components
import styled from "styled-components";
import { Link } from "react-router-dom";

//! Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import {pageAnimation,  fade, photoAnim, lineAnim, slider, sliderContainer} from "../animation";

const OurWork = () => {
    return (
        <Work style={{background: "#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The ahtlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/ourwork/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className="line"></div>
                <Link to="/ourwork/the-racer"><img src={theracer} alt="theracer" /></Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/ourwork/good-times"><img src={goodtimes} alt="goodtimes" /></Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div) `
    min-height:100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div `
    padding-bottom:10rem;
    .line {
        height:0.5rem;
        background-color:#23d997;
        margin-bottom:3rem;
    }
    img {
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`
const Hide = styled.div `
    overflow: hidden;
`
//! Frame animation (rainbow wave)
const Frame1 = styled(motion.div) `
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1) `
    background-color: #ff8efb;
`
const Frame3 = styled(Frame1) `
    background-color: #8ed2ff;
`
const Frame4 = styled(Frame1) `
    background-color: #8effa0;
`

export default OurWork;