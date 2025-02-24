import React, { useState, useRef, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button  from "react-bootstrap/Button";
import useFish from "./useFish";

function CreateFishModal({showModal, handleShowModal}) {
    const [fishList, addFish] = useFish()
    const [newFish, setNewFish] = useState({
        name: "",
        headColor: "#efefef",
        bodyColor: "#efefef",
        finColor: "#efefef"
    });
    const colorRef = useRef(null)
    const colorTargetIDRef = useRef(null)
    const [headColor, setHeadColor] = useState("#efefef")
    const [bodyColor, setBodyColor] = useState("#efefef")
    const [finColor, setFinColor] = useState("#efefef")

    const fish_head_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + newFish.headColor,
        borderBottom: "40px solid transparent"
    }

    
    const fish_body_style = {
        width:"200px",
        height:"80px",
        backgroundColor:newFish.bodyColor
    }
    
    const fish_fin_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + newFish.finColor,
        borderBottom: "40px solid transparent"
    }


    const handleClick=(e) => {
        colorRef.current.click()
        colorTargetIDRef.current = e.target.id
    }

    const handleAddFish=() => {
        addFish(newFish)
        //ステートの初期化
        setNewFish({
            name:"",
            headColor: "#efefef",
            bodyColor: "#efefef",
            finColor: "#efefef"
        })
        handleShowModal()
    }

    const handleColorPicker=(e) => {
        let color_target = colorTargetIDRef.current
        switch(color_target){
            case "fish_head":
                setNewFish({...newFish, headColor: e.target.value})
                break
            case "fish_body":
                setNewFish({...newFish, bodyColor: e.target.value})
                break
            case "fish_fin":
                setNewFish({...newFish, finColor: e.target.value})
                break
            default:
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
                    <input type="text" className="form-control" value={newFish.name} placeholder="名前を入力"  onChange={(e) => {setNewFish({...newFish, name:e.target.value})}} />

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