import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ContactList from './ContactList';

export default function Contact(props) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [contacts, setContacts] = useState([]);

  const addContact = (event) => {
    event.preventDefault();
    const newContact = {
      id: new Date().getTime(),
      ...contactForm
    };
    setContacts([...contacts, newContact]);
    console.log(contactForm,contacts,'ll')
    setContactForm({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={addContact}
    >
      <div>
        <TextField 
          label="Name" 
          id="outlined-size-normal"
          value={contactForm.name}
          onChange={(e)=>setContactForm({...contactForm,name:e.target.value})}

        />
      </div>
      <div>
        <TextField
          label="Email"
          id="filled-size-normal"
          value={contactForm.email}
          onChange={(e)=>setContactForm({...contactForm,email:e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Phone Number"
          id="standard-size-normal"
          value={contactForm.phone}
          onChange={(e)=>setContactForm({...contactForm,phone:e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Address"
          id="standard-size-normal"
          value={contactForm.address}
          onChange={(e)=>setContactForm({...contactForm,address:e.target.value})}
        />
      </div>
      <Button type='submit'>Submit</Button>
      <ContactList contacts={contacts} />
    </Box>
  );
}
