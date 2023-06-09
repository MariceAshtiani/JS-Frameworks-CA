import styled from "styled-components";

export default styled.div`
display: flex;
    height: 60vh;
    background-image: url("/images/hero-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;

    h1 {
        text-shadow: #000000 10px 0px 10px;
        color: #f6f6f6;
        font-family: "roboto";
        font-size: 4rem;
        margin: auto;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 50vh;
        
        h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 30vh;
        margin-bottom: 10px;
        
        h1 {
            font-size: 2.5vmax;
        }
    }
`;