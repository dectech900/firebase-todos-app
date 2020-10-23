import  React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import db from './Firebase'
import firebase from 'firebase'


//Components
import Todo from './components/Todo'

// 'Wake up and brush your teeth','Go for a walk with Elizabeth','Build you new house'
function App() {
   const [todos, setTodos] = useState([])
   const [input, setInput] = useState('')
  //  console.log(input)

  useEffect(()=>{
    //This code fires ones when the page loads and this call the db once
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc=> doc.data()))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])

   const addTodo = (event)=> {
     event.preventDefault()
    //this will fire when add todo is called
    // console.log('button was clicked');
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])

    //clear input field
    setInput('')

   }

  return (
    <div className="App">
      <h2>Derrick's Todos App {1+1}</h2>
     <form method="post">
     {/* <input type="text" name="" value={input} onChange={event => setInput(event.target.value)}/> */}
     <FormControl>
       <InputLabel> Write A Todo </InputLabel>
       <Input type="text" name="" value={input} onChange={event => setInput(event.target.value)}/>
     </FormControl>
      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add Todos</Button>
     </form>

      <ul>
        {/* <li>Wake up and brush your teeth</li>
        <li>Go for a walk with Elizabeth</li>
        <li>Build you new house</li> */}
        {todos.map(todo =>(
          <Todo todo={todo}/>
  ))}
      </ul>
    </div>
  );
}

export default App;
