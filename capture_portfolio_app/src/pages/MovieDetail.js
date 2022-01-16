import { useState, useEffect } from "react";
import styled from "styled-components";
import {MovieState} from "../movieState";
// import {useHistory} from "react-router-dom";
import { useLocation } from "react-router"; //useLocation instead of useHistory

import { motion } from "framer-motion";
import {pageAnimation} from "../animation";

const MovieDetail = () => {
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    const url = useLocation();

    useEffect(() => {
      const currentMovie = movies.filter(
        (stateMovie) => stateMovie.url === url.pathname
      );
      if(currentMovie[0]) setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show"> 
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </Headline>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title}/> //? Award component down below
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
            )};
        </>
    )
};

const Details = styled(motion.div) `
    color:white;
`;

const Headline = styled.div `
    min-height:90vh;
    padding-top:20vh;
    position:relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform:translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div `
    min-height: 80vh;
    display:flex;
    margin: 5rem 10rem;
    align-items:center;
    justify-content:space-around;
`;

const AwardStyle = styled.div `
    padding:3rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background-color: #23d997;
        height: 0.5rem;
        margin : 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`

//! Award Component
const Award = ({title,description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
}

//! Image display styled component
const ImageDisplay = styled.div `
    min-height: 50vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default MovieDetail;