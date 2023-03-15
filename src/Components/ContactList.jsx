import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Person as PersonIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

export function ContactForm({ initialContact, onSave, onCancel }) {
  const [name, setName] = useState(initialContact?.name || "");
  const [phone, setPhone] = useState(initialContact?.phone || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { id: initialContact?.id || uuidv4(), name, phone };
    onSave(contact);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {initialContact ? "Edit Contact" : "Add New Contact"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button type="button" variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" sx={{ ml: 2 }}>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      {contacts.length === 0 && (
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          No contacts found.
        </Typography>
      )}
      {contacts.map((contact) => (
        <Box
          key={contact.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            padding: 2,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonIcon sx={{ mr: 1 }} />
            <Typography variant="body1">{contact.name}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ViewIcon
              sx={{ mr: 1, cursor: "pointer" }}
              onClick={() => window.alert(`Phone: ${contact.phone}`)}
            />
            <EditIcon
              sx={{ mr: 1, cursor: "pointer" }}
              onClick={() => onEdit(contact)}
            />
            <DeleteIcon
              sx={{ cursor: "pointer" }}
              onClick={() => onDelete(contact)}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
