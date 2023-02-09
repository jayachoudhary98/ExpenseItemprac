import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
// import Card from './Card'


const ExpenseItem = (props) => {
    // // let expenseDate = new Date();
    // const month= props.date.toLocalString('en-US', {month: 'long'});
    // const year= props.date.getFullYear();
    // const day= props.date.toLocalString('en-US', {day: '2-digit'});

    // let title= props.title;
    // const [newTitle, setNewTitle]= useState("");
    // const changeHandler= (e) =>{
    //     setNewTitle(e.target.value);
    //     console.log(newTitle)

    // }

    // const [title, setTitle]= useState(props.title);
    // const ClickHandle = () =>{
    //     // title= "new title...";
    //     // console.log(title);
    //     setTitle(newTitle);

    // }

  return (
    <div className='expense_item'>
      <>
        <ExpenseDate date={props.date}/>
    
       {/* <div>
          {props.date.toISOString()}
          {month} 
        </div> */}
        {/* <div>{year}</div>
        <div>{day}</div> */}
    
        <div className='expense_description'>
            <h2>{props.title}</h2>
            <div className='expense_price'>
               {props.amount}
            </div>
        </div>
        {/* <input type='text' value={newTitle} onChange={changeHandler}></input>
        <button onClick={ClickHandle}>Change Title</button> */}
       </>
    </div>
  )
}

export default ExpenseItem