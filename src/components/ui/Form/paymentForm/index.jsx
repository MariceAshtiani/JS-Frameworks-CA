import { useState } from "react";
import { Link } from "react-router-dom";

import StyledForm from "../ContactForm/styled";
import BasicButton from "../../Buttons/styled";

const startForm = {
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    securityNumber: "",
};

export default function PaymentForm() {
    const [formData, setFormData] = useState(startForm);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Payment info:", formData);

        setIsSubmitted(!isSubmitted);
        setFormData(startForm);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="input-group">
                <div>
                    <label htmlFor="cardName">Cardholder's Name</label>
                    <input 
                    className="form-input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    required
                    minLength={3}
                    />
                </div>
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input 
                    className="form-input"
                    onChange={handleChange}
                    type="tel"
                    name="cardNumber"
                    value={formData.cardNumber}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                    minLength={3}
                    maxLength={19}
                    inputMode="numeric"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    autoComplete="cc-number"
                    />
                </div>
                <div>
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input 
                    className="form-input"
                    onChange={handleChange}
                    type="date"
                    name="expirationDate"
                    value={formData.expirationDate}
                    placeholder="Expiration date"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="securityNumber">Security Number</label>
                    <input
                    className="form-input"
                    onChange={handleChange}
                    type="number"
                    name="securityNumber"
                    value={formData.securityNumber}
                    placeholder="XXX"
                    required 
                    minLength={3}
                    />
                </div>
            </div>
            <div className="paymentButton">
            <Link to="/checkoutSuccess">
                    <BasicButton>Complete payment</BasicButton>
                </Link>
            </div>
        </StyledForm>
    )
}