import './App.css';
import Message from './component/Message'
import React from 'react'
// import ChangeForm from './component/Register';

function App() {

  const [currentUser, setCurrentUser] = React.useState("")

  console.log(`This is the currentUser: ${currentUser}`)

  return (
    <div className="App">
      <Message setCurrentUser = {setCurrentUser} />
      {/* <ChangeForm /> */}
    </div>
  );
}
//.
export default App;
