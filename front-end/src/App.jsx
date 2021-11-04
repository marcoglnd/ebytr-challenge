import './App.css';
import TaskForm from './components/TaskForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TaskForm />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
