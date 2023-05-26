import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const UserUpdate = () => {
    const { users, updateUser } = useContext(UserContext);
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(users.filter((user) => user._id === id)[0]);
    }, [users, id]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        updateUser(user)
        navigate("/admin/users")
    };

    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75 d-flex align-items-center flex-column gap-3">
                <h2 className="text-center fw-bold display-6">User information</h2>
                <form className="w-50" onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Name
                        </span>
                        <input
                            value={user.name}
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
                            Last Name
                        </span>
                        <input
                            value={user.lastName}
                            name="lastName"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Role
                        </span>
                        <select
                            value={user.role}
                            name="role"
                            className="form-select fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        >
                            <option
                                value="user"
                                selected={user.role === "user" ? true : false}
                            >
                                User
                            </option>
                            <option
                                value="admin"
                                className="text-danger"
                                selected={user.role !== "user" ? true : false}
                            >
                                Admin
                            </option>
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

export default UserUpdate;
