import { useContext, useState } from "react";
import Modal from "react-modal";

import StyledForm from "../ContactForm/styled";
import BasicButton from "../../Buttons/styled";
import { ShoppingCartContext } from "../../../Context";
import ModalStyles from "../../../../styles/ModalStyles";
import PaymentForm from "../paymentForm";
Modal.setAppElement("#root");

const startingForm = {
    name: "",
    address: "",
    email: "",
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
                <h2>Payment</h2>
                <PaymentForm />
            </Modal>
            {isSubmitted}
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
            </div>
            <BasicButton>Checkout</BasicButton>
        </StyledForm>
    );
};