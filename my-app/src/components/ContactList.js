import React from "react";
import ContactCard from "./ContactCard";
import {Link } from 'react-router-dom';

const ContactList = (props) => {
    // console.log(props);

    const deleteContactHandler = (id) => {
        props.removeContactById(id);
    };
    const contacts = [
        {
            id: '1',
            name: 'raj',
            email: 'raj@gmail.com'
        }
    ];
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>  
        )
    });

    return (
        <div style={{marginTop: 50}}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {renderContactList}
             </div>
        </div>
    );
}
export default ContactList;