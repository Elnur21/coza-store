import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../../../context/CategoryContext';
import { Link } from 'react-router-dom';
import { faRemove, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Categories = () => {
    const { categories, deleteCategory } = useContext(CategoryContext);
    const [categoriesData, setCategoriesData] = useState([]);
    useEffect(() => {
        setCategoriesData(categories);
    }, [categories])


    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75">
                <h2>All Categories</h2>
                <table class="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Category Name</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoriesData.map(category => (
                                <tr key={category._id}>
                                    <th scope="row">{category.name}</th>
                                    <td>
                                        <Link className="btn btn-warning text-white" to={`/admin/categories/${category._id}`}>
                                            <FontAwesomeIcon icon={faUpload} />
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteCategory(category._id)}><FontAwesomeIcon icon={faRemove} /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Categories