import StyledCard from "./styled";
import { Link } from "react-router-dom";
import Price from "../Products/Price";

export default function ProductCard(props) {
    const { price, discountedPrice } = props;
    const discountRate = Math.ceil((price / discountedPrice - 1) * 100);

    return (
        <Link to={`product/${props.id}`}>
            <StyledCard>
                {discountRate > 0 && <span> {discountRate} % off</span>}

                <img src={props.img} alt={props.title} />
                <div className="productCardText">
                    <h3>{props.title}</h3>
                    <Price
                    price={props.price}
                    discountedPrice={props.discountedPrice}
                    ></Price>
                </div>
            </StyledCard>
        </Link>
    );
};
