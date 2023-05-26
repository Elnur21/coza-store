import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faUpload } from "@fortawesome/free-solid-svg-icons";

const Users = () => {
    const { users,deleteUser } = useContext(UserContext);
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        setUsersData(users);
    }, [users])


    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75">
                <h2>All Users</h2>
                <table class="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Products</th>
                            <th scope="col">Likes</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersData.map(user => (
                                <tr key={user._id}>
                                    <th scope="row">{user.name}</th>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.cart.length}</td>
                                    <td>{user.likes.length}</td>
                                    <td>
                                        <Link className="btn btn-warning text-white" to={`admin/users/${user._id}`}>
                                            <FontAwesomeIcon icon={faUpload} />
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>deleteUser(user._id)}><FontAwesomeIcon icon={faRemove} /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
