import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
       students : [
        {
          'firstName': 'Pramod',
          'lastName': 'Ray',
          'skills': ['Python','HTML','CSS']
        },
        {
          'firstName': 'Sachin',
          'lastName': 'Suresh',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },
        {
          'firstName': 'Samarth',
          'lastName': 'Hegde',
          'skills': ['Python', 'Git', 'CSS']
        }
      ]}}
  render() {
    return (
      <div>
        {this.state.students.map((item,index)=>
        (
          <div key={item}>
            <h1>{item.firstName}
            </h1>
        <h1>{item.lastName}</h1>
        <h1>{item.skills}</h1>
          </div>
        ))}
        
       </div>  
            
         
      
      
   )
}
}

export default App;
