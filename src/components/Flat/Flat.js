import React from 'react';
import '../../Styles/Flat.css';

import interior1 from './../../resources/i-1.jpg';
import interior2 from './../../resources/i-5.jpg';
import interior3 from './../../resources/i-6.jpg';
import interior4 from './../../resources/i-7.jpg';
import bed from '../../resources/d-bed.svg';
import bath from '../../resources/d-bath.svg';
import space from '../../resources/d-space.svg';

function Flat() {
    return (
        <div className="flat__desc">
            <div className="flat__desc-desc">
                {/* --- flat image --- */}
                <div className="flat__desc-image">
                    <img src={interior1} width="100%"/>
                    <div className="flat__desc-imageBox">
                        <div className="image" style={{background: `url(${interior2}) no-repeat center center / cover`}}></div>
                        <div className="image" style={{background: `url(${interior3}) no-repeat center center / cover`, margin: "0 20px"}}></div>
                        <div className="image" style={{background: `url(${interior4}) no-repeat center center / cover`}}></div>
                    </div>
                </div>
                {/* --- flat name and location --- */}
                <div className="flat__desc-name">
                    <h1>
                        The Grand Munir villa 
                        <span>Khandar, Bogra</span>
                        <span className="price">Starts form : <strong>12000 ৳</strong></span>
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
            <div className="flat__desc-owner"></div>
        </div>
    )
}

export default Flat
