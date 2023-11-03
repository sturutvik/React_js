import logo from './logo.svg';
import './App.css';
import Comp from './componets/comp';
import Frist from './componets/Frist';
import Classobject from './componets/Classobject';
import Fourfunction from './componets/Fourfunction';

const add =()=>{
   let a =10
   const b=20
   let c =a+b
   return c;



}
function App() {
  let arr =[10,20,30, 40,50];
  let arr1 =  arr.map((i)=>{
      return <li>{i}</li>
  })
  
  
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Addtion is:{add()}</h4>
        <h3>Array is :{arr[1]}</h3>
        <ul>
          {arr1}
        </ul>

      <Comp />
      <Frist />
      <Classobject />
      <Fourfunction />
      </header>
    </div>
    
  );
}

export default App;
