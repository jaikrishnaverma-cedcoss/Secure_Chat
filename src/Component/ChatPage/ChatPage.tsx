import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "88.5vh",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
});

const ChatPage = () => {
  const classes = useStyles();
const navigate=useNavigate()
  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12} className={classes.borderRight500}>
          <List>
          {
['Ankit'].map((item,index)=><ListItem onClick={()=>navigate('/chats/1')} key={item}>
<ListItemIcon>
  <Avatar
    alt={item}
    src={`https://i.pravatar.cc/150?img=${index}`}
  />
</ListItemIcon>
<ListItemText primary={item}>{item}</ListItemText>
<ListItemText secondary={index==1?"online":""}></ListItemText>
</ListItem>)
            }
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {
['Deepu','Anurag','Jai'].map((item,index)=><ListItem onClick={()=>navigate('/chats/1')} key={item}>
<ListItemIcon>
  <Avatar
    alt={item}
    src={`https://i.pravatar.cc/150?img=${index}`}
  />
</ListItemIcon>
<ListItemText primary={item}>{item}</ListItemText>
<ListItemText secondary={index==1?"online":""}></ListItemText>
</ListItem>)
            }
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
export default ChatPage;
