import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import TheNavbar from "./Navbar"

export default function Dashboard() {

  return (
    <>
<div>
  <TheNavbar/>
</div>
      <div className="w-100 text-center mt-2">
        <h1>DASHBOARD</h1>
      </div>
    </>
  )
}