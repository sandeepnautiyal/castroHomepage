import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '80%',
  minWidth: 400,
  bgcolor: 'background.paper',
  marginTop:'35px',
};

export default function MenuList() {
  return (
    <div style={{position:'absolute',zIndex:2}}>

    <List sx={style} component="nav" aria-label="mailbox folders" >
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    </div>
  );
}