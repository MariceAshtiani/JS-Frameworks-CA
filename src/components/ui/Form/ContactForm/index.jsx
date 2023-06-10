import StyledForm from "./styled";
import BasicButton from "../../Buttons/styled";

import { useState } from "react";

const startForm = {
    name: "",
    subject: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const [ formData, setFormData ] = useState(startForm);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        setIsSubmitted(!isSubmitted);
        setFormData(startForm);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            {isSubmitted && (
                <h2 className="success">Thank you for you message! We will get back to you!</h2>
            )}
            
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
                    <label htmlFor="name">Subject</label>
                    <input 
                    className="form-input"
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    placeholder="Subject"
                    required 
                    minLength={3}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email</label>
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
                    <label htmlFor="name">Message</label>
                    <textarea 
                    className="form-input"
                    onChange={handleChange}
                    type="text"
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    required 
                    minLength={3}
                    />
                </div>
            </div>
            <div>
                <BasicButton text="Submit">Submit</BasicButton>
            </div>
        </StyledForm>
    );
};