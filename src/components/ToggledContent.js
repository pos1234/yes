import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
const ToggledContent = (props) => {

    //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(false)
    return (
      <>
        <Button id="ToggledButton"
              onClick={() => setToggle(!toggle)} 
              >
            {props.btnText}
        </Button>
        {toggle && (
            <p className="">{props.paragraph}</p>
        )}
      </>
    )
  }
  export default ToggledContent