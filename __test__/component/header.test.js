import React from "react";
import {render, screen} from "@testing-library/react"
var expect = require('expect');
import { Header } from "../../components/Header";
import "@testing-library/jest-dom"


    it("files render correctlly", () => {
        render(<Header />);
        const backgroundRendering = screen.getByTitle("background")
        expect(backgroundRendering).toBeInTheDocument()
    })

