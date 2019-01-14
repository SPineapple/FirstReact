import React, {Component} from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import {connect} from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state =>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	 onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	 onRequestRobots: () => dispatch(requestRobots())
	}

}

class App extends Component {
	

	componentDidMount(){
		this.props.onRequestRobots();
	}



	render(){
		const {robots,searchField, onSearchChange, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return isPending ?
		 <h1> Loading </h1> :
		(
		<div className='tc'>
				<h1 className='f1'> Robo2 </h1>
			<div>
			<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary >
						<Cardlist getRobots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		</div>
			);
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
