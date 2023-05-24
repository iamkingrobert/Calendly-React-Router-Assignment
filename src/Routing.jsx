import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Individual from "./components/Individual";
import Team from "./components/Team";
import Enterprise from './components/Enterprise';

export default function Routing() {
  return (
    <Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/individual" element={<Individual />} />
			<Route path="/team" element={<Team />} />
			<Route path="/enterprise" element={<Enterprise />} />
		</Routes>
  )
}
