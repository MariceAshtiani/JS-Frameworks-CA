import styled from "styled-components";

export default styled.div`
    .cart-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        margin: 0 auto;
        align-content: right;
    }

    a {
        text-align: center;
    }

    .total {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 2px solid orange;
        text-align: right;
        font-size: 1.8rem;
        font-weight: bold;
    }

    .shipping {
        text-align: end;
        margin-top: 0;
    }

    Link {
        align-items: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        .product-info {
            padding-bottom: 20px;
        }
    }
`;