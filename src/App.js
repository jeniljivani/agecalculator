import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var [bod , setbod] = useState('');
  var [today , settoday] = useState('');
  var [milli , setmilli] = useState('');
//   var [hour , sethour] = useState('');
  var [year , setyear] = useState('');
  var [month , setmonth] = useState('');
  var [week , setweek] = useState('');
  var [day , setday] = useState('');
  var [hour , sethour] = useState('');
  var [minit , setminit] = useState('');
  var [second , setsecond] = useState('');
  // const [get, setGet] = useState('');
  // const [get1, setGet1] = useState('');
  // const [sub, getSum] = useState('');
  // const [age, getAge] = useState('');
  // const [week, getWeek] = useState('');
  // const [day, getDay] = useState('');
  // const [hours, getHours] = useState('');
  // const [min, getMin] = useState('');
  // const [sec, getSec] = useState('');

  function age() {
    if(bod ==   '')
    {
      alert("ENTER YOUR B'DATE ");
      return false;
    }
    if(today ==   '')
    {
      alert('ENTER TODAY DATE ');
      return false;
    }
    bod =new Date(bod);
    today = new Date(today);    
    var mili = today-bod;
   
    setyear(Math.floor(mili / (365 * 24 * 60 * 60 * 1000)));    
    setmonth( Math.floor(mili / (30 * 24 * 60 * 60 * 1000)));
    setweek( Math.floor(mili / (7 * 24 * 60 * 60 * 1000)));
    setday(Math.floor(mili / (24 * 60 * 60 * 1000)));
    sethour( Math.floor(mili / (60 * 60 * 1000)));
    setminit ( Math.floor(mili / (60 * 1000)));
    setsecond ( Math.floor(mili / (1000)));
    // setmilli ( Math.floor(second *1000));


  }
  return (
    <div className="App">
      <h1>AGE CALCULATOR</h1>
      <div className='from'>
        <table>
          <tr>
            <td>B'DAY DATE : </td><td><input type="date" onChange={(e)=>{setbod(e.target.value)}} /></td>
          </tr>
          <tr>
            <td>TODAY DATE : </td><td><input type="date"  onChange={(e)=>{settoday(e.target.value)}} /></td>
          </tr>
          <tr>
            <td colSpan={2}><input type="button" value="Click here" onClick={age} className='btn'/></td>
          </tr>
        </table>
        <hr></hr>        
          <div>
            <li>YEAR : <input type='text' value={year}readOnly></input></li>
            <li>MONTHS : <input type='text' value={month}readOnly></input></li>
            <li>WEEKS : <input type='text' value={week}readOnly></input></li>
            <li>DAY : <input type='text' value={day}readOnly></input></li>
            <li>HOURS : <input type='text' value={hour} readOnly></input></li>
            <li>MINIT : <input type='text' value={minit} readOnly></input></li>
            <li>SECOND : <input type='text' value={second} readOnly></input></li>
            {/* <li>MILLI SEC : <input type='text' value={milli} readOnly></input></li> */}
          </div>
       
      </div>
      <div className='result'>
        
      </div>     
    </div>
  );
}
export default App;



// import './App.css';
// import React, { useState } from 'react';

// function App() {

//   const [name, getName] = useState('');
//   const [get, setGet] = useState('');
//   const [get1, setGet1] = useState('');
//   const [sub, getSum] = useState('');
//   const [age, getAge] = useState('');
//   const [week, getWeek] = useState('');
//   const [day, getDay] = useState('');
//   const [hours, getHours] = useState('');
//   const [min, getMin] = useState('');
//   const [sec, getSec] = useState('');
//   // console.log(get)
//   // console.log(get1)



//   function Click() {
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var day = date.getDate();
//   }
//   function calculate() {

//     if (name == '') {
//       alert("Plzzz Enter Your 'Name'")
//     }
//     if (get == '') {
//       alert("Enter Default date")
//       return false
//     }
//     if (get1 == '') {
//       alert("Enter Your Date")
//       return false
//     }

//     // getSum(parseInt(get) - parseInt(get1))

//     var dAge = new Date((get1));
//     // console.log(dAge)
//     var newDate = new Date();

//     var sub = newDate - dAge;
//     console.log(sub);

//     var years = Math.floor(sub / (365 * 24 * 60 * 60 * 1000));
//     var mm = Math.floor((sub % (365 * 24 * 60 * 60 * 1000)));
//     var month = Math.floor(mm / (30 * 24 * 60 * 60 * 1000));
//     var dd = Math.floor(mm % (30 * 24 * 60 * 60 * 1000));
//     var day = Math.floor(dd / (24 * 60 * 60 * 1000));

//     var month2 = Math.floor(sub / (30 * 24 * 60 * 60 * 1000));
//     var week = Math.floor(sub / (7 * 24 * 60 * 60 * 1000));
//     var days = Math.floor(sub / (24 * 60 * 60 * 1000));
//     var hour = Math.floor(sub / (60 * 60 * 1000));
//     var minit = Math.floor(sub / (60 * 1000));
//     var second = Math.floor(sub / (1000));

//     getSum(years);
//     getAge(month2)
//     getWeek(week)
//     getDay(days)
//     getHours(hour)
//     getMin(minit)
//     getSec(second)

//   }
//   return (
//     <>
//       Enter Name =<input type='text' onChange={(e) => { getName(e.target.value) }}></input>
//       <h3>Default Date</h3><input type='date' onChange={(e) => { setGet(e.target.value) }}></input>
//       <h3>Enter Date</h3><input type='date' onChange={(e) => { setGet1(e.target.value) }}></input><br></br><br></br>
//       <input type='button' value="Click Here" onClick={calculate}></input>
//       <div>
//         <br></br>
//         <span style={{fontWeight:'bold',textTransform:'uppercase'}}> {name}</span>  Your Birthday ...!!<br></br><br></br>
  
//         Year =   {sub}<br></br>
//         Month = {age}<br></br>
//         Week = {week}<br></br>
//         Days = {day}<br></br>
//         Hours = {hours}<br></br>
//         Minutes = {min}<br></br>
//         Seconds = {sec}<br></br>
//       </div>
//     </>
//   )

// }

// export default App;