import {useState} from'react';
import './TodoItem.css';
import TodoDate from '../TodoDate/TodoDate';
import Card from '../UI/Card/Card';
// JSX 
// Never use class keyword instead use ClassName keyword
function TodoItem(props){ 
    const [usertitle, setTitle] = useState(props.title);
    const [textChange, setTextChanged] = useState(false);
    let title = props.title;
    const todoDate = new Date(props.date);
    const priority = props.priority;

    const buttonClickHandler = () =>{
        setTitle('This is new updated title');
        setTextChanged(true);
        // title='This new updated title'
        // console.log("Button Clicked")
    }

    return (
        <Card className='todo-item'>
            <TodoDate userDate={todoDate}/>
            <div className='todo-description'>
                <h2 className={`${textChange == true ? "color2":"color1"}`}>
                    {usertitle}
                </h2>
                <div className='todo-priority'>{priority}</div>
                <button onClick={buttonClickHandler}>Change Text</button>
            </div>
        </Card>
    );
}
export default TodoItem;
// export function NewItem(){
//     return <h2>This is new Item</h2>;
// }
/*
function TodoItem({title,priority,todoDate}){ 
    const title = props.title;
    const todoDate = new Date(props.date);
    const priority = props.priority;
    return (
        <div className='todo-item'>
            <div>{ todoDate.toLocaleString() }</div>
            <div className='todo-description'>
                <h2 >{title}</h2>
                <div className='todo-priority'>{priority}</div>
            </div>
        </div>
    );
}
*/
