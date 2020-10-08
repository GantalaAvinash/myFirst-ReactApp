import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import RestaurentDetails from './RestaurentDetails/Details';
import RestaurentList from './RestaurentList/RestaurentList';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Details" component={RestaurentDetails}></Route>
                <Route path="/list" component={RestaurentList}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;