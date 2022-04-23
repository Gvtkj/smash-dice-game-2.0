
import {db} from "../firebase";
import {ref, onValue, query, getDatabase, get, child, on, equalTo, DataSnapshot, push } from "firebase/database";
import { useState, useEffect } from "react";


const InputForm = () => {

    const [previousCharacter, setPreviousCharacter] = useState();
    const [roll, setRoll] = useState();
    // const [nextCharacter, setNextCharacter] = useState('');
    const [nextCharacterName, setNextCharacterName] = useState('')
    const [charSelectList, setCharSelectList] = useState([]);


    useEffect(() => {
        get(child(ref(getDatabase()), 'characters/')).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val())
                // const data = ;
                // const dataArry =;
                
                setCharSelectList([snapshot.val()][0])
                return charSelectList;
               
            } else{
                console.log('no data')
            }
        })
    },[nextCharacterName])

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setNextCharacterName(charSelectList[Number(roll) + Number(previousCharacter)].name)
    }

    const handleRoll = (e) =>{
        setRoll(e.target.value)

    }   
   
    const newData = []
    
    const handleChange = (e) =>{
        setPreviousCharacter(e.target.value);
        console.log(previousCharacter)
    }


    return (
        <>
            <form  onSubmit={ handleSubmit }className="inputForm">
                <label className="inputLabel">Last Character</label>
                <select name="charSelect" onChange={handleChange}  >
                   {  charSelectList.map((char) => (
                    <option value={char.id}  key={char.id}>{ char.name }</option>
                    )) }
                </select>
                <p>{previousCharacter}</p>
                <br />
                <label className="inputLabel"> Roll </label>
                <input type="number" name="roll" onChange={handleRoll} />
                <p>{roll}</p>
                <br />
                <button> </button>
                <button type="submit">Get Next Character</button>

                <h3>{ 'Next Character: ' + nextCharacterName } </h3>
                <h3>{}</h3>
            </form> 
             
           
              
            
        </> 
        
     );
}
 
export default InputForm;