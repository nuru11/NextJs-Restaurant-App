import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Style from "../styles/Home.module.css"
import { useDispatch} from "react-redux"
import {checkoutInfo} from "../store/checkoutInfoSlice"
import {useSession} from "next-auth/react"


function Checkout() {
  const {data: session, status} = useSession()
  const route = useRouter()

  const [name, setName] = useState()
  const [email, setEmail] = useState("nuru@gmail.com")
  const [phone, setPhone] = useState("0966202667")
  const [address, setAddress] = useState("kolfe")
  const [time, setTime] = useState()
  const [howMany, setHowMany] = useState(5)
  const [homeRadio, setHomeRadio] = useState(true)
  const [restaurantRadio, setRestaurantRadio] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("telebirr")

  const dispatch = useDispatch()


  const checkoutInfoHandler = () => {
 
    dispatch(checkoutInfo({iid: 1, username: name, email, address, phone, howMany, time, homeRadio, restaurantRadio, paymentMethod}))

    {homeRadio && name && email && phone && address && route.push("/placeOrder")}
    {restaurantRadio && name && email && phone && howMany && time &&  route.push("placeOrder")}

  }


  const handlehomeRadio = () => {
    setHomeRadio(true)
    setRestaurantRadio(false)
  }

  const handleRestaurantRadio = () => {
    setHomeRadio(false)
    setRestaurantRadio(true)
  }

  return (
    <div className={Style.checkoutComponent}>
     
     <div className={Style.componentCheckoutForm} >
     <div className={Style.componentCheckoutFormTitle}>Checkout</div>
      <div>
        <div className={Style.checkoutComponentFormText}>name</div>
        <input
        placeholder='john smith'
         className={Style.checkoutComponentFormInput}
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <br />

      <label>
        <div className={Style.checkoutComponentFormText}>email</div>
        <input
        placeholder='example@gmail.com'
         className={Style.checkoutComponentFormInput}
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        <div className={Style.checkoutComponentFormText}>phone</div>
        <input
        placeholder='09 1212 1212'
         className={Style.checkoutComponentFormInput}
        type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <br />

      {homeRadio ? <label>
        <div className={Style.checkoutComponentFormText}>address</div>
        <input
        placeholder='addis ababa'
        className={Style.checkoutComponentFormInput}
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
         required/>
      </label>
        : 

        <label>
        <div className={Style.checkoutComponentFormText}>when do you want to book</div>
        <input
        className={Style.checkoutComponentFormInput}
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
         required/>
      </label>
      }

     {restaurantRadio && <br />}

      {restaurantRadio &&
         <label>
         <div className={Style.checkoutComponentFormText}>how many are you</div>
         <input
         className={Style.checkoutComponentFormInput}
           type="number" 
           value={howMany}
           onChange={(e) => setHowMany(e.target.value)}
          required/>
       </label>

      }

<br />


{homeRadio && <div className={Style.checkoutComponentFormRadioTitle}>payment method</div>}

{homeRadio && <div>
 <input id="telebirr" type="radio" name="payment" value="telebirr" checked onClick={() => setPaymentMethod("telebirr")}  />
  <lebel for="telebirr" className={Style.checkoutComponentFormRadioLebel} >telebirr</lebel>

 </div>}

{homeRadio && <div>
 <input id="onDelivery" type="radio" name="payment" value="onDelivery" onClick={() => setPaymentMethod("on delivery")}  />
  <lebel for="onDelivery" className={Style.checkoutComponentFormRadioLebel} >on delivery</lebel>

 </div>}

 {homeRadio && <div>
 <input id="mobileBanking" type="radio" name="payment" value="mobileBanking" onClick={() => setPaymentMethod("mobile banking")}   />
  <lebel for="mobileBanking" className={Style.checkoutComponentFormRadioLebel} >mobile banking</lebel>

 </div>}

     {homeRadio && <br />}

      <div className={Style.checkoutComponentFormRadioTitle}>where do you want to eat</div>

     <div>
     <input id="ho" type="radio" name="place" value="home" checked onClick={handlehomeRadio}/>
      <lebel for="ho" className={Style.checkoutComponentFormRadioLebel}>Home</lebel>
     
     </div>

    

     <div>
     <input id="res" type="radio" name="place" value="resutaurant" onClick={handleRestaurantRadio} />
      <lebel for="res" className={Style.checkoutComponentFormRadioLebel} >Restaurant</lebel>
    
     </div>

     <br />

   

      <button onClick={checkoutInfoHandler} className={Style.checkoutComponentFormButton}>continue</button>
    </div>
    </div>
  )
}

export default Checkout

  /*
  const [telebirr, setTelebirr] = useState(true)
  const [onDelivery, setOnDelivery] = useState(false)
  const [mobileBanking, setMobileBanking] = useState(false)

  const handleTelebirr = () => {
    setTelebirr(true)
    setOnDelivery(false)
    setMobileBanking(false)
  }

  const handleOnDelivery = () => {
    setTelebirr(false)
    setOnDeliver(true)
    setMobileBanking(false)
  }

  const handleMobileBanking = () => {
    setTelebirr(false)
    setOnDeliver(false)
    setMobileBanking(true)
  }
  */


  /*

   <div className={Style.checkoutComponent}>
     
     <form className={Style.componentCheckoutForm} >
     <div className={Style.componentCheckoutFormTitle}>Checkout</div>
      <div>
        <div className={Style.checkoutComponentFormText}>name</div>
        <input
        placeholder='john smith'
         className={Style.checkoutComponentFormInput}
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <br />

      <label>
        <div className={Style.checkoutComponentFormText}>email</div>
        <input
        placeholder='example@gmail.com'
         className={Style.checkoutComponentFormInput}
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        <div className={Style.checkoutComponentFormText}>phone</div>
        <input
        placeholder='09 1212 1212'
         className={Style.checkoutComponentFormInput}
        type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <br />

      {homeRadio ? <label>
        <div className={Style.checkoutComponentFormText}>address</div>
        <input
        placeholder='addis ababa'
        className={Style.checkoutComponentFormInput}
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
         required/>
      </label>
        : 

        <label>
        <div className={Style.checkoutComponentFormText}>when do you want to book</div>
        <input
        className={Style.checkoutComponentFormInput}
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
         required/>
      </label>
      }

     {restaurantRadio && <br />}

      {restaurantRadio &&
         <label>
         <div className={Style.checkoutComponentFormText}>how many are you</div>
         <input
         className={Style.checkoutComponentFormInput}
           type="number" 
           value={howMany}
           onChange={(e) => setHowMany(e.target.value)}
          required/>
       </label>

      }

<br />


{homeRadio && <div className={Style.checkoutComponentFormRadioTitle}>payment method</div>}

{homeRadio && <div>
 <input id="telebirr" type="radio" name="payment" value="telebirr" checked onClick={() => setPaymentMethod("telebirr")}  />
  <lebel for="telebirr" className={Style.checkoutComponentFormRadioLebel} >telebirr</lebel>

 </div>}

{homeRadio && <div>
 <input id="onDelivery" type="radio" name="payment" value="onDelivery" onClick={() => setPaymentMethod("on delivery")}  />
  <lebel for="onDelivery" className={Style.checkoutComponentFormRadioLebel} >on delivery</lebel>

 </div>}

 {homeRadio && <div>
 <input id="mobileBanking" type="radio" name="payment" value="mobileBanking" onClick={() => setPaymentMethod("mobile banking")}   />
  <lebel for="mobileBanking" className={Style.checkoutComponentFormRadioLebel} >mobile banking</lebel>

 </div>}

     {homeRadio && <br />}

      <div className={Style.checkoutComponentFormRadioTitle}>where do you want to eat</div>

     <div>
     <input id="ho" type="radio" name="place" value="home" checked onClick={handlehomeRadio}/>
      <lebel for="ho" className={Style.checkoutComponentFormRadioLebel}>Home</lebel>
     
     </div>

    

     <div>
     <input id="res" type="radio" name="place" value="resutaurant" onClick={handleRestaurantRadio} />
      <lebel for="res" className={Style.checkoutComponentFormRadioLebel} >Restaurant</lebel>
    
     </div>

     <br />

   

      <button onClick={checkoutInfoHandler} className={Style.checkoutComponentFormButton}>submit</button>
    </form>
    </div>

    */