import axios from 'axios';
import React,{useEffect,useState} from 'react';


function App() {
  const [veri,setVeri]=useState([])

  useEffect(()=>{
    
    {
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setVeri(res.data))
    }

  },[veri])
  

  return (
    <div className="App">

      <h1  style={{
        width: "420px",
        backgroundColor:"lightpink",
        borderRadius:"20px",
        paddingLeft:"20px",
        marginLeft:"20px",
        fontFamily:"Helvetica"
        }}>
          Kullanıcılar</h1>
      
      {veri.map(veriss=>{
        return(
          <div>
            <ul>
              <li style={{
                fontFamily:"Helvetica",
                width: "400px",
                backgroundColor:"lightgreen",
                borderRadius:"20px",
                paddingLeft:"20px",
                }}>
                {veriss.username}: {veriss.name}
              </li>
            </ul> 
        </div>
        )
      })}
      
      
    </div>
  );
}

export default App;
