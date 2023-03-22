import React from "react";
import { render, screen } from '@testing-library/react';
//import Header from "../../components/Header";
import BackgroundImg from "../../components/Background-img"
import '@testing-library/jest-dom';


describe("background-img", () => {
   
    

  
    it("display correctlly", () => {
        render(<BackgroundImg />)
        const element = screen.getByTestId('custom-element')
        expect(element).toBeInTheDocument()
    })

    it("display text", () => {
        render(<BackgroundImg />)
        const textDisplay = screen.getByText('Life is short, make it sweet')
        expect(textDisplay).toBeInTheDocument()
    })
})