import React, { useState, useRef, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button  from "react-bootstrap/Button";
import useFish from "./useFish";

function CreateFishModal({showModal, handleShowModal}) {
    const [fishList, addFish] = useFish()
    const [newFishName, setNewFishName] = useState("");
    const colorRef = useRef(null)
    const colorTargetIDRef = useRef(null)
    const [headColor, setHeadColor] = useState("#efefef")
    const [bodyColor, setBodyColor] = useState("#efefef")
    const [finColor, setFinColor] = useState("#efefef")

    const fish_head_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + headColor,
        borderBottom: "40px solid transparent"
    }

    
    const fish_body_style = {
        width:"200px",
        height:"80px",
        backgroundColor:bodyColor
    }
    
    const fish_fin_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + finColor,
        borderBottom: "40px solid transparent"
    }


    const handleClick=(e) => {
        console.log(colorRef.current)
        colorRef.current.click()
        colorTargetIDRef.current = e.target.id
    }

    const handleAddFish=() => {
        addFish(newFishName, headColor, bodyColor, finColor)
        setNewFishName("")
        setHeadColor("#efefef")
        setBodyColor("#efefef")
        setFinColor("#efefef")
        handleShowModal()
    }

    const handleColorPicker=(e) => {
        let color_target = colorTargetIDRef.current
        console.log(color_target)
        console.log(`color_target: ${color_target}, type: ${typeof color_target}`);
        switch(color_target){
            case "fish_head":
                setHeadColor(e.target.value)
                console.log(headColor)
                break
            case "fish_body":
                setBodyColor(e.target.value)
                break
            case "fish_fin":
                setFinColor(e.target.value)
                break
            default:
                console.log("default")
                break 
        }
    }

  return (
        <div>
            <Modal show={showModal} onHide={handleShowModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={colorRef} type="color" className="form-control form-control-color" defaultValue="#0000ff" style={{display:"none"}} onChange={handleColorPicker}/>
                    <div style={{display:"flex"}}>
                        <div onClick={handleClick} style={fish_head_style} id="fish_head" ></div>
                        <div onClick={handleClick} style={fish_body_style} id="fish_body"></div>
                        <div onClick={handleClick} style={fish_fin_style} id="fish_fin"></div>
                    </div> 
                    <input type="text" className="form-control" value={newFishName} placeholder="名前を入力"  onChange={(e) => {setNewFishName(e.target.value)}} autoFocus/>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShowModal}>
                    Close
                </Button>
                <input type="button" className="btn btn-primary" value="追加" onClick={handleAddFish} />
                </Modal.Footer>
            </Modal>
    </div>
  );
}

export default CreateFishModal
;