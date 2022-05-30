import React,{Component} from 'react';
function Beside(props){
		return(
            <div>
            <div className="row image-small-content ">
              <div className="col-sm-5">
                <div className=" green ">
                  <img className width=" 100%" src={props.image} />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="blue">
                  <h6>{props.title}</h6>
                </div>
              </div>
            </div>
            
            </div>
		)
	}

export default Beside;