import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import { faRemove, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBlog } from "../../../api/requests";

const Blogs = () => {
    const { blogs, deleteBlog } = useContext(BlogContext);
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        setBlogsData(blogs);
    }, [blogs]);

    const [blog, setBlog] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevBlog) => ({
            ...prevBlog,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('imageFile', selectedFile);
        formData.append('name', blog.name);
        formData.append('description', blog.description);
        createBlog(formData);
        navigate("/admin/blogs");
        window.location.reload();
    };

    return (
        <div className="d-flex align-items-center flex-column py-5">
            <div className="w-75">
                <h2 className="text-center">All Blogs</h2>
                <table class="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col" colSpan={3}>
                                Image URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogsData.map((blog) => (
                            <tr key={blog._id}>
                                <th scope="row">{blog.name}</th>
                                <th scope="row">{`${blog.description.substring(0, 100)}...`}</th>
                                <th scope="row">{blog.image}</th>
                                <td align="end">
                                    <Link
                                        className="btn btn-warning text-white"
                                        to={`/admin/blogs/${blog._id}`}
                                    >
                                        <FontAwesomeIcon icon={faUpload} />
                                    </Link>
                                </td>
                                <td align="end">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            deleteBlog(blog._id);
                                            window.location.reload();
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faRemove} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-75 d-flex align-items-center flex-column gap-3 mt-5">
                <h2 className="text-center fw-bold display-6">Add new blog</h2>
                <form className="w-75" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Name
                        </span>
                        <input
                            value={blog.name}
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
                            Description
                        </span>
                        <textarea
                            value={blog.description}
                            name="description"
                            type="text"
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        ></textarea>
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

export default Blogs;
