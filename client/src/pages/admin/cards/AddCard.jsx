import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { createCard } from "../../../api/requests";

const AddCard = () => {
    const { categories } = useContext(CategoryContext);
    const [cardCategories, setCardCategories] = useState([]);
    const [card, setCard] = useState({});
    useEffect(() => {
        setCardCategories(categories)
    }, [categories]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('imageFile', selectedFile);
        formData.append('name', card.name);
        formData.append('price', card.price);
        formData.append('category', card.category);
        await createCard(formData);
        navigate("/admin/cards");
        window.location.reload();
    };

    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75 d-flex align-items-center flex-column gap-3">
                <h2 className="text-center fw-bold display-6">Card information</h2>
                <form className="w-50" onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Name
                        </span>
                        <input
                            name="name"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input
                            name="image"
                            type="file"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleFileSelect}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Price
                        </span>
                        <input
                            name="price"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Category
                        </span>
                        <select
                            name="category"
                            className="form-select fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        >
                            <option
                                selected disabled
                            >
                                Select category
                            </option>
                            {
                                cardCategories.map(category => (
                                    <option
                                        value={`${category._id}`}
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary rounded-pill w-100 py-3 fs-5"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCard;
