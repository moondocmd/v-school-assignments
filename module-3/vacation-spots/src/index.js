import React from 'react';
import ReactDOM from 'react-dom';
import './FlexCard.css';
import VacationSpot from './VacationSpot';


const App = () => {
  return (
      <div className="grid-container">
          <VacationSpot 
              place="Barcelona" 
              price="200"
              timeToGo="Summer" 
              image="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <VacationSpot 
              place="Thailand" 
              price="150"
              timeToGo="Spring" 
              image="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <VacationSpot 
              place="Toronto" 
              price="300"
              timeToGo="Summer" 
              image="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <VacationSpot 
              place="Detroit" 
              price="250"
              timeToGo="Fall"
              image="https://images.pexels.com/photos/702343/pexels-photo-702343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          />
          <VacationSpot 
              place="Los Angeles" 
              price="500"
              timeToGo="Winter"
              image="https://images.pexels.com/photos/1688186/pexels-photo-1688186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <VacationSpot 
              place="Berlin" 
              price="220"
              timeToGo="Fall"
              image="https://images.pexels.com/photos/2871654/pexels-photo-2871654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));