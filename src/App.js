import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { useState } from 'react';
import React from 'react';
import Person from './User/User1';

function App() {
  const age = 21;
  
  const [users,setUserState] = useState({
    persons : [{
      name : "sidhartha",
      age : 21
    },
    {
      name : "asta",
      age : 18
    },
    {
      name : "lelouch",
      age : 20
    }
    ],
    others : "saved.."
  });

  
  
  const switchNameHandler = (firstName)=>{
    setUserState({
      persons : [{
        name : firstName,
        age : 21
      },
      {
        name : "yami",
        age : 28
      },
      {
        name : "lelouch",
        age : 20
      }
      ]
    })
  };
  
  const inputDynamicName = (dyna)=>{
    setUserState({
      persons : [{
        name : dyna.target.value,
        age : 21
      },
      {
        name : "yami",
        age : 28
      },
      {
        name : "lelouch",
        age : 20
      }
      ]
    })
  }

  console.log(users);

  const style1 = {
    textDecoration : 'underline'
  };

  return (
    <div className="App">
      <h1>React Tutorial</h1>
      <button onClick={switchNameHandler.bind(null,'kona')}>Change myName</button> {/* better to use bind for passing values to the function */}
      <Person name={users.persons[0].name} styleFirst={style1} inputName={inputDynamicName} >You are {users.persons[0].age} years old.</Person>
      <Person name={users.persons[1].name} clickme = {()=>switchNameHandler('saitama')}/>
      <Person name={users.persons[2].name}/>
    </div>
  );

  
  // JSX syntax will be converted
  // -------------------------------------
  //   return (
//     React.createElement('div',{className:"App"},"hello, this page is about react",React.createElement(user)));
}

// class App extends Component {
//   age = 21;

//   state = {
//     persons : [
//         {
//         name:"siddu"
//       },
//       {
//         name:"asta"
//       },
//       {
//         name:"might guy"
//       }
//     ],matter : "this will be merged"
//   }


//   changeNameHandler = () =>{
//     // console.log("saved...");
//     this.setState({
//       persons : [
//         {
//           name : "sidhartha"
//         },
//         {
//           name : "asta"
//         },
//         {
//           name : "rock lee"
//         }
//       ]
//     })
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <div className="App">
//       <h1>Hello, this page is about react</h1>
//       <button onClick={this.changeNameHandler}>Change name</button>
//       <Person name={this.state.persons[0].name}>You are {obj.age} years old.</Person>
//       <Person name={this.state.persons[1].name}/>
//       <Person name={this.state.persons[2].name}/>
//     </div>
//     );
//   }
// }
// let obj = new App();

export default App;
