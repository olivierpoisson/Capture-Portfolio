import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
    return (
        <ContactStyle
            style={{ background: "#fff" }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>
                        Get in touch.
                    </motion.h2>
                </Hide>
            </Title>
            <div className="">
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Social media</h2>
                    </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 3rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
    @media (max-width: 540px) {
        h2 {
            font-size: 3rem;
        }
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        margin-tp: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #353535;
`;

export default ContactUs;
