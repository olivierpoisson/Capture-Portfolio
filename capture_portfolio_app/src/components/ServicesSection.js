//! Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//! Styles
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
//? Control WHEN an animation starts in framer motion not
//? just when the components renders on screen
import { useAnimation } from "framer-motion";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services
            variants={fade}
            animate={controls}
            initial="hidden"
            ref={element}>
            <Description>
                <h2>
                    High <span>quality</span> service.
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon-clock" src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon-teamwork" src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon-diaphgragm" src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon-money" src={money} alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>
    );
};

//? Modifying an existing styled component
const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
        width: 85%;
    }
    @media (max-width: 1000px) {
        justify-content: space-evenly;
        margin: 0;
        width: 100%;
    }
    @media (max-width: 800px) {
        padding: 0rem 8rem;
    }
    @media (max-width: 620px) {
        padding: 0rem 1rem;
    }
`;

const Card = styled.div`
    flex-basis: 15rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background-color: white;
            color: #000;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
