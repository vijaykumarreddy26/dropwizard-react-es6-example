
import React from 'react';
import routeConfig from './configs/router-config';
import { render } from 'react-dom';
import { Router, Route, Link ,hashHistory} from 'react-router';


// render components based on routes.
render(<Router history={hashHistory}  routes={routeConfig}/>,body);