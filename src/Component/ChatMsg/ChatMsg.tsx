import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import ChatHeader from "./ChatHeader";
const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "calc(100vh - 56px)",
  },
  messageArea: {
    height: "calc(100vh - 136px)",
    overflowY: "auto",
  },
});
const ChatMsg = () => {
  const classes = useStyles();
  return (
    <div>
      <ChatHeader/>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {
              Array(20).fill('').map((item,i)=><ListItem key={i}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Hey man, What's up ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>)
            }
          </List>
          <Divider />
          <Grid
            container
            style={{ padding: "10px", justifyContent: "space-around" }}
          >
            <Grid item xs={9} lg={11} spacing={1}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={2} lg={1} style={{display:'flex',justifyContent:"center"}}>
              <Fab color="primary" aria-label="add">
                <Send />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatMsg;
