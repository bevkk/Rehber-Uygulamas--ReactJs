import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: 'Onur Keleş',
        phone_number:"123123123"
      },
      {
        fullname: 'Berat Can',
        phone_number:"51231213"
      },
      {
        fullname: 'Deniz Kayar',
        phone_number:"51231213"
      },
      {
        fullname: 'Hüseyin Çakır',
        phone_number:"51231213"
      },
      {
        fullname: 'Berat Dindar',
        phone_number:"51231213"
      },
      {
        fullname: 'Onur Havyar',
        phone_number:"51231213"
      },
      {
        fullname: 'Berk Karadalan',
        phone_number:"512312541"
      }
    ]);
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form setContacts = {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts