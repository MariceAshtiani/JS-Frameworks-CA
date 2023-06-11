import BasicButton from "../../components/ui/Buttons/styled";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";


export default function CheckoutSuccessPage() {

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>TrendCart | Checkout success</title>
            </Helmet>
        </HelmetProvider>
        <main>
            <div className="mainContainer successContainer">
                <section>
                    <h1>Order Complete!</h1>
                        <h2>Thank you for your purchase!</h2>
                            <p>Your order will be handled and sent shortly!</p>


                    <Link to="/">
                        <BasicButton>Back Home</BasicButton>
                    </Link>
                </section>
            </div>
        </main>
        </>
    );
};