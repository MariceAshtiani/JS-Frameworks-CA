import styled from "styled-components";

export default styled.div`
    text-align: bottom;
    border-top: 1px solid orange;
    
    .star {
        color: orange;
    }

    .review {
        display: flex;
        margin-top: 20px;
        gap: 2rem;
        > * {
            margin: 0;
        }
    }
`;