import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FAQSection = () => {
    return (
        <FAQ>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <Toggle>
                <div className="question">
                    <h4>How do i start ?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, in.
                        </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequatur, in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequatur, in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What services do you offer ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequatur, in.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
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
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
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
