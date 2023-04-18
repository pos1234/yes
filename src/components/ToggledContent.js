import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Collapse} from 'react-bootstrap'
import {KeyUp,KeyDown} from '../Constants/icons'
const ToggledContent = (props) => {

    //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(false)
    const [Key,setKey] = useState(false)
    const [open, setOpen] = useState(false);
    return (
      <>
         <Button id="ToggledButton"
        onClick={() => {setOpen(!open);setKey(!Key)}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.btnText}
            <span className="toggle-button-spacer">
              {Key ? (<KeyUp/>) : (<KeyDown/>)}
            </span>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p className="toggled-paragraph">{props.paragraph}</p>
        </div>
      </Collapse>
      </>
    )
  }
  export default ToggledContent