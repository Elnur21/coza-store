import React, { createContext, useEffect, useState } from 'react';
import { addComment, deleteBlogById, getBlogs, updateBlogById } from '../api/requests';

const BlogContext = createContext();


const BlogContextProvider = ({ children }) => {
    const deleteBlog = async (id) => {
        await deleteBlogById(id);
    }
    const updateBlog = async (blog, id) => {
        await updateBlogById(blog, id);
    }
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getBlogs()
            .then(data => {
                setBlogs(data)
            });
    }, []);
    const commentToBlog = async (blog) => {
        console.log(blog)
        addComment(blog);
    }


    const value = {
        blogs,
        deleteBlog,
        updateBlog,
        commentToBlog
    };


    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export { BlogContext, BlogContextProvider };
