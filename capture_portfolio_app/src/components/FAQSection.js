import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FAQSection = () => {
    const [element, controls] = useScroll();
    return (
        <FAQ
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden">
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How do i start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, in.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, in.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Payment metohds">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, in.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What services do you offer ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, in.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    );
};

const FAQ = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
        font-size: 3rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 1.5rem;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FAQSection;
