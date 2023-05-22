import React from 'react'
import Header from '../../components/head/Header'
import headBack1 from "../../assets/image/headBack1.webp"
import BlogArticle from './BlogArticle'
import article1 from "../../assets/image/article1.jfif"
import article2 from "../../assets/image/article2.jfif"
import article3 from "../../assets/image/article3.jfif"
import { Link } from 'react-router-dom'
import BlogRightPart from './BlogRightPart'
export default function Blog() {
    return (
        <div>
            <Header pageName="Blog" backgroundImage={headBack1} /><br /><br /><br />
            <section className='d-flex justify-content-center'>
                <div className='w-75 row justify-content-between w-mobile-100'>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <BlogArticle
                            articleLink="/blog/blog-content"
                            articleImage={article1}
                            day="22"
                            year="Jan 2018"
                            articleHead="8 Inspiring Ways to Wear Dresses in the Winter"
                            articleInfo="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
                        />
                        <BlogArticle
                            articleLink="/blog/blog-content"
                            articleImage={article2}
                            day="18"
                            year="Jan 2018"
                            articleHead="The Great Big List of Men’s Gifts for the Holidays"
                            articleInfo="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
                        />
                        <BlogArticle
                            articleLink="/blog/blog-content"
                            articleImage={article3}
                            day="16"
                            year="Jan 2018"
                            articleHead="5 Winter-to-Spring Fashion Trends to Try Now"
                            articleInfo="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
                        /><br />
                        <nav aria-label="...">
                            <ul className="pagination pagination-sm">
                                <li className="page-item active me-3" aria-current="page"><Link className="page-link bg-secondary rounded-circle py-2 px-3 border-secondary" to="/">1</Link></li>
                                <li className="page-item"><Link className="page-link rounded-circle py-2 px-3 border-secondary text-secondary bg-transparent" to="/">2</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <BlogRightPart/>
                </div>
            </section><br /><br /><br /><br /><br /><br />
        </div>
    )
}
