import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardContext } from "../../../context/CardContext";
import { CategoryContext } from "../../../context/CategoryContext";

const CardUpdate = () => {
    const { basicData, updateCard } = useContext(CardContext);
    const { categories } = useContext(CategoryContext);
    const { id } = useParams();
    const [card, setCard] = useState({});
    const [cardCategories, setCardCategories] = useState([]);
    useEffect(() => {
        setCard(basicData.filter((card) => card._id === id)[0]);
        setCardCategories(categories)
    }, [basicData, id, categories]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        updateCard(card)
        navigate("/admin/cards")
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
                            value={card.name}
                            name="name"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Picture
                        </span>
                        <input
                            value={card.image}
                            name="image"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Price
                        </span>
                        <input
                            value={card.price}
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
                            value={card.category}
                            name="category"
                            className="form-select fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        >
                            {
                                cardCategories.map(category => (
                                    <option
                                        value={`${category._id}`}
                                        selected={category._id === card.category ? true : false}
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success rounded-pill w-100 py-3 fs-5"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CardUpdate;
