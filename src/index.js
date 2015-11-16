import React from 'react';
import ReactDOM from 'react-dom';

const App = ({appState}) => {
  return (
    <div>
      <Header {...appState}/>
      <div> { appState.dynamicText} </div>
    </div> 
  )
}

const Header = ({header}) => {
  const styles = {
    header: {
      "fontSize": header.big ? "24px": "12px",
      "border": "1px solid"
    }
  }

  return (
    <div style={styles.header}>Header</div>
  );
}

const state = {
  dynamicText: "some ui state",
  header: {
    big: true 
  }
}

ReactDOM.render(
  <App appState={state}/>,
  document.getElementById('app')
);


