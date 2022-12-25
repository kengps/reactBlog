import React ,{useState} from 'react'
import Axios from 'axios'
function Quotes() {

    const [text , setText] = useState('');
    const [auth , setAuth] = useState('');
    const [logId , setLogId] = useState('');
    
    
    const id = Math.floor(Math.random() * 100) + 1;
        
    function getQuotes(){
        Axios.get('https://pokeapi.co/api/v2/pokemon/'+ id , {crossdomain: true})
        .then((res) =>{
           setText(res.data.forms[0].name)
           setAuth(res.data.game_indices[0].version.name)
          
           console.log('ข้อมูลที่ได้'+ id);
        })
    }

  return (

    <div>
            <button onClick={getQuotes}>
                    Generate Quote
            </button>
           
            <h1>{text}</h1>
            <h3>{"-_-" + auth}</h3>
    </div>
  )
}

export default Quotes