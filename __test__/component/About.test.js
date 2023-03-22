import React from "react";
import { render, screen } from '@testing-library/react';
import About from "../../components/About"
import '@testing-library/jest-dom';


describe("About component", () => {

    it("backgroundImg display correctlly", () => {
        render(<About />)
        const backgroundImg = screen.getByTestId('backgroundImg')
        expect(backgroundImg).toBeInTheDocument()
    })
  
    it("title display correctlly", () => {
        render(<About />)
        const title = screen.getByTestId('about-ourStory-title')
        expect(title).toBeInTheDocument()
    })

    it("story display correctlly", () => {
        render(<About />)
        const story = screen.getByTestId('ourStory-text')
        expect(story).toBeInTheDocument()
    })

  
})