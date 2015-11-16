import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <Header />
    </div> 
  )
}

const Header = () => {
  return (
    <div>Header</div> 
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


