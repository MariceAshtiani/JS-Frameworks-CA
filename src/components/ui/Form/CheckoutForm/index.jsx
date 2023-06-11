import { useContext, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import StyledForm from "../ContactForm/styled";
import BasicButton from "../../Buttons/styled";
import { ShoppingCartContext } from "../../../Context";
import ModalStyles from "../../../../styles/ModalStyles";
Modal.setAppElement("#root");

const startingForm = {
    name: "",
    address: "",
    email: "",
    cc: "",
};

export default function CheckoutForm() {
    const [formData, setFormData] = useState(startingForm);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const GlobalState = useContext(ShoppingCartContext);
    const state = GlobalState.state;
    const orderedItems = state.item;
    const placeholder = 1;
    const dispatch = GlobalState.dispatch;

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Customer info:", formData, "Order Summary:", orderedItems);

        setIsSubmitted(!isSubmitted);
        setFormData(startingForm);
        setIsModalOpen(true);
        dispatch({ type: "Checkout", payload: placeholder });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Modal isOpen={isModalOpen} style={ModalStyles}>
                <h2> Thank you for your purchase!</h2>
                <p>The package will be sent shortly!</p>

                <Link to="/">
                    <BasicButton>HOME</BasicButton>
                </Link>
            </Modal>
            {isSubmitted && <h2>Message submitted</h2>}
            <div className="input-group">
                <div>
                    <label htmlFor="name">Full Name</label>
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
                    <label htmlFor="address">Address</label>
                    <input 
                    className="form-input"
                    onChange={handleChange}
                    type="text"
                    name="address"
                    value={formData.address}
                    placeholder="Address"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    className="form-input"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    required 
                    />
                </div>
                <div>
                    <label htmlFor="credit">Credit card</label>
                    <input
                    className="form-input"
                    onChange={handleChange}
                    type="tel"
                    name="cc"
                    value={formData.cc}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                    minLength={3}
                    maxLength={19}
                    inputMode="numeric"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    autoComplete="cc-number"
                    />
                </div>
            </div>
            <BasicButton>Checkout</BasicButton>
        </StyledForm>
    );
};