import styled from "styled-components";

export default styled.nav`
    gap: 2rem;
    display: flex;
    align-items: center;
    
    li{
        a {
            font-weight: bold;
            color: #ffffff;
        }
    }

    li:hover a{
        color: orange;
    }
`;