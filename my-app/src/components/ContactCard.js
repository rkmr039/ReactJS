import React from "react";
import user from '../images/user.png'
;
const ContactCard = (props) => {
    const {id, name, email} =  props.contact;
    return (
        <div className="item"  id={id}>
            <img className="ui avater image" src={user} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outlline icon"
        style={{color: "red", marginTop: "7px"}}
        onClick={() => {props.clickHandler(id)}}></i>
     </div> 
    )
};
export default ContactCard;