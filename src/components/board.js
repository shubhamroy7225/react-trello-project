import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Board = props => {
  return (
    <div>
      <Link to={`/board/${props.boards.id}`}>
        {/* <img src={props.boards.prefs.backgroundImage} alt='' />
        {props.boards.name} */}
        <button className='boardB btn btn-primary active'>
          {props.boards.name}
        </button>
      </Link>
    </div>
  );
};
export default Board;