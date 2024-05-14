/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
import { TodoProvider } from "./Contexts/TodoContext";

function App() {
  const[todos , setTodos] = React.useState([])

  const addTodo = (todo)=>{
      
  }

  return (
    <TodoProvider  value={{todos,addTodo,updateTodo,deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
          <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            <TodoItem/>
          </div>
        </div>
      </div>{" "}
    </TodoProvider>
  );
}

export default App;
