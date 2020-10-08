import React from 'react';
import './restaurentList.css';

const RestaurentList = () => {
    return(
        <React.Fragment>
                <div className="container">
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/breakfast.png" alt="breakfast" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            BreakFast
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive breakfast option
                        </div>
                    </div>
                </div>
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/lunch.png" alt="lunch" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Lunch
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive Lunch option
                        </div>
                    </div>
                </div>
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/sacks.png" alt="sacks" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Snacks
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive Snacks option
                        </div>
                    </div>
                </div>
                
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/dinner.png" alt="dinner" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Dinner
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive Dinner option
                        </div>
                    </div>
                </div>
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/drinks.png" alt="drinks" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Drinks
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive drinks option
                        </div>
                    </div>
                </div>
                <div className="tilecontainer">
                    <div className="tileComponent1">
                        <img src="/images/nightlife.png" alt="nightlife" className="imageclass"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Nightlife
                        </div>
                        <div className="componentSubHeading">
                            Start  your day with exclusive Nightlife option
                        </div>
                    </div>
                </div>
                
                </div>
        </React.Fragment>
    )
}

export default RestaurentList;