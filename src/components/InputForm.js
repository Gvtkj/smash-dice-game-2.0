import '../styles/InputForm.css'
import {db} from "../firebase";
import {ref, onValue, query, getDatabase, get, child, on, equalTo, DataSnapshot, push } from "firebase/database";
import { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import Select from 'react-select';


const InputForm = () => {

    const [previousCharacter, setPreviousCharacter] = useState(0);
    const [roll, setRoll] = useState(0);
    // const [nextCharacter, setNextCharacter] = useState('');
    const [nextCharacterName, setNextCharacterName] = useState('')
    const [charSelectList, setCharSelectList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [disabledCharacters, setDisabledCharacters] = useState([]);
    const [removedChars, setRemovedChars] = useState([]);



    useEffect(() => {
        get(child(ref(getDatabase()), 'characters/')).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val())
                // const data = ;
                // const dataArry =;
                
                setCharSelectList([snapshot.val()][0]);
                return charSelectList;
               
            } else{
                console.log('no data')
            }
        })
    },[])

    
    
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (Number(roll) + Number(previousCharacter) > charSelectList.length) {
            setNextCharacterName(charSelectList[charSelectList.length -1].name);
            // console.log(nextCharacterName)
            // console.log(charSelectList[charSelectList.length -1])
        } else{
        setNextCharacterName(charSelectList[Number(roll) + Number(previousCharacter)].name)
        setPreviousCharacter(charSelectList[Number(roll) + Number(previousCharacter)].index)
        console.log(previousCharacter);
        // console.log('missed')
        }
        
    }

    const handleRoll = (e) =>{
        setRoll(e.target.value)

        // console.log('rolled a ' + roll)
    }   

    const handleChange = (e) =>{
        setPreviousCharacter(Number(e.target.value));
        console.log(previousCharacter)
    }



    const reverseList = () =>{
        // e.preventDefault();
        setCharSelectList(charSelectList.reverse())
        setPreviousCharacter();
        console.log(charSelectList);
    }

    const shuffleList = () => {

    //   const tempList = arrayShuffle(charSelectList)  
      setCharSelectList(arrayShuffle(charSelectList))
    //   console.log(charSelectList);
    }


   const handleCharDisable = (e) => {
    console.log("id: " + e.target.value);
    const value = e.target.value;

    setDisabledCharacters(disabledCharacters => [...disabledCharacters, value]);
        console.log(disabledCharacters);
     
;
   }

   const disableList = () => {
    let res = charSelectList.filter((char) => !disabledCharacters.includes(char.id));
    // let removedChars = charSelectList.filter((char) => disableList.includes(char.id));
    setRemovedChars(renderDis);
    console.log(res)
    setCharSelectList(res);
    // setDisabledCharacters([]);

    // console.log(charSelectList);
}

    const renderDis = charSelectList.filter(({id}) => disabledCharacters.includes(id));

    return (
        <>
            <form  onSubmit={ handleSubmit }className="inputForm">
                <label className="inputLabel">Last Character: </label>
                <select name="charSelect" className='select-input' onChange={handleChange}  >
                   {  charSelectList.map((char, index) => (
                    <option value={index}  key={char.id}>{ char.name }</option>
                    )) }
                </select>
                {/* <p>{previousCharacter }</p> */}
                <br />
                <label className="inputLabel"> Roll: </label>
                <input type="number" name="roll" className='roll-input' onChange={handleRoll} />
                <p>{roll}</p>
                <br />
                <button type="submit" className='next-character-button'>Get Next Character</button>
                
               <select name="charDisableComp" className='select-input' onChange={ handleCharDisable }>
                   { charSelectList.map((char, index) => (
                       <option value={ char.id } key={char.id}> { char.name }</option>
                   )) }
               </select>
                <h3>{ 'Next Character: ' + nextCharacterName } </h3>

                
            </form> 
            <div className="btn-wrapper">
            <button className='btn-function' onClick={reverseList}> Reverse</button>
            <button className='btn-function' onClick={shuffleList}> Shuffle </button>
            <button className='btn-function' onClick={disableList}> Disable Characters</button>
            </div>
            
            <div className="list-wrapper">
                <div className="list-1">
                    <h3> Character List </h3>
                    { charSelectList.map((char, index) => (
                            <p value={ char.id } key={char.id}> { char.name  }  { index } </p>
                        )) }
                </div>
                
                <div className="list-2">
                    <h3> Characters To Be Removed </h3>
                    {
                    // disabledCharacters.map((char) =>(
                    //     <p key={charSelectList[char].id}> { charSelectList[char].name + "  " + charSelectList[char].id}  </p>
                    // ))

                        renderDis.map((char) =>(
                            <p value={ char.id }> { char.name } </p>
                        ))              
                    }
                </div>

                <div className="list-3">
                    <h3> Disabled Characters </h3>
                    {
                        removedChars.map((char) => (
                            <p value={char.id }> { char.name}</p>
                            ))
                    }



                </div>
               
            
            </div>
           
            
             
           
              
            
        </> 
        
     );
}
 
export default InputForm;