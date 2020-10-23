import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import '../style/Todo.css'
import db from '../Firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Todo(props) {
    const [open, setOpen] = useState(false)
 
    // const handleOpen = ()=>{
    //     setOpen(true)
    // }
    // const handleClose = () =>{
    //     setOpen(false)
    // }

    return (
        <div className="list_stlye">
{/* <button type="button" onClick={handleOpen}>
  Open Modal
</button> */}
{/* <Modal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
      <h1>I am the modal</h1>
      <button onClick={e => setOpen(false)}>Close</button>
  </div>
</Modal> */}

            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={`This is a dummy todo app`}/>
                </ListItem>
            </List>
            {/* <button onClick={e => setOpen(true)}>Edit</button> */}
           <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>

           
        </div>

    )
}

export default Todo;
