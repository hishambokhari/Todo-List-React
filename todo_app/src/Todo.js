import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon, Button } from '@material-ui/core';
import db from './firebase';


function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
      </ListItem>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
    </List>
  )
}

export default Todo
