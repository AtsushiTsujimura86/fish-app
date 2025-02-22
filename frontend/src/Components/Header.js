import React, { useState, useEffect } from "react";
function Header({handleShowModal}) {
  return (
    <div style={{height:"80px"}}>
        <div className="row bg-primary h-100">
            <h1 className="col-3 text-white  fw-bold  mb-0 text-start" >Night Fish</h1>
            <input type="button" value="魚を増やす" className="btn btn-dark btn-sm col fw-bold" onClick={handleShowModal}/>
        </div>
    </div>
    
  );
}

export default Header;