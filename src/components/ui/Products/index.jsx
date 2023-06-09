import ProductCard from "../Card";
import StyledProductList from "./styled";

export default function ProductList(props) {
    return (
        <StyledProductList>
            {props.products.map((product) => {
                return (
                    <ProductCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.imageUrl}
                    discountedPrice={product.discountedPrice}
                    />
                );
            })}
        </StyledProductList>
    );
}