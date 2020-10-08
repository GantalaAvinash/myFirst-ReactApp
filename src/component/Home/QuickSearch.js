import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <React.Fragment>
            <div class="quickSearchContainer">
                <p class="quickSearchHeading">
                    Quick Searches
                </p>
                <p class="quickSearchSubHeading">
                    Discover Restaurants by meal type
                </p>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/breakfast.png" alt="breakfast" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            BreakFast
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive breakfast option
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/lunch.png" alt="lunch" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Lunch
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive Lunch option
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/sacks.png" alt="sacks" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Snacks
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive Snacks option
                        </div>
                    </div>
                </div>
            
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/dinner.png" alt="dinner" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Dinner
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive Dinner option
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/drinks.png" alt="drinks" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Drinks
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive drinks option
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="/images/nightlife.png" alt="nightlife" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Nightlife
                        </div>
                        <div class="componentSubHeading">
                            Start  your day with exclusive Nightlife option
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
   
export default QuickSearch;