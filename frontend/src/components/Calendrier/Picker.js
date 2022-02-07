// import React, { useState } from "react";
// // import {render} from "react-dom"
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

// const Picker = () => {
//   const [date, setDate] = useState(new Date());
//   const [showDate, setShowDate] = useState(false);

// const onChange = (date) => {
//     setDate(date);
//   };

// const validation = () => {
//     setShowDate(true);
//     console.log(date);
//   };

// const reset = () => {
//     showDate(false);
//   };
//   return (
//     <>

//         <Calendar
//           showWeekNumbers
//           onChange={onChange}
//           value={date}
//           selectRange={true}
//         />

//       {console.log(date)}
//       {/* <p>Date choisie : {date.toLocaleDateString()} </p> */}
//       <button onClick={validation}>Valider</button>
//       {showDate ? (
//         <div>
//           <p>Du : {date[0].toLocaleDateString()}</p>
//           <p>Au : {date[1].toLocaleDateString()}</p>
//         </div>
//       ) : null}
//     </>
//   );
// };
// // render (<Picker/>, document.querySelector("#root"));
// export default Picker;
