import React,{useEffect, useState} from 'react';
import { Box, Modal, TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from 'supercons'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  export default function ContactList() {
    const [contactList, setContactList] = useState(
      JSON.parse(localStorage.getItem("contacts")) || []
    );
    const [editingContact, setEditingContact] = useState(null);
  
    const handleDelete = (id) => {
      const updatedContacts = contactList.filter((contact) => contact?.id !== id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      setContactList(updatedContacts);
    };
  
    const handleEdit = (id) => {
      const contactToEdit = contactList.find((contact) => contact?.id === id);
      setEditingContact(contactToEdit);
    };
  
    const handleSave = (updatedContact) => {
      const updatedContacts = contactList.map((contact) =>
        contact?.id === updatedContact.id ? updatedContact : contact
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      setContactList(updatedContacts);
      setEditingContact(null);
    };
  
    return (
      <Box fullWidth sx={{ justifyContent: "center" }}>
        {contactList?.map((contact, i) => (
          <Box
            key={contact.id}
            sx={{ display: "flex", m: "2rem", backgroundColor: "#B0B0B0", p: "1rem", borderRadius: "10px" }}
          >
            <Box sx={{ mr: "1rem" }}>{i + 1}</Box>
            <Box sx={{ mr: "1rem" }}>
              <Icon glyph="person-card" size={26} />
            </Box>
            <Box sx={{ display: "block", mr: "1rem" }}>
              <Box>{contact.name}</Box>
              <Box>{contact.phone}</Box>
            </Box>
            <Box sx={{ mr: "1rem" }}>
              <Icon glyph="view" size={26} onClick={() => handleEdit(contact?.id)} />
            </Box>
            <Box sx={{ mr: "1rem" }} onClick={() => handleDelete(contact?.id)}>
              <Icon glyph="delete" size={26} />
            </Box>
          </Box>
        ))}
        {editingContact && <ContactForm initialContact={editingContact} onSave={handleSave} onCancel={() => setEditingContact(null)} />}
      </Box>
    );
  }
  
