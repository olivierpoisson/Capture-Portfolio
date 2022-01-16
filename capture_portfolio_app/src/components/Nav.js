import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link className="link" to="/aboutus">1. About Us</Link>
                </li>
                <li>
                    <Link className="link" to="/ourwork">2. Our Work</Link>
                </li>
                <li>
                    <Link className="link" to="/contactus">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav `
    min-height: 10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 10rem;
    background-color:#282828;
    .link {
        color:white;
        text-decoration:none;
        font-size: 1rem;
        font-weight:lighter;
    }
    ul {
        display:flex;
        list-style:none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight:lighter;
        color:white;
        text-decoration:none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;


export default Nav