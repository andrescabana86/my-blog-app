import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pure.css stylesheets
import 'purecss';
import '../../node_modules/purecss/build/grids-responsive-min.css';
// components
import SideBarMenu from './SideBarMenu';
import Home from './Home';
import CreatePost from './CreatePost';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path='/' render={ ({history}) => (
					<div className="home pure-g">
						<SideBarMenu />
						{/* Home Routes */}
						<Route exact path='/' component={Home} />
						<Route exact path='/category/:path' component={Home} />
						{/* Post Routes */}
						<Route exact path='/createPost' history={history} component={CreatePost} />
					</div>
				)} />
			</BrowserRouter>
		);
	}
}

export default App;
