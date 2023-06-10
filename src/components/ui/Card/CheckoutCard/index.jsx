import { ShoppingCartCard } from "../ShoppingCard/styled";

export default function CheckoutProducts(props) {
    const item = props.item;

    return (
        <ShoppingCartCard key={item.id} className="card-small">
            <h3>{item.title}</h3>
            <div className="product-info">
                <div className="img-wrapper">
                    <img src={item.imageUrl} alt={item.title}></img>
                </div>
                <div className="price-wrapper">
                    <div>NOK {item.price}</div>
                    <p> QTY: {item.quantity}</p>
                </div>
            </div>
        </ShoppingCartCard>
    );
};