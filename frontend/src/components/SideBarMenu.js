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
					<h1 className="brand-tagline">Categorías</h1>
				</header>
				<nav className="nav">
					<ul className="nav-list">
						{
							Array.isArray(categories) 
							&& categories.map( ({name, path}) => (
									<li className="nav-item">
										<NavLink key={path} 
											to={`/category/${path}`} 
											onClick={this.toggleMenu} 
											className="pure-button" >
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