import React from 'react'
import dynamic from "next/dynamic"
import { useSelector } from 'react-redux'


function PlaceOrderd() {
    const placeOrderArray = useSelector((state) => state.placeOrderName.placeOrderArray)


    const postToBackend = async () => {
        const response = await fetch("/api/order", {
            method: "POST",
            body: JSON.stringify({placeOrderArray}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    }

  return (
    <div>
        <dvi>placeorder array</dvi>
    {placeOrderArray && placeOrderArray.map((items) => (
          
      <div key={items.username}>
       <div>{items.username}</div>
       <div>nnnnnnnnnnnnnn</div>
       <div>{items.productsInfo}</div>
    </div>
      
    ))}

<button onClick={postToBackend}>cccccc</button>

      </div>
  )
}



export default dynamic(() => Promise.resolve(PlaceOrderd), { ssr: false });
