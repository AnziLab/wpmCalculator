import React, {useState} from 'react';



const Calculator = () => {
   const select = document.getElementById("selectNumber");

    const minutes = [];
    const seconds = [];

    let i=0;
    for(i=0; i<60; i++){
        minutes.push(i);
        seconds.push(i);
    }
    const handleChange=e=>{
        console.log(e.target.value)
    };

    return (
        <div>
            <div>총 글자 수</div>
            <div>
                <input placeholder="글자 수를 숫자로만 적어주세요" />
            </div>
            <div>
            <select onChange={handleChange}>
         {minutes.map(time => {
           return (
             <option value={time}> {time} </option>
           )
         })}
    </select>
            </div>
           
        </div>

    );
};

export default Calculator;