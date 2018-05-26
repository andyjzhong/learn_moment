import React from 'react';

const Button = (time) => {
  return (
    // <button onClick={() => {onUpdate(time)}}>Reload</button>
    <button className="button" onClick={() => {console.log(this)}}>Reload</button>
  )
}

export default Button;
