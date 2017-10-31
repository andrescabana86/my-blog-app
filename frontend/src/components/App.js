import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pure.css stylesheets
import 'purecss';
import '../../node_modules/purecss/build/grids-responsive-min.css';
// components
import SideBarMenu from './SideBarMenu';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import NotFound from './NotFound';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path='/' render={ ({history}) => (
					<div className="home pure-g">
						<SideBarMenu />
						{/* Home Routes */}
						<Route exact path='/' component={Home} />
						<Route exact path='/:category' component={Home} />
						{/* Post Routes */}
						<Route path='/:category/:postId/detail' history={history} component={PostDetail} />
						<Route exact path='/create/new/post' history={history} component={CreatePost} />
						<Route exact path='/edit/post/:postId' history={history} component={EditPost} />
					</div>
				)} />
			</BrowserRouter>
		);
	}
}

export default App;
