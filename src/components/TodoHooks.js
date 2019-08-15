import React, {useState, useEffect, useContext} from 'react';


const TodoHooks = () => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const title = useFormInput('')
  const description = useFormInput('')
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {title, description};
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    console.log('hooks vacamount')
    return () => {
      console.log('hooks vacaunmount')
    }
  }, [])
  
  // useEffect(() => {
  //   console.log('hooks vacaupdate')
  //   return () => { console.log('hooks updateunmount')}
  // })

  // useEffect(() => {
  //   console.log('hooks vacatitle')
 
  // }, [title])


  return (
    <div>
      <h1>My Hooks Todo List</h1>
      <form onSubmit={handleSubmit}>
         <label>Title</label>
          {/* <input name='title' value={title} onChange={(event) => setTitle(event.target.value)}/> */}
          <input name='title' {...title}/>
          <label>Description</label>
          <input name='description' {...description}/>
          
          {/* <input name='description' value={description} onChange={(event) => setDescription(event.target.value)}/> */}
          <button>Add Todo</button> 
        </form>
        {todos.map((todo, index) => {
          return(
            <React.Fragment key={index}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </React.Fragment>
          )
        })}
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {value, onChange}
}

export default TodoHooks;
