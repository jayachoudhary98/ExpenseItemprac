import React from 'react'
import './card.css';

const Card = (props) => {
  const {className, childern}= props
    const classes ='card' + className;
    console.log(props,"...hello")
  return (
    <div className={classes}>{childern}</div>
    )

}

export default Card