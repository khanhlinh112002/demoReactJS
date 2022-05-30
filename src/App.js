import React,{Component} from 'react';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Newspaper from './Components/Content/Newspaper/Newspaper'
export default class App extends Component{
	
	render(){
		
		return(
			<div>
				<Header></Header>
				<Navigation></Navigation>
				<Newspaper></Newspaper>
			</div>
		)
	}
}