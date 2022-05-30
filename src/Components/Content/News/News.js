import React,{Component} from 'react';
function News(props){
		return(
            <div className="content p-2">
              <div className="image-content-2">
                <img width="100%" src={props.image} />
              </div>
              <div className="title-small">
                <h6>{props.title}
                </h6>
              </div>
            </div>
        
		)
	
}
export default News