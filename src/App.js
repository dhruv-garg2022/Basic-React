import NewTodo from './Components/NewTodo/NewTodo';
import Todos from './Components/Todos/Todos';
import {useState} from 'react';

function App() {
  const INITIAL_TODO = [
    {
      id: 'T1',
      title:"The First Title",
      priority:"High",
      date:"2022-03-31",
    },
    {
      id:'T2',
      title:"The Second Title",
      priority:"Medium",
      date:"2022-04-3",
    },
    {
      id:'T3',
      title:"The Third Title",
      priority:"Medium",
      date:"2022-03-31",
    },
    {
      id:'T4',
      title:"The Fourth Title", 
      priority:"Low",
      date:"2022-03-07",
    }
  ];

  const [ allTodos,setAllTodos] = useState(INITIAL_TODO);

  const dataSaveHandler = (usertodo) =>{
    console.log(usertodo);
    setAllTodos((prevData)=>{
      return [usertodo,...prevData]
    });
  };

  return (
    <div className="App">
      <NewTodo onDataReceive={dataSaveHandler}/>
      <Todos todo={allTodos}/>

    </div>
  );
}

export default App;
