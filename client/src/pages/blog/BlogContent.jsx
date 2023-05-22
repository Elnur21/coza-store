import React from 'react'
import { Link } from 'react-router-dom'
import article1 from "../../assets/image/article1.jfif"
import BlogRightPart from './BlogRightPart'

export default function BlogContent() {
    return (
        <section className='d-flex justify-content-center my-5 flex-wrap'>
            <div className='d-flex justify-content-start w-75 px-4 text-muted'>
                <Link to="/" className='text-decoration-none text-muted pe-2'>Home</Link> &gt; <Link to="/blog" className='px-2 text-decoration-none text-muted'>Blog</Link> &gt; 8 Inspiring Ways to Wear Dresses in the Winter
            </div>
            <div className='w-75 d-flex justify-content-between mt-5'>
                <div className='col-lg-8'>
                    <span className='position-relative text-decoration-none'>
                        <img src={article1} alt="article_image" className='w-100' />
                        <div className='position-absolute bg-white text-dark article-date text-center p-2'>
                            <span className='h1 fw-bold'>
                                22
                            </span> <br />
                            <span>
                                Jan 2018
                            </span>
                        </div>
                    </span><br /><br /><br />
                    <div className='row h6 justify-content-between mt-4'>
                        <div className='col-lg-7'><span className='text-muted'>By</span> Admin |
                            StreetStyle, Fashion, Couple |
                            8 Comments</div>
                        <div className='col-lg-4'>
                        </div>
                    </div><br /><br /><br />
                    <h2 className='fw-bold'>8 Inspiring Ways to Wear Dresses in the Winter</h2>
                    <br />
                    <p className='text-muted h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
                        <br /><br />
                        Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
                    </p><br /><br />
                    <div>
                        <span className='me-3'>Tags</span> <Link to="/" className='text-decoration-none text-muted border border-secondary px-3 py-1 mx-1 rounded-pill'>Streetstyle</Link><Link to="/" className='text-decoration-none text-muted border border-secondary px-3 py-1 mx-1 rounded-pill'>Crafts</Link>
                    </div><br /><br />
                    <form>
                        <h5 className='fw-bold'>LEAVE A COMMENT</h5>
                        <p className='text-muted'>Your email address will not be published. Required fields are marked *</p>
                        <br />  <textarea placeholder='Comment...' className='w-100 btn text-start p-2 shadow-none border' rows="5"></textarea><br /><br />
                        <input placeholder='Name *' type="text" className=' btn text-start p-2 shadow-none border' /><br /><br />
                        <input placeholder='Email *' type="email" className=' btn text-start p-2 shadow-none border' /><br /><br />
                        <input placeholder='Website' type="text" className=' btn text-start p-2 shadow-none border' /><br /><br />
                        <button className='btn text-white bg-dark shadow-none px-4 rounded-pill'>POST COMMENT</button>
                    </form>
                </div>
                <BlogRightPart />
            </div>
        </section>
    )
}
