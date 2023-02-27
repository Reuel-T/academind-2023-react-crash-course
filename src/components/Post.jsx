import React from 'react'

const names = ['Gary', 'Bob'];

function Post() {

    const name = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
        <p>{ name }</p>      
        <p>React is annoying</p>      
    </div>
  )
}

export default Post