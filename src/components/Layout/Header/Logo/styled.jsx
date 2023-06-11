import styled from "styled-components";

export default styled.div`
    font-family: "Museo Sans";
    font-size: 3rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`;