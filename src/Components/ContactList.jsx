import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function ContactList({ contacts }) {
  return (
    <List>
      {contacts?.map((contact) => (
        <ListItem key={contact.id}>
          <ListItemText primary={contact?.name} secondary={contact?.email} />
        </ListItem>
      ))}
    </List>
  );
}
