import React,{Component} from 'react';
function Main(props){

		return(
			
				<div className="col-md-6">
            <div className="d-block p-2">
              <img width="100%" src={props.image} />
            </div>
            <div className="d-block p-2">
              <titile className="title-header-article">
              {props.title} </titile>
            </div>
            <div className="d-block p-2">
              <p className="small-content">
                {props.content}</p>
           
          </div>
			</div>
		)	
}
export default Main;