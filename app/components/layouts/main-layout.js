import React from 'react';

export default function(props) {
  return (
    <div className="app">
      <main>
        {props.children}
      </main>
    </div>
  )
}
