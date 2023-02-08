import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  return (
  
        <div className='expense-date'>
          {props.date.toISOString()}
          {/* {month} */}
        </div>
    
  )
}

export default ExpenseDate