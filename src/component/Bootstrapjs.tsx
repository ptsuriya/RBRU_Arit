"use client"
import { useEffect } from "react"

import React from 'react'

function Bootstrapjs() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap')
    })
  return (
    <div>Bootstrapjs</div>
  )
}

export default Bootstrapjs