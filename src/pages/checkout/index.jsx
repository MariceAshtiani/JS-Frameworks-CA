import CheckoutForm from "../../components/ui/Form/CheckoutForm";
import Cart from "../../components/ui/Cart";

import { Helmet, HelmetProvider } from "react-helmet-async";

export default function CheckoutPage() {
    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>TrendCart | Checkout</title>
            </Helmet>
        </HelmetProvider>
        <main>
            <h1>Checkout</h1>
            <div className="mainContainer">
                <section>
                    <StyledHeader>
                        <h2>Order Confirmation</h2>
                    </StyledHeader>
                    
                    <Cart />
                </section>
                <section>
                <StyledHeader>
                        <h2>Payment details</h2>
                    </StyledHeader>
                    <CheckoutForm />
                </section>
            </div>
        </main>
        </>
    );
};