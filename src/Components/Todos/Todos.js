import TodoItem from "../TodoItem/TodoItem";
import './Todos.css'
import Card from "../UI/Card/Card";
const Todos = (props) => {
    const ALL_TODOs=props.todo;
    return (
        <Card className="todos">
            
                {ALL_TODOs.map((todo)=>(
                    <div key={todo.id}>
                    <TodoItem
                    title={todo.title}
                    priority={todo.priority}
                    date={todo.date}
                    
                    />
                </div>
            ))}
            {/*<TodoItem
                title={INITIAL_TODO[0].title} 
                priority={INITIAL_TODO[0].priority} 
                date={INITIAL_TODO[0].date}  
            />
            <TodoItem
                title={INITIAL_TODO[1].title} 
                priority={INITIAL_TODO[1].priority} 
                date={INITIAL_TODO[1].date}
            />
            <TodoItem
                title={INITIAL_TODO[2].title} 
                priority={INITIAL_TODO[2].priority} 
                date={INITIAL_TODO[2].date}
            />
            <TodoItem
                title={INITIAL_TODO[3].title} 
                priority={INITIAL_TODO[3].priority} 
                date={INITIAL_TODO[3].date}
            />*/}
        </Card>
    );
}

export default Todos;