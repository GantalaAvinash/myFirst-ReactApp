import React from 'react';
import './Search.css';

const Search = () => {
    return(
        <div class="imageContainer">
            <div id="logo">
                e!
            </div>
            <div class="heading">
                Find the best restaurants,cafes, bars
            </div>
            <div class="locationSelector">
                <select class="locationDropDown">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chandigarh</option>
                </select>
                &nbsp;&nbsp;
                <input type="text" placeholder="Search for restaurants"
                class="restinput"/>
            </div>
        </div>
    )
}
   
export default Search;