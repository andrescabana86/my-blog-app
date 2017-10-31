import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as CategoriesActions from '../actions/categories.actionscreator';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

class SideBarMenu extends Component {

	componentDidMount () {
		this.props.dispatch(CategoriesActions.fetchCategories());
	}

	render () {
		const { categories } = this.props;
		return (
			<div className="sidebar pure-u-1 pure-u-md-1-4">
				<header className="header">
					<small>@andrescabana86</small>
					<h1 className="brand-title">My Blog App</h1>
					<h1 className="brand-tagline">Categories</h1>
				</header>
				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item" key={'0'} >
							<NavLink to={'/'} className="pure-button" >
								ALL
								<FaChevronRight />
							</NavLink>
						</li>
						{
							Array.isArray(categories) 
							&& categories.map( ({name, path}) => (
								<li className="nav-item" key={path} >
									<NavLink to={`/category/${path}`} className="pure-button" >
										{name}
										<FaChevronRight />
									</NavLink>
								</li>
							))
						}
					</ul>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	categories: state.categories
});
  
export default connect(mapStateToProps)(SideBarMenu);