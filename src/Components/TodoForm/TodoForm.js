import './TodoForm.css'
import { useState } from 'react';
const TodoForm = (props) =>{
    const [title,setTitle] = useState('MyTitle');
    const [todoDate, setTodoDate] = useState('19-05-2000')
    const [priority,setPriority] = useState('Medium')

    // const [userInput,setInput] = useState({
    //     title:'',
    //     todoDate:'',
    //     priority: 'Low'
    // })

    const titleChangeHandler = (event) =>{
        // setInput((prevState)=>{
        //     return {...prevState, title: event.target.value}
        // })
        // setInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        setTitle(event.target.value)
        //console.log(event.target.value)
    };

    const dateChangeHandler = (event) =>{
        // setInput({
        //     ...userInput,
        //     todoDate: event.target.value
        // })
        setTodoDate(event.target.value)
        //console.log(event.target.value)
    };

    const priorityChangeHandler = (event) =>{
        // setInput({
        //     ...userInput,
        //     priority: event.target.value
        // })
        setPriority(event.target.value)
        //console.log(event.target.value)
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const userData = {
            title: title,
            date: new Date(todoDate),
            priority: priority
        }
        console.log(title,todoDate, priority)
        props.onSaveClick(userData)
        setTitle('');
        setTodoDate('');
        setPriority('High');
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="todo-controls">
                <div className="todo-control">
                    <label htmlFor="title"> Title</label>
                    <input type = "text" name="title" id="title" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className="todo-control">
                    <label htmlFor="date">Date</label>
                    <input type = "date" name="date" id="date" onChange={dateChangeHandler} value={todoDate}/>
                </div>
                <div className="todo-control">
                <label htmlFor="Priority">Priority</label>
                    <select onChange={priorityChangeHandler} value={priority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>
            <div className="todo-actions">
                <button className='btn'>Add Todo</button>
            </div>
        </form>
    );
}

export default TodoForm;