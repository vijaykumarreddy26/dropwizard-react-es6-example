
import React from 'react';
import { hashHistory } from 'react-router';

/**
*  list all routes here this will support nested routes too.
*
**/

/**
*   config all routes here
**/

var routeConfig =  {
  	component: require('../components/Main')),
  	path: '/',
  	childRoutes: [
	  	{
		    path: 'login(/:reason)',
		    getComponent: (location, cb) => {
						cb(null, require('../components/login/login'))
		    },
		     onEnter: function (nextState, replaceState) {
	             if(auth.loggedIn() && !nextState.params.reason){
	             	replaceState("/home");
	             }
            }
	  	},
	  	{
		    path: 'home',
		    getComponent: (location, cb) => {
						cb(null, require('../components/home/home'))
		    },
		     onEnter: function (nextState, replaceState) {
	             if(!auth.loggedIn()){
	             	replaceState("/login");
	             }
         	},
		    childRoutes: [
  				{
  					path : "createnew",
  					getComponent: (location, cb) => {
						cb(null, require('../components/maincontent/createNew'))
		    		}
  				},
  				{
  					path : "search",
  					getComponent: (location, cb) => {
						cb(null, require('../components/maincontent/searchNode'))
		    		}
  				},
  				{
  					path : "createnode",
  					getComponent: (location, cb) => {
						cb(null, require('../components/maincontent/createNode'))
		    		}
  				},
  				{
  					path : "editnode/:nodeId",
  					getComponent: (location, cb) => {
						cb(null, require('../components/maincontent/editnode'))
		    		}
  				}
  			]

  		},
  		{
  					path : "*",
  					getComponent: (location, cb) => {
						cb(null, require('../components/maincontent/createNew'))
		    		},
		    		 onEnter: function (nextState, replaceState) {
			             if(auth.loggedIn()){
			             	replaceState("/home");
			             }else{
			             	replaceState("/login");
			             }

		            }
  				}

  	]
}

export  routeConfig;
