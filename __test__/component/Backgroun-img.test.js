import React from "react";
import { render, screen } from '@testing-library/react';
//import Header from "../../components/Header";
import BackgroundImg from "../../components/Background-img"
import '@testing-library/jest-dom';


describe("background-img", () => {
    render(<BackgroundImg />)
    it("display text", () => {
        const displayText = screen.getByText("Life is short, make it sweet")
        expect(displayText).toBeInTheDocument()
    })

    it("display correctlly", () => {
        const element = screen.getByTestId('custom-element')
        expect(element).toBeInTheDocument()
    })
})