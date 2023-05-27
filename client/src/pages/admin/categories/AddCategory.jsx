import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createCategory } from '../../../api/requests';

const AddCategory = () => {
    const [category, setCategory] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        createCategory(category)
        navigate("/admin/categories")
    };

    return (
        <div className="d-flex justify-content-center py-5 my-5">
            <div className="w-75 d-flex align-items-center flex-column gap-3">
                <h2 className="text-center fw-bold display-6">Category information</h2>
                <form className="w-50" onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Category name
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
}

export default AddCategory