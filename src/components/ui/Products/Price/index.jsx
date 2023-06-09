import StyledPrice from "./styled";

export default function Price(props) {
    const { price, discountedPrice } = props;
    const discountRate = Math.ceil(price / discountedPrice - 1);

    return (
        <StyledPrice>
        {discountRate > 0 ? (
            <div>
                <strike>NOK {price},-</strike>
                <p>NOK {discountedPrice},-</p>
            </div>
        ) : (
            <p>NOK {price},-</p>
        )}
        </StyledPrice>
    );
};