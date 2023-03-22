import React from "react";
import { render, screen, waitFor, waitForElement } from '@testing-library/react';
import Review from "../../components/Review"
import '@testing-library/jest-dom';


describe("Review component", () => {
   
    

  
    it("title display correctlly", async () => {
        render(<Review />)
     //  const { getByText } = render(<Review />)
     /* act(() => {
        ReactDOM.render(<Review />, container);
      });*/

      //const title = screen.getByText('About Our Restaurant')
     
    //  expect(getByText('About Our Restaurant')).toBeInTheDocument()
  

    await waitFor(() => {
        const title = screen.getByTestId("ReviewTitle")       
        expect(title).toBeInTheDocument()  
        });

    
    })

   /* it("display text", () => {
        render(<BackgroundImg />)
        const textDisplay = screen.getByText('Life is short, make it sweet')
        expect(textDisplay).toBeInTheDocument()
    })*/
})