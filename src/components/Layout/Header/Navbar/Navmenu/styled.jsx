import styled from "styled-components";

export default styled.div`
    cursor: pointer;
    z-index: 10;
    
    ul {
        position: absolute;
        top: 5%;
        right: 0px;
        background: #272726;
        border-radius: 0px 0px 10px 10px;
        padding: 20px;
    }

    li {
        margin: 0 0 10px 10px;
        list-style-type: none;
    }

    li:hover a{
        color: orange;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        ul {
            position: absolute;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        ul {
            position: absolute;
            top: 3%;
            font-size: 1rem;
        }
    }
`;