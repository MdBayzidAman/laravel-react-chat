import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from "jquery";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './component/layout/Header';
import Master from './component/layout/Master';
import Register from './component/Register/Register';
import Login from './component/Register/Login';
import './style.css';
import './asset/css/themify-icons.css';
import './asset/css/grid.css';


function Index(){
	//var $ = require( "jquery" );
	//
	//<Master />
	
    return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Master} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
			
			
		</>
    );
}

export default Index;
