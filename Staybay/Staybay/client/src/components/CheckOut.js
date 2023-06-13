import React, { useState,useEffect } from 'react';
import axios from 'axios';



const Checkout = ({amount,hostelId}) => {
  
 
  

  
  const [receipt, setReceipt] = useState({
    name:'user',
    email:'user',
    amount:amount,
    hostelId:hostelId
  });
  // const user = localStorage.getItem("user");
  // const id = user.user._id
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show,setShow] = useState(false)
  const [myUser, setMyUser] = useState(null);
  const[myId,setMyId]=useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setMyUser(JSON.parse(storedUser));
    }
  }, []);
  
  const open = () => {
    setShow(true);
    setMyId(myUser?.user?._id);
  };
  
  const set =()=>{
    setReceipt({
      name:name,
      email:email,
      amount:amount,
      hostelId:hostelId
   })
   
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/orders/payment', {
        amount,
        receipt,
        name,
        email,
        hostelId,
        myId
       
      });
      window.alert(response.data);
      // redirect to success page or handle the response as per your requirement
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  return (
    <div>
    <br />
      <button className='btn btn-success' onClick={open}>Book Now</button>
      <br />
      <br />
     {
      show && ( <div style={{background:"#fff", height:"540px"}}>
        <form  onSubmit={handleSubmit}>
        <div style={{margin:"1rem"}}>
          <label htmlFor="amount">Amount:{amount}</label>
         
        </div>
       
        <div style={{margin:"1rem"}}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{margin:"1rem"}}>
        <label for="cardnumber">Card Number:</label>
          <input type="tel" id="cardnumber" name="cardnumber" pattern="[0-9]{16}" required />
        </div>
        <div style={{margin:"1rem"}}>
    <label for="name">Name on Card:</label>
    <input type="text" id="name" name="name" pattern="[A-Za-z ]+" required/>
  </div>
  <div style={{margin:"1rem"}}>
    <label for="expiry">Expiration Date (MM/YY):</label>
    <input onClick={set} type="text" id="expiry" name="expiry" pattern="(0[1-9]|1[0-2])\/([0-9]{2})" placeholder="MM/YY" required/>
  </div>
  <div style={{margin:"1rem"}}>
    <label style={{display:"block"}} for="cvv">CVV:</label>
   
    <input type="tel" id="cvv" name="cvv" pattern="[0-9]{3}" required/>
  </div>

     
       
        
        <button className='btn btn-secondary' type="submit">Pay</button>
      </form>
      </div>)
     }
    </div>
  );

};

export default Checkout;