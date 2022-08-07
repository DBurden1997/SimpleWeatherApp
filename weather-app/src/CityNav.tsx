import React from "react";

function CityNav() {

    return (
        <nav className="city-nav">
            <ul className="city-nav-list">
                <li>
                    <div className="city-nav-item active">St. John's</div>
                </li>
                <li>
                    <div className="city-nav-item">Tokyo</div>
                </li>
                <li>
                    <div className="city-nav-item">Madrid</div>
                </li>
            </ul>
        </nav>
    )
}

export default CityNav;