import './App.css';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Active from './components/Active';
import Completed from './components/Completed';
import AllTask from './components/AllTask';
import Layout from './components/Layout';
import TaskContext from './context/TaskContext';
import TokenContext from './context/TokenContext';
import taskReducer from './reducer/taskReducer';
import tokenReducer from './reducer/tokenReducer';
import userReducer from './reducer/userReducer';
import Header from './components/Header/Header';
import Login from './components/Login';
import Register from './components/Register';
import axios from './Axios/axios.js';
function App() {
  const token = localStorage.getItem("authToken")
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [userToken, tokenDispatch] = useReducer(tokenReducer, token)
  const [user, userDispatch] = useReducer(userReducer, {})
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/user/getUser",{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        tokenDispatch({type: "SET_TOKEN", payload: res.token})
        userDispatch({type: "SET_USER", payload:res.data})
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchUser()
  },[token])
  return (
    <BrowserRouter>
      <TokenContext.Provider value={{userToken, tokenDispatch, user, userDispatch}}>
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
      </TokenContext.Provider>

    </BrowserRouter>
  );
}

export default App;
