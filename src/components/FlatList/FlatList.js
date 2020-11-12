import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import '../../Styles/FlatList.css';
import SideContent from './SideContent';
import { Link } from 'react-router-dom';

// resources
import data from '../../resources/data';
import interior1 from './../../resources/i-1.jpg';
import interior2 from './../../resources/i-2.jpg';
import interior3 from './../../resources/i-3.jpg';
import interior4 from './../../resources/i-4.jpg';
import interior5 from './../../resources/i-5.jpg';
import interior6 from './../../resources/i-6.jpg';
import bed from '../../resources/d-bed.svg';
import bath from '../../resources/d-bath.svg';

function FlatList() {
    const [flats, setFlats] = useState([])

    useEffect(() => {
        setFlats(data);
    }, []);


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
                    {flats.map(flat => (
                        <Link to={"/items/" + flat.id} class="flat">
                            <div class="flat-image">
                                <img src={interior1} alt="" />
                            </div>
                            <div class="flat-desc">
                                <h2 class="name">{flat.name}<span>apt. {flat.id}</span></h2>
                                <p class="location">{flat.shortAddress}</p>
                                <div className="spec">
                                    <div className="spec-opt"><img src={bed} width="16px" /> {flat.bedrooms}</div>
                                    <div className="spec-opt"><img src={bath} width="16px" /> {flat.bathrooms}</div>
                                </div>
                                <p class="price">Starts form : <span>{flat.price} ৳</span></p>
                                <Link to="/items/6" className="details-btn"><i class="far fa-eye"></i> details</Link>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ====== FLATS FOR SELL ===== */}
                <h1 className="heading">Flats for SELL</h1>
                <div className="flats">
                    {flats.map(flat => (
                        <Link to={"/items/" + flat.id} class="flat">
                            <div class="flat-image">
                                <img src={interior2} alt="" />
                            </div>
                            <div class="flat-desc">
                                <h2 class="name">{flat.name}<span>apt. {flat.id}</span></h2>
                                <p class="location">{flat.shortAddress}</p>
                                <div className="spec">
                                    <div className="spec-opt"><img src={bed} width="16px" /> {flat.bedrooms}</div>
                                    <div className="spec-opt"><img src={bath} width="16px" /> {flat.bathrooms}</div>
                                </div>
                                <p class="price">Starts form : <span>{flat.price} ৳</span></p>
                                <Link to="/items/6" className="details-btn"><i class="far fa-eye"></i> details</Link>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FlatList
