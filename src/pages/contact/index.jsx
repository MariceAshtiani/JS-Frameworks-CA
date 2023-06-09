import ContactForm from "../../components/ui/Form/ContactForm";
import StyledHeadline from "./styled";
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
            <StyledHeadline>
                <h1>Contact</h1> 
            </StyledHeadline>
            <div className="mainContainer">
                <ContactForm />
            </div>
        </main>
        </>
    );
};