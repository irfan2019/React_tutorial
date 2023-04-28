import './App.css';

function App() {


  //const age = 7;
  //const isRed=false;
  const lis=[
    {name:"irfan",age:21},
    {name:"taka",age:32},
    {name:"trish",age:26},
  ];


  return (
    <div className="App">
     {
      lis.map((user,key) =>
      {
        return <Neww name={user.name} age={user.age} />
      })}

     {/* conditional rendering */}

     {/* {age<=18 ? <h1>not eligible</h1> : <h1>eligible</h1>}   
     <h1 style={{color : isRed ? "green" : "red"}}>check it out</h1>
     {isRed && <button>click me</button>}
       */}
      {/* <h1 className="lop"> irfan</h1>
      <User />
      <Second name="irfan" age={23} email="google.com"/> */}
       {/* <Eligibilty /> */}
    </div>
  );
    
}


const Neww = (props) =>
{
  return(
    <div>
      {props.name} {props.age}
    </div>
  );
};

// const User = () => //component
// {
//   return(
//     <div>
//       <h1>irfan</h1>
//       <h1>mentined age</h1>
//       <h1>chennai</h1>
//     </div>

//   )
// }

// const Second = (props) =>
// {
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }


// const Eligibilty = () =>
// {
//   const agee=17;
//   return
//   (
//     <div className="eli">
//       {agee<=18 ? <h1>not eligible</h1> : <h1>eligible</h1>}
//     </div>
//   )
// }


export default App;
