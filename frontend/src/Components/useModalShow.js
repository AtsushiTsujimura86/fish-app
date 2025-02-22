import React, { useState, useEffect } from "react";

function useModalShow() {
  const [show, setShow] = useState(false)
  const handleShow=() => {
    setShow(!show)
  }
  return [show, handleShow]
}

export default useModalShow;