import React from 'react';
import Banner from './Banner';
import '../../Styles/FlatList.css';
import SideContent from './SideContent';
import { Link } from 'react-router-dom';

// resources
import interior1 from './../../resources/i-1.jpg';
import interior2 from './../../resources/i-2.jpg';
import interior3 from './../../resources/i-3.jpg';
import interior4 from './../../resources/i-4.jpg';
import interior5 from './../../resources/i-5.jpg';
import interior6 from './../../resources/i-6.jpg';
import bed from '../../resources/d-bed.svg';
import bath from '../../resources/d-bath.svg';

function FlatList() {
    return (
        <div className="flatList">
            <div className="sideContent">
                <SideContent />
            </div>
            <div className="mainContent">
                <Banner />

                {/* ====== FLATS FOR RENT ===== */}
                <h1 className="heading">Flats for Rent</h1>
                <div className="flats">
                    {/* --- single flat --- */}
                    <Link to="/items/1" class="flat">
                        <div class="flat-image">
                            <img src={interior1} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/1"  className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>

                    {/* --- single flat --- */}
                    <Link to="/items/2" class="flat">
                        <div class="flat-image">
                            <img src={interior2} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/2" className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>

                    {/* --- single flat --- */}
                    <Link to="/items/3" class="flat">
                        <div class="flat-image">
                            <img src={interior3} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/3" className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>

                    {/* --- single flat --- */}
                    <Link to="/items/4" className="flat">
                        <div class="flat-image">
                            <img src={interior4} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/4" className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>

                    {/* --- single flat --- */}
                    <Link to="/items/5" class="flat">
                        <div class="flat-image">
                            <img src={interior5} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/5" className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>
                    {/* --- single flat --- */}
                    <Link to="/items/6" class="flat">
                        <div class="flat-image">
                            <img src={interior6} alt="" />
                        </div>
                        <div class="flat-desc">
                            <h2 class="name">Lacy Straveue <span>apt. 053</span></h2>
                            <p class="location">Dhanmondi 32, Dhaka</p>
                            <div className="spec">
                                <div className="spec-opt"><img src={bed} width="16px" /> 3</div>
                                <div className="spec-opt"><img src={bath} width="16px" /> 2</div>
                            </div>
                            <p class="price">Starts form : <span>8,000 ৳</span></p>
                            <Link to="/items/6" className="details-btn"><i class="far fa-eye"></i> details</Link>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FlatList
