import { styled } from "styled-components";

const StyledHeader = styled.header`
background-color: black;
color: white;
`

export default function Header(props) {

    return (
    <StyledHeader>
        {props.children}

        <button>I'm the cart</button>
    </StyledHeader>
    )
}