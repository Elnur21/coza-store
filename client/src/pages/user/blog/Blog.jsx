import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/head/Header'
import headBack1 from "../../../assets/image/headBack1.webp"
import BlogArticle from './BlogArticle'
import { Link } from 'react-router-dom'
import BlogRightPart from './BlogRightPart'
import { BlogContext } from '../../../context/BlogContext'
export default function Blog() {
    const { blogs } = useContext(BlogContext);
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        setBlogData(blogs)
    }, [blogs])
    return (
        <div className='pb-5'>
            <Header pageName="Blog" backgroundImage={headBack1} />
            <section className='d-flex justify-content-center mt-5 pt-3 pb-5'>
                <div className='w-75 row justify-content-between w-mobile-100'>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        {
                            blogData.map(blog => {
                                const date = new Date(blog.dateCreated)
                                return <BlogArticle
                                    key={blog._id}
                                    articleLink={`/blog/${blog._id}`}
                                    articleImage={blog.image}
                                    day={date.getDate()}
                                    year={`${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`}
                                    articleHead={blog.name}
                                    articleInfo={`${blog.description.substring(0, 200)}...`}
                                    commentCount={blog.comments}
                                />
                            })
                        }
                        <nav className='mt-3'>
                            <ul className="pagination pagination-sm">
                                <li className="page-item active me-3" aria-current="page"><Link className="page-link bg-secondary rounded-circle py-2 px-3 border-secondary" to="/">1</Link></li>
                                <li className="page-item"><Link className="page-link rounded-circle py-2 px-3 border-secondary text-secondary bg-transparent" to="/">2</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <BlogRightPart />
                </div>
            </section>
        </div>
    )
}
