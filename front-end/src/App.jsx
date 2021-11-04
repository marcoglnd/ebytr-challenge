import './App.css';
import TaskForm from './components/TaskForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>to do list</h1>
      <div className="container">
        <TaskForm />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
