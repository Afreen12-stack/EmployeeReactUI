import './App.css';
import Userdata from './components/UserData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContact from './components/AddContact';
import { useState } from 'react';
import EditContact from './components/EditContact';

function App() {
  const[color, setColor]=useState();
  const[data,setData] = useState()
  const[row,setRow] = useState([])
  return (
    <Router>
      <div >
      <Switch>
        <Route exact path='/' component={()=> <Userdata color={color} data={data} setData = {setData} setColor={setColor} setRow={setRow} row={row} />}/>
        <Route exact path="/AddContact"  component={()=><AddContact data={data} setData = {setData} color={color} setColor={setColor} />}/>
        <Route  path="/EditContact*"  component={()=><EditContact data={data} setData = {setData} setColor={setColor} button="Update"  row={row} Name = "Edit Contact"/>}/>
      </Switch>
</div>
    </Router>
    
  );
}

export default App;