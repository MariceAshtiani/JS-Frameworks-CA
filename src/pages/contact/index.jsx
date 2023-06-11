import ContactForm from "../../components/ui/Form/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactPage() {
    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>TrendCart | Contact</title>
            </Helmet>
        </HelmetProvider>
        <main>
            <h1>Contact</h1>
            <div className="mainContainer">
                <ContactForm />
            </div>
        </main>
        </>
    );
};