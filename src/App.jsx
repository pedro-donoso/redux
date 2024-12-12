import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))

  return (
    <div className='App'>
      <Header />
      <Email />
    </div>
  ); 
}

export default App;
