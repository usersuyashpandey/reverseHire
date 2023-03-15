import React, { useState } from 'react';
import {Box, Button,Modal, TextField} from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import { ContactForm, ContactList } from './ContactList';
  
  export default function Contact({ initialContact, onSave, onCancel }) {
    const [name, setName] = useState(initialContact?.name || "");
    const [phone, setPhone] = useState(initialContact?.phone || "");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const contact = {
        id: initialContact?.id || uuidv4(),
        name,
        phone,
      };
      onSave(contact);
    };
  
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          mt: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "100%", mt: "1rem" }}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Phone"
          variant="outlined"
          sx={{ width: "100%", mt: "1rem" }}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Box sx={{ display: "flex", mt: "2rem" }}>
          <Button variant="contained" color="primary" type="submit" sx={{ mr: "1rem" }}>
            Save
          </Button>
          <Button variant="contained" color="error" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    );
  }
  
