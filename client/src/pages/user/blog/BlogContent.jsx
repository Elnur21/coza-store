import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlogRightPart from "./BlogRightPart";
import { BlogContext } from "../../../context/BlogContext";
import { baseUrl } from "../../../api/base_url";

export default function BlogContent() {
  const { blogs, commentToBlog } = useContext(BlogContext);
  const navigate = useNavigate()
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(blogs.filter((blog) => blog._id === id)[0]);
  }, [blogs]);
  const date = new Date(blog.dateCreated);
  const imageUrl = baseUrl + '/uploads/' + blog.image;
  
  return (
    <section className="d-flex justify-content-center my-5 flex-wrap">
      <div className="d-flex justify-content-start w-75 px-4 text-muted">
        <Link to="/" className="text-decoration-none text-muted pe-2">
          Home
        </Link>
        &gt;{" "}
        <Link to="/blog" className="px-2 text-decoration-none text-muted">
          Blog
        </Link>
        &gt; {blog.name}
      </div>
      <div className="w-75 d-flex mt-5 gap-4 flex-lg-row flex-column">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12 position-relative">
          <span className="text-decoration-none">
            <img src={imageUrl} alt="article_image" className="w-100" />
            <div className="position-absolute top-0 mt-4 ms-4  start-0 bg-white text-dark article-date text-center p-2">
              <span className="h1 fw-bold">{date.getDate()}</span> <br />
              <span>
                {date.toLocaleString("default", { month: "long" })}{" "}
                {date.getFullYear()}
              </span>
            </div>
          </span>
          <div className="row h6 justify-content-between mt-4 pt-3">
            <div className="col-lg-7">
              <span className="text-muted">By</span> Admin | StreetStyle,
              Fashion, Couple | {blog.comments} Comments
            </div>
            <div className="col-lg-4"></div>
          </div>
          <h2 className="fw-bold mt-3">{blog.name}</h2>
          <p className="text-muted h6 mt-3">
            {blog.description} nunc sit amet est vel orci luctus sollicitudin.
            Duis eleifend vestibulum justo, varius semper lacus condimentum
            dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam,
            vel sodales metus accumsan in. Duis viverra dui eu pharetra
            pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem
            efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id
            tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh,
            id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet.
            Donec ac purus id sapien condimentum feugiat.
            <br />
            <br />
            Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
            Pellentesque sem ex, tristique sit amet suscipit in, mattis
            imperdiet enim. Integer tempus justo nec velit fringilla, eget
            eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris
            eu turpis eget tortor ultricies elementum. Phasellus vel placerat
            orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae
            vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis,
            quis vulputate
          </p>
          <div className="my-5">
            <span className="me-3">Tags</span>
            <Link
              to="/"
              className="text-decoration-none text-muted border border-secondary px-3 py-1 mx-1 rounded-pill"
            >
              Streetstyle
            </Link>
            <Link
              to="/"
              className="text-decoration-none text-muted border border-secondary px-3 py-1 mx-1 rounded-pill"
            >
              Crafts
            </Link>
          </div>
          <form onSubmit={()=>{
            commentToBlog(blog)
            navigate("/blog")
            window.location.reload()
          }}>
            <h5 className="fw-bold">LEAVE A COMMENT</h5>
            <p className="text-muted mb-3">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <textarea
              placeholder="Comment..."
              className="form-control text-start p-2 shadow-none"
              rows="5"
            ></textarea>
            <br />
            <br />
            <input
              placeholder="Name *"
              type="text"
              className="form-control text-start p-2 shadow-none"
              required
            />
            <br />
            <br />
            <input
              placeholder="Email *"
              type="email"
              className="form-control text-start p-2 shadow-none"
              required
            />
            <br />
            <br />
            <input
              placeholder="Website"
              type="text"
              className="form-control text-start p-2 shadow-none"
            />
            <br />
            <br />
            <button type="submit" className="btn text-white bg-dark shadow-none px-4 rounded-pill">
              POST COMMENT
            </button>
          </form>
        </div>
        <BlogRightPart />
      </div>
    </section>
  );
}
