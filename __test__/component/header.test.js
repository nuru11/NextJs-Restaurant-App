import React from "react";
import { render, screen } from '@testing-library/react';
//import Header from "../../components/Header";
import Test from "../../components/Test"
import '@testing-library/jest-dom';


    it("files render correctlly", () => {
        render(<Test />);
        const backgroundRendering = screen.getByText("check")
        expect(backgroundRendering).toBeInTheDocument()
    })

