import React from 'react'
import featured1 from "../../assets/image/featureed1.webp"
import featured2 from "../../assets/image/featured2.webp"
import featured3 from "../../assets/image/featured3.webp"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Featured from './Featured'
export default function BlogRightPart() {
    return (
        <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='w-100 d-flex'>
                <input type="text" placeholder='Search' className='w-100 btn bg-transparent text-start border rounded-0 rounded-end rounded-pill border-end-0 shadow-none p-3' /><button className='p-3 border-start-0 btn bg-transparent rounded-0 rounded-start rounded-pill border shadow-none'><FontAwesomeIcon icon={faSearch} /></button>
            </div><br /><br /><br />
            <div className=''>
                <h4 className='fw-bold'>Categories</h4>
                <ul className='p-0 mt-5' type="none">
                    <li className='border border-start-0 border-end-0 py-2'><Link className="text-decoration-none text-muted" to="/blog">Fashion</Link></li>
                    <li className='border border-start-0 border-end-0 py-2'><Link className="text-decoration-none text-muted" to="/blog">Beauty</Link></li>
                    <li className='border border-start-0 border-end-0 py-2'><Link className="text-decoration-none text-muted" to="/blog">Street Style</Link></li>
                    <li className='border border-start-0 border-end-0 py-2'><Link className="text-decoration-none text-muted" to="/blog">Life Style</Link></li>
                    <li className='border border-start-0 border-end-0 py-2'><Link className="text-decoration-none text-muted" to="/blog">DIY & Crafts</Link></li>
                </ul>
            </div><br /><br />
            <div>
                <h4 className='fw-bold'>Featured Products</h4>
                <ul className='p-0 mt-4' type="none">
                    <li>
                        <Featured blogLink="blog" featureImage={featured1} featureHeader="White Shirt With Pleat Detail Back" featurePrice="$19.00" />
                    </li><br />
                    <li>
                        <Featured blogLink="blog" featureImage={featured2} featureHeader="Converse All Star Hi Black Canvas" featurePrice="$39.00" />
                    </li><br />
                    <li>
                        <Featured blogLink="blog" featureImage={featured3} featureHeader="Nixon Porter Leather Watch In Tan" featurePrice="$17.00" />
                    </li>
                </ul>
            </div><br /><br />
            <div>
                <h4 className='fw-bold'>Archive</h4>
                <ul className='p-0 mt-4' type="none">
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>July 2018</span> <span>(9)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>June 2018</span> <span>(39)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>May 2018</span> <span>(29)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>April 2018</span> <span>(35)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>March 2018</span> <span>(22)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>February 2018</span> <span>(32)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>January 2018</span> <span>(21)</span></Link></li>
                    <li className=' py-2'><Link className="text-decoration-none text-muted d-flex justify-content-between" to="/blog"><span>December 2017</span> <span>(26)</span></Link></li>
                </ul>
            </div><br /><br />
            <div>
                <h4 className='fw-bold'>Tags</h4>
                <ul className='p-0 mt-4 d-flex flex-wrap gap-2' type="none">
                    <li className='border border-secondary rounded-pill px-2 py-1'><Link className="text-decoration-none text-muted" to="/blog">Fashion</Link></li>
                    <li className='border border-secondary rounded-pill px-2 py-1'><Link className="text-decoration-none text-muted" to="/blog">Lifestyle</Link></li>
                    <li className='border border-secondary rounded-pill px-2 py-1'><Link className="text-decoration-none text-muted" to="/blog">Denim</Link></li>
                    <li className='border border-secondary rounded-pill px-2 py-1'><Link className="text-decoration-none text-muted" to="/blog">Streetstyle</Link></li>
                    <li className='border border-secondary rounded-pill px-2 py-1'><Link className="text-decoration-none text-muted" to="/blog">Crafts</Link></li>
                </ul>
            </div>
        </div>
    )
}
