import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

	render () {
		const categories = this.props.categories
		return (
			<div className="content pure-u-1 pure-u-md-3-4">
				<h1>Content</h1>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	posts: state.posts
});
  
export default connect(mapStateToProps)(Home);