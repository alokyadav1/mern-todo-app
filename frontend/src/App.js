import './App.css';
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Active from './components/Active';
import Completed from './components/Completed';
import AllTask from './components/AllTask';
import Layout from './components/Layout';
import TaskContext from './context/TaskContext';
import taskReducer from './reducer/taskReducer';
import Header from './components/Header/Header';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  return (
    <BrowserRouter>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<AllTask />} />
              <Route path="active" element={<Active />} />
              <Route path="completed" element={<Completed />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
