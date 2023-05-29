import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
    const { blogs, updateBlog } = useContext(BlogContext);
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        setBlog(blogs.filter((blog) => blog._id === id)[0]);
    }, [blogs, id]);
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
        updateBlog(formData, blog._id);
        navigate("/admin/blogs");
        window.location.reload();
    };

    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75 d-flex align-items-center flex-column gap-3">
                <h2 className="text-center fw-bold display-6">Blog information</h2>
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
                            className="form-control fs-5"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-5" id="inputGroup-sizing-default">
                            Image URL
                        </span>
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
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;
