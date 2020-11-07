import React from 'react';
import Banner from './Banner';
import '../../Styles/FlatList.css';
import SideContent from './SideContent';

function FlatList() {
    return (
        <div className="flatList">
            <div className="sideContent">
                <SideContent />
            </div>
            <div className="mainContent">
                <Banner />
            </div>
        </div>
    )
}

export default FlatList
