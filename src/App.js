
import "./App.css";
import { useState } from "react";
//import {User} from './User';
//import {Planet} from './Planet';


function App() {
  const [value,setValue]=useState(0);

  const increaseValue=()=>{
  setValue(value+1);
  
  };
  const decreaseValue=()=>{
    if(value<=0){
      setValue(value);
    
     
    }
    else{
    setValue(value-1);
    }
    
    };
  return (
  <div className="App">
  <h1>{value}</h1> 
  <button onClick={increaseValue}>
    Increase Value
  </button>
  <button onClick={decreaseValue}> Decrease Value</button>
  </div>
  );
 
  


} 

                                  //Day_______2
//                                list_ and_ objects
// const planets=[
//   { name:"Mars", isGas:false},
//   { name:"earth", isGas:true},
//   { name:"jupiter", isGas:true},
//   { name:"neptune", isGas:false},
//   { name:"venus", isGas:true},
    
//    ];
//    return(
//     <div className="app">
//       {planets.map((planet,key)=>planet.isGas && <h1> {planet.name}</h1>
//        //{if(planet.isGas) return<h1>{planet.name}</h1>;}
//    )}
//     </div>
//    );
                         

                //  const names=["hi","ji","ci","pi","xi"];
    // const users=[
    // {name:"gaurav", age:20},
    // {name:"saurav", age:45},
    // {name:"ha", age:65}
    // ];
    // return(
    //   <div className="App">
    //    {users.map((user,key)=>{
    //    return <User name={user.name} age={user.age}/>
    //    })}
       
    //   </div>

    // );





                                //  &&
  //const isGreen=true;
   //  <h1 style={{color: isGreen? "green": "red"}}>happy color</h1>
      

   //  {isGreen && <button>button</button>}

    //                             ternary--operator
    //  const age=18;
  //   return( <div className="App">
  //     {age>=15?<h1>Allowed</h1> : <h1>Not allowed</h1>}
  // </div>
  //);

     


                              //if-----else

    // if(age>=20){
    //   return<h1>allowed</h1>
    // }
    // else{
    //   return <h1 className='App'>Not allowed</h1>
    // }
   





                                            //Day------1
  //const name=<h1>Gaurav</h1>;
  //const age=<h2>20</h2>;

//   return (
//     <div className="App">
//       <User name="gaurav" age={20} email="xyz123@123"/>
//       <User/>
      
//       <Job salary={1000} position="manager" company="abc"/><br/> <br/> <br/>
//       <Job/>
//     </div>
//   );
// }
// const User=(props)=>{
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.email}</h3>
//       <h4>{props.gender}</h4>
//     </div>
//   );
// }
// const Job=(props)=>{
//   return(
//     <div>
//       {props.salary}<br/>
//       {props.position}<br/>
//       {props.company}<br/>
//     </div>
//   );
// }
// Job.defaultProps={
//   salary:"0000",
//   position:"yetToDecide",
//   company:"unDecided"
// };
// User.defaultProps={
//   name:"name",
//   age:"56",
//   email:"hello@123",
//   gender:"male"
// };
// User.protoTypes={
//   name:PropTypes.string.isRequired
// };

export default App;
