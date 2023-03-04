import React from 'react';

function MissedGoal() {
	return <>
   <center>
    <h3>This is the example of Conditional Rendering:</h3>
    <br></br>
       <h1>MISSED!</h1></center>
    </>
}

function MadeGoal() {
    	return <>
      <center>
        <h3>This is the example of Conditional Rendering:</h3>
        <br></br>
        <h1>GOAL!</h1></center>
        </>
}

function App(props) {
    
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

export default App;