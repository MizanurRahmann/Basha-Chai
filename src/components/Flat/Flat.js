import React from 'react';
import '../../Styles/Flat.css';

import interior1 from './../../resources/i-1.jpg';
import interior2 from './../../resources/i-5.jpg';
import interior3 from './../../resources/i-6.jpg';
import interior4 from './../../resources/i-7.jpg';
import bed from '../../resources/d-bed.svg';
import bath from '../../resources/d-bath.svg';
import space from '../../resources/d-space.svg';
import owner from './../../resources/i-7.jpg';
import { Link } from 'react-router-dom';

function Flat() {
    return (
        <div className="flat__desc">
            {/* ====== FLAT DESCRIPTION ====== */}
            <div className="flat__desc-desc">
                {/* --- flat image --- */}
                <div className="flat__desc-image">
                    <img src={interior1} width="100%" />
                    <div className="flat__desc-imageBox">
                        <div className="image" style={{ background: `url(${interior2}) no-repeat center center / cover` }}></div>
                        <div className="image" style={{ background: `url(${interior3}) no-repeat center center / cover`, margin: "0 20px" }}></div>
                        <div className="image" style={{ background: `url(${interior4}) no-repeat center center / cover` }}></div>
                    </div>
                </div>
                {/* --- flat name and location --- */}
                <div className="flat__desc-name">
                    <h1>
                        The Grand Munir villa
                        <span>Khandar, Bogra</span>
                        <span className="price">Starts form : <strong>12,000 ৳</strong></span>
                    </h1>
                    <p>Beside Passport Office, Gohail road, Bogra 5800, Bogra</p>
                </div>

                {/* --- flat short info --- */}
                <div className="flat__desc-info">
                    <div className="info">
                        <div className="info-desc">
                            <div className="info-image"><img src={bed} width="18px" alt="" /></div>
                            <div className="info-value"><strong>3</strong> Bedrooms</div>
                        </div>
                        <div className="info-desc">
                            <div className="info-image"><img src={bath} width="18px" alt="" /></div>
                            <div className="info-value"><strong>2</strong> Bathrooms</div>
                        </div>
                        <div className="info-desc">
                            <div className="info-image"><img src={space} width="18px" alt="" /></div>
                            <div className="info-value"><strong>1260</strong> ft<sup>2</sup></div>
                        </div>

                    </div>
                </div>

                {/* --- flat description --- */}
                <div className="flat__desc-description">
                    <h2>Description</h2>
                    <p>Suspendisse vitae turpis at nibh dictum dapibus. Donec vehicula condimentum felis, vel tincidunt arcu scelerisque quis. Etiam ac vestibulum leo. Aliquam augue tellus, vulputate et fringilla sit amet, vestibulum ut velit. Vestibulum purus massa, rhoncus id ultricies eget, mattis sit amet risus. Morbi a nibh blandit, viverra erat vitae, consequat mi. In elit ligula, egestas non diam id, pretium semper erat. Maecenas enim sem, condimentum sit amet pharetra at, tincidunt sit amet lacus. Morbi porttitor libero libero.</p>
                </div>
                <div className="flat__desc-description">
                    <h2>Home Details</h2>
                    <p>Suspendisse vitae turpis at nibh dictum dapibus. Donec vehicula condimentum felis, vel tincidunt arcu scelerisque quis. Etiam ac vestibulum leo. Aliquam augue tellus, vulputate et fringilla sit amet, vestibulum ut velit. Vestibulum purus massa, rhoncus id ultricies eget, mattis sit amet risus. Morbi a nibh blandit, viverra erat vitae, consequat mi. In elit ligula, egestas non diam id, pretium semper erat. Maecenas enim sem, condimentum sit amet pharetra at, tincidunt sit amet lacus. Morbi porttitor libero libero, varius malesuada metus malesuada sed. Etiam vehicula gravida massa. Nulla cursus finibus lacus. In condimentum leo at sapien venenatis tincidunt ac sit amet ante.</p>
                </div>

                {/* --- flat buy button --- */}
                <div className="flat__desc-button">
                    <button className="buy-now">Book now</button>
                    <button className="add-to-fvrt"><i class="far fa-heart"></i> Add to favourite</button>
                </div>
            </div>

            {/* ========= FLAT DESC OWNER ======== */}
            <div className="flat__desc-owner">
                <div className="owner-info">
                    <div className="owner-image"><img src={owner} alt="" /></div>
                    <div className="owner-name">
                        <h2>Boshundhora group</h2>
                        <p>Joined OCT 2020</p>
                        <Link to="/">view profile</Link>
                    </div>
                </div>

                {/* --- owner description --- */}
                <div className="owner-description">
                    <p>Vitae turpis at nibh beddictum dapibus. Donec vehicula condimentum felis, vel tincidunt arcu scelerisque quis. Etiam ac vestibulum leo. Aliquam augue tellus, vulputate et fringilla sit amet, vestibulum ut velit.</p>
                </div>

                {/* --- owner contact info --- */}
                <div className="owner-contact">
                    <div className="owner-contact-info">
                        <div className="title">Language</div>
                        <div className="value">English, Bangla</div>
                    </div>
                    <div className="owner-contact-info">
                        <div className="title">Response rate</div>
                        <div className="value">100%</div>
                    </div>
                    <div className="owner-contact-info">
                        <div className="title">Response time</div>
                        <div className="value">Within an hour</div>
                    </div>
                    <div className="owner-contact-info contactWith">
                        <div className="title">Contact with</div>
                        <div className="value">
                            <div className="call"><i class="fas fa-phone"></i> Call</div>
                            <div className="email"><i class="far fa-envelope"></i> Email</div>
                        </div>
                    </div>
                </div>

                <div className="relatedFlats">
                    <h2>Properties Nearby</h2>
                    {/* ---- single flat --- */}
                    <div className="relatedflat">
                        <div className="flat-image">
                            <img src={interior1} alt="" />
                        </div>
                        <div className="flat-desc">
                            <h3>14,000 ৳</h3>
                            <p>21 street, north kollanpara, Bogra</p>

                            <div className="specs">
                                <div className="spec"><img src={bed} alt="" width="16px" /> 4</div>
                                <div className="spec"><img src={bath} alt="" width="16px" /> 2</div>
                                <div className="spec"> <img src={space} alt="" width="16px" /> 1200 </div>
                            </div>
                        </div>
                    </div>

                    {/* ---- single flat --- */}
                    <div className="relatedflat">
                        <div className="flat-image">
                            <img src={interior2} alt="" />
                        </div>
                        <div className="flat-desc">
                            <h3>24,000 ৳</h3>
                            <p>21 street, north kollanpara, Bogra</p>

                            <div className="specs">
                                <div className="spec"><img src={bed} alt="" width="16px" /> 5</div>
                                <div className="spec"><img src={bath} alt="" width="16px" /> 3</div>
                                <div className="spec"> <img src={space} alt="" width="16px" /> 2200 </div>
                            </div>
                        </div>
                    </div>

                    {/* ---- single flat --- */}
                    <div className="relatedflat">
                        <div className="flat-image">
                            <img src={interior3} alt="" />
                        </div>
                        <div className="flat-desc">
                            <h3>24,000 ৳</h3>
                            <p>21 street, north kollanpara, Bogra</p>

                            <div className="specs">
                                <div className="spec"><img src={bed} alt="" width="16px" /> 5</div>
                                <div className="spec"><img src={bath} alt="" width="16px" /> 3</div>
                                <div className="spec"> <img src={space} alt="" width="16px" /> 2200 </div>
                            </div>
                        </div>
                    </div>

                    {/* ---- single flat --- */}
                    <div className="relatedflat">
                        <div className="flat-image">
                            <img src={interior4} alt="" />
                        </div>
                        <div className="flat-desc">
                            <h3>24,000 ৳</h3>
                            <p>21 street, north kollanpara, Bogra</p>

                            <div className="specs">
                                <div className="spec"><img src={bed} alt="" width="16px" /> 5</div>
                                <div className="spec"><img src={bath} alt="" width="16px" /> 3</div>
                                <div className="spec"> <img src={space} alt="" width="16px" /> 2200 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flat
