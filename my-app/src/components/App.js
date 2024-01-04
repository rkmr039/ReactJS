import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
    const LOCAL_STORGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact}]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };
    useEffect(() => {
        const retrivedData = JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY));
        if(retrivedData) setContacts(retrivedData);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <div className='ui container'>
                <Header />
                <Routes>
                    <Route path="/" element={<ContactList removeContactById={{removeContactHandler}} />}>
                        {/* <ContactList contacts={contacts} removeContactById={removeContactHandler}/> */}
                    </Route>
                    <Route path="/add" element={<AddContact addContactHandler={{addContactHandler}}/>}>
                        {/* <AddContact addContactHandler={addContactHandler}/> */}
                    </Route>
                    
                </Routes>
        </div>
    )
}
export default App;