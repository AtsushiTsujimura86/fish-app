import React, { useState, useEffect } from "react";

function Fish({id, name, head_color, body_color, fin_color}) {
    const fish_head_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + head_color,
        borderBottom: "40px solid transparent"
    }

    
    const fish_body_style = {
        width:"200px",
        height:"80px",
        backgroundColor:body_color
    }
    
    const fish_fin_style = {
        width: 0,
        height: 0,
        borderTop: "40px solid transparent",
        borderRight: "80px solid " + fin_color,
        borderBottom: "40px solid transparent"
    }
  return (
    <div>
        <div style={{display:"flex"}}>
            <div style={fish_head_style}></div>
            <div style={fish_body_style}></div>
            <div style={fish_fin_style} ></div>
        </div>
        <p className="text-white">{name}</p>
        <p className="text-white">{id}</p>
        <input type="button" className="btn btn-primary" value="play"/>
    </div>
  );
}

export default Fish;

