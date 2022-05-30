
import React,{Components}from "react";
import axios from "axios";
// import ShowPost from "./showPosts/showPost";
export default function Form(props) {
    return (
      <div className="formclass">
      <form onSubmit={(e) => {props.handlerSubmit(e)}}>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" onChange={(e) => {
            props.handerlechange(e);
          }}>
          <option value="main">main</option>
          <option value="new">news</option>
          <option value="outstanding">outstanding</option>
        </select>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label htmlFor="country">Country</label>
        
        <button
          type="submit"
        >
          {props.stateButton}
        </button>
      </form>
    </div>
    );
}