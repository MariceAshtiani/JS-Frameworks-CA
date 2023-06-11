import Cart from "../../components/ui/Cart";
import { Helmet, HelmetProvider } from "react-helmet-async";


export default function CartPage() {
    return(
        <>
        <HelmetProvider>
            <Helmet>
                <title>TrendCart | Cart</title>
            </Helmet>
        </HelmetProvider>
        <main>
            <h1>View Cart</h1>
            <Cart />
        </main>
        </>
    );
};