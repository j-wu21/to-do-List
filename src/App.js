import { useState } from 'react';
import './App.css';

function App() {
  const [messageArray, setMessageArray] = useState([]);
  //const messageArray = ['nope','yeh','maybe','ding','dong','ayo','enough'];
  // let inputValue = '';
  const [inputValue, setInputValue] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState('Put stuff in me');

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {messageArray?.map((message, index) => {
            return (<li key={index}>{message}</li>)
          })}
        </ul>
        <div style={{paddingBottom: '24px'}}>
          <input 
            type='text' 
            placeholder={placeholderValue}
            value={inputValue} 
            onChange={(event)=>{
             //inputValue = event.target.value
             setInputValue(event.target.value)
          }} >

          </input>
        </div>
        <button onClick={(event)=>{
          console.log(messageArray);
          if (inputValue!==''){
            const newMessageArray = [...messageArray, inputValue];
            setMessageArray(newMessageArray);
            setInputValue('');
            setPlaceholderValue('Put stuff in me again')
          
          }else{
            setPlaceholderValue('blanks donut work');
          
          }

        }}>CLICK ME</button>
        <button onClick={(event)=>{
          console.log(messageArray);
          if (inputValue!==''){
            const newMessageArray = [...messageArray, inputValue];
            setMessageArray(newMessageArray);
            setInputValue('');
            setPlaceholderValue('Put stuff in me again')
          
          }else{
            setPlaceholderValue('blanks donut work');
          
          }

        }}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
