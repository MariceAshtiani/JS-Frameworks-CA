import styled from "styled-components";

export const ShoppingCartCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-top: 20px;
    border-top: 2px solid orange;

    > * {
        flex: 1;
    }

    .img-wrapper {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        overflow: hidden;
        text-align: center;
    }

    img {
        max-width: 100%;
    }

    .product-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .qty-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        button {
            margin: 0;
        }
    }

    .bin:hover {
        color: orange;
        cursor: pointer;
}

p {
    flex: auto;
    text-align: end;
}

.price-wrapper {
    text-align: right;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

}

`;