import React, { useContext, useEffect, useState } from 'react'
import { ContactContext } from '../../../context/ContactContext';
import { Link, useNavigate } from 'react-router-dom';
import { faRemove, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createContact } from '../../../api/requests';

const Contacts = () => {
    const { contacts, deleteContact } = useContext(ContactContext);
    const [contactsData, setContactsData] = useState([]);
    useEffect(() => {
        setContactsData(contacts);
    }, [contacts])

    const [contact, setContact] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        createContact(contact);
        navigate("/admin/contacts");
        window.location.reload();
    };
    if(contactsData.length ===0){
        return <div className='text-center fs-3 py-5'>There are not any contacts</div>
    }
    return (
        <div className="d-flex align-items-center flex-column py-5">
            <div className="w-50">
                <h2 className='text-center'>All Contacts</h2>
                <table class="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Communication type</th>
                            <th scope="col" colSpan={3}>Adress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactsData.map(contact => (
                                <tr key={contact._id}>
                                    <th scope="row">{contact.communication}</th>
                                    <th scope="row">{contact.information}</th>
                                    <td align='end'>
                                        <Link className="btn btn-warning text-white" to={`/admin/contacts/${contact._id}`}>
                                            <FontAwesomeIcon icon={faUpload} />
                                        </Link>
                                    </td>
                                    <td align='end'>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteContact(contact._id)
                                            window.location.reload();
                                        }}><FontAwesomeIcon icon={faRemove} /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="w-75 d-flex align-items-center flex-column gap-3 mt-5">
                <h2 className="text-center fw-bold display-6">Add new contact</h2>
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
}

export default Contacts