import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './detailsview.css';

const Detailsview = () => {
    return(
        <React.Fragment>
            <div className="container">
                <h2 id="heading">
                    The Big Chill Cakery
                </h2>
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Contact</Tab>
                    </TabList>
 
                    <TabPanel>
                        <h3>About this Place</h3>
                        <p id="cuisine">cuisine</p>
                        <p id="fast-food">Bakery, Fast-food</p>
                        <p id="cost">Average Cost</p>
                        <p id="price">€7000 for two people (approx.)</p>
                    </TabPanel>
                    <TabPanel>
                        <p id="PhoneNumber">Phone Number</p>
                        <p id="Number">+91 114004566</p>
                        <h3>The Big Chill Cakery</h3>
                        <p id="address">Shop 1, Plot D, Samruddhi Complex, Chincholi,<br/>Mumbai-400002, Maharashtra </p>
                    </TabPanel>
                </Tabs>
            </div>
        </React.Fragment>
    )
}

export default Detailsview;
