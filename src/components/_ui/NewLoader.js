import React from 'react';
import './NewLoader.css';

function Loader() {
  return (
    <React.Fragment>
      <div id="container">
        <div id="yellow"></div>
        <div id="red"></div>
        <div id="blue"></div>
        <div id="violet"></div>
      </div>
    </React.Fragment>
  );
}

export default Loader;
