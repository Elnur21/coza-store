import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../../context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
    const { contacts, updateContact } = useContext(ContactContext);
    const { id } = useParams();
    const [contact, setContact] = useState({});
    useEffect(() => {
        setContact(contacts.filter((contact) => contact._id === id)[0]);
    }, [contacts, id]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        updateContact(contact);
        navigate("/admin/contacts");
        window.location.reload();
    };

    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75 d-flex align-items-center flex-column gap-3">
                <h2 className="text-center fw-bold display-6">Contact information</h2>
                <form className="w-50" onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Commmunication type
                        </span>
                        <input
                            value={contact.communication}
                            name="communication"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Address information
                        </span>
                        <input
                            value={contact.information}
                            name="information"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success rounded-pill w-100 py-3 fs-5"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateContact;
