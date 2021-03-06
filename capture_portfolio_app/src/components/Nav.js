import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="/">
                        1. About Us
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/" ? "50%" : "0%",
                        }}
                    />
                </li>
                <li>
                    <Link className="link" to="/ourwork">
                        2. Our Work
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/ourwork" ? "50%" : "0%",
                        }}
                    />
                </li>
                <li>
                    <Link className="link" to="/contactus">
                        3. Contact Us
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/contactus" ? "50%" : "0%",
                        }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    .link {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: lighter;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        color: white;
        text-decoration: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            //? inline-block because you normally cant put margin or padding to an "a" tag
            //? because its just inline by default.
            display: inline-block;
            margin: 2rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding-left: 0;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`;

export default Nav;
