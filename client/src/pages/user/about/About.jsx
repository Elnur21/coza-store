import React from 'react'
import Header from '../../../components/head/Header'
import headBack2 from "../../../assets/image/headBack2.webp"
import about1 from "../../../assets/image/about1.jfif"
import about2 from "../../../assets/image/about2.webp"
import "../../../assets/style/about.css"
export default function About() {
    return (
        <section>
            <Header pageName="About" backgroundImage={headBack2} />
            <div className='d-flex justify-content-center mt-5 pt-5'>
                <div className='w-75'>
                    <div className='row justify-content-between pb-5'>
                        <div className='col-lg-7'>
                            <h4 className='fw-bold mb-3'>Our Story</h4>
                            <p className='text-muted'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                                <br /><br />
                                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                                <br /><br />
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                            </p>
                        </div>
                        <div className='col-lg-4'>
                            <img src={about1} alt="aboutImg" className='w-100 shadow-img1' />
                        </div>
                    </div>
                    <div className='row justify-content-between flex-lg-row flex-md-column-reverse flex-sm-column-reverse mt-5 pt-5'>
                        <div className='col-lg-4 mt-5'>
                            <img src={about2} alt="aboutImg" className='w-100 shadow-img2' />
                        </div>
                        <div className='col-lg-7 mt-5'>
                            <h4 className='fw-bold mb-3'>Our Mission</h4>
                            <p className='text-muted'>
                                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.<br /><br />

                                <div className='border border-secondary border-0 border-start ps-4 py-1'>
                                    <p>
                                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                    </p>
                                    - Steve Job’s
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    )
}
