import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Leaves from './components/Leaves';
import Tasks from './components/Tasks';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/leaves" element={<Leaves/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/editprofile" element={<EditProfile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
