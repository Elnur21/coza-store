import React from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-lx-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-center mt-4">
                                <div className="col-xl-5 col-lg-8">
                                    <div className="text-center">
                                        <h3>Frequently Asked Questions?</h3>
                                        <p className="text-muted">
                                            Minus rerum voluptatibus illum facilis consectetur vitae,
                                            deserunt, quas quasi architecto pariatur hic sint sunt
                                            quidem. Delectus quaerat odio eveniet doloribus dolorem.
                                        </p>
                                        <div>
                                            <Link to={"/contact"} className="btn btn-primary me-2">
                                                Email Us
                                            </Link>
                                            <Link to={"/contact"} className="btn btn-success">
                                                Send us your message
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="col-9">
                                    <ul
                                        className="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-genarel-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-genarel"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-genarel"
                                                aria-selected="true"
                                            >
                                                <span className="font-size-16">General Questions</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-privacy_policy-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-privacy_policy"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-privacy_policy"
                                                aria-selected="false"
                                            >
                                                <span className="font-size-16">Privacy Policy</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-teachers-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-pricing_plan"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-pricing_plan"
                                                aria-selected="false"
                                            >
                                                <span className="font-size-16">
                                                    Pricing &amp; Plans
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-9">
                                    <div className="tab-content pt-3" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade active show"
                                            id="pills-genarel"
                                            role="tabpanel"
                                            aria-labelledby="pills-genarel-tab"
                                        >
                                            <div className="row g-4 mt-2">
                                                <div className="col-lg-6">
                                                    <h5>What is Lorem Ipsum ?</h5>
                                                    <p className="text-muted">
                                                        Vero nobis, error beatae possimus officiis porro. Illo officia alias aperiam magni quibusdam tenetur, repudiandae dolorem quaerat neque voluptate, eum minima ipsam.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Why do we use it ?</h5>
                                                    <p className="text-muted">
                                                        Aliquam voluptas, eveniet ea explicabo reiciendis non temporibus eum neque animi amet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, et!
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Where does it come from ?</h5>
                                                    <p className="text-muted">
                                                        Perspiciatis nostrum cumque suscipit distinctio reprehenderit vitae id inventore corporis laborum provident, similique unde voluptatum fuga repellendus aperiam quis voluptate beatae. Porro sunt et sint deleniti consequatur.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Where can I get some?</h5>
                                                    <p className="lg-base">
                                                        Molestiae, doloribus placeat consequuntur explicabo cum doloremque saepe recusandae nostrum! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="pills-privacy_policy"
                                            role="tabpanel"
                                            aria-labelledby="pills-privacy_policy-tab"
                                        >
                                            <div className="row g-4 mt-2">
                                                <div className="col-lg-6">
                                                    <h5>Where can I get some ?</h5>
                                                    <p className="lg-base">
                                                        Accusamus officia voluptate voluptates, perferendis, sint molestiae illo quo suscipit voluptatum enim ipsam quas eius consectetur. Vitae debitis iure praesentium distinctio tempora nisi quasi harum odit similique, quae excepturi, earum rem ut sint accusantium.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Where does it come from ?</h5>
                                                    <p className="lg-base">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet. Asperiores velit, porro, laboriosam quidem voluptatem assumenda quaerat alias tempora nobis qui ab id cumque.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Why do we use it ?</h5>
                                                    <p className="lg-base">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rerum aliquid ullam? Magni quidem tempora blanditiis, cupiditate ratione eveniet qui sit veritatis praesentium dolor, in dolore tempore.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>What is Genius privacy policy</h5>
                                                    <p className="lg-base">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat vel veritatis. Officiis debitis nihil repudiandae facilis! Sapiente porro sed fugit aut laborum autem placeat perspiciatis. Modi quos vitae aliquid quidem impedit commodi necessitatibus? Beatae.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-pricing_plan"
                                            role="tabpanel"
                                        >
                                            <div className="row g-4 mt-4">
                                                <div className="col-lg-6">
                                                    <h5>Where does it come from ?</h5>
                                                    <p className="lg-base">
                                                        Cupiditate porro repellat suscipit officia. Pariatur facere unde eius ab ipsum autem ex labore officia necessitatibus vero quas expedita, consequuntur fugiat. Deserunt exercitationem laudantium, rem qui magni facilis numquam fuga voluptatibus quibusdam similique consectetur. Nesciunt mollitia possimus non perferendis!
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Why do we use it ?</h5>
                                                    <p className="lg-base">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sed totam, dolores culpa temporibus fuga a repellendus non animi iure laboriosam eum quos expedita dolorem. Dolores, laudantium temporibus laborum similique quod eius animi placeat officiis harum sunt, ullam, est culpa quia rerum expedita accusantium voluptatibus non vel? Rerum, nostrum qui.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>What is Lorem Ipsum ?</h5>
                                                    <p className="lg-base">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa iure quas at architecto veniam exercitationem eligendi voluptas, natus possimus nostrum excepturi nulla eaque, distinctio aperiam similique deserunt iste itaque, accusamus nam obcaecati numquam dolores ullam sunt dicta? Incidunt rerum pariatur libero nam, amet alias laudantium laboriosam fugit error impedit perferendis!
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>What is Lorem Ipsum?</h5>
                                                    <p className="lg-base">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi ad, adipisci hic officiis aperiam ratione consequuntur et nisi ea cum odio quas ut eos similique provident rerum quae! Reprehenderit perspiciatis consequatur, labore, quibusdam odit error eveniet laborum sed soluta dignissimos, dolorum sequi? Quia repudiandae nemo illum eius id aut.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
