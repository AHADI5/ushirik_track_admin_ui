
// import React from "react";
// import './index.css';
// export default function App() {

import Header from "./components/login_components/Header";

 

//   const [formData , setFormData] = React.useState(
//     {firstName : "" , 
//     lastName : "", 
//     email :  "" , 
//     comment  : "",
//     isFriendly : true,
//     color :  ""
//     }
//     )
 
//   function handleInformations(event) {
//     console.log(formData.color);
//     const {name , value , type , checked} = event.target
//     setFormData(prevFormData  => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })

   

//   }
//   function sendData(event) {
//     event.preventDefault()
//     var data = fetch('http://localhost:8745/api/v1/school/1/events', {mode: 'no-cors'})
//     .then (res => res.json)
//    return data 
   
    
          
          
//  }


    
  
    

//   return(
//       <form onSubmit={sendData}>
//       <input
//       type="text"
//       placeholder="First Name"
//       onChange={handleInformations}
//       name="firstName" 
//       value={formData.firstName}
//       />

//       <input
//       type="text"
//       placeholder="Last Name"
//       onChange={handleInformations}
//       name="lastName"
//       value={formData.lastName}
//       />

//   <input
//       type="text"
//       placeholder="email"
//       onChange={handleInformations}
//       name="email"
//       value={formData.email}
//       />

//   <textarea 
//   value={formData.comment}
//   name="comment"
//   onChange={handleInformations} 

//   />

//   <input
//   type="checkbox"
//   name="isFriendly"
//   id="isFriendly"
//   checked = {formData.isFriendly}
//   onChange={handleInformations}
//   /> 
//   <label htmlFor="isFriendly">Are you friendly</label>

//   <select
//   value={formData.color}
//   name="color"
//   onChange={handleInformations}
//   >
//     <option value="color">Color</option>
//     <option value="red">Red</option>
//     <option value="green">Green</option>
//     <option value="blue ">Blue</option>
//     <option value="yellow">Yellow</option>
//   </select>
//   <p  className="text-3xl font-bold underline">Login</p>
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Envoyer</button>

//     </form>

//   )
// }

// import React  from "react";
// import Test from "./components/login_components/test";

// export default function App() {
//   const [schoolEvents , setSchoolEvents] = React.useState({})
//   const [count , setCount] = React.useState(0)
//   console.log("Component rendered")
//   React.useEffect(function() {

//     fetch("http://localhost:8745/api/v1/school/1/events")
//       .then(res => res.json())
//       .then(data => setSchoolEvents(data));
//     console.log("Effect ran");

//   }, []);

//   const schooEventArray = schoolEvents.map(prev =>  {return <Test {...prev.title} />});

//   function handleClick() {
//     setCount(count => count + 1); // Simplified the increment expression
//   }

//   return (
//     <div>
//       {schooEventArray}
//       {/* <pre>{JSON.stringify(schoolEvents , null , 2)}</pre> */}
//       <p>Count is {count}</p>
//       <button onClick={handleClick}>Click me</button> {/* Fixed typo in button text */}
//     </div>
//   );
// }
export default function App() {

  return (
    <div>
      <Header/>
      
    </div>
  )
  
}