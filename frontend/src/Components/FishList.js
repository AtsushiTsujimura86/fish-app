import React, { useState, useEffect } from "react";
import Fish from "./Fish";
import useFish from "./useFish";
import API_URL from "../config";

function FishList() {
    const [fishList, setFishList] = useFish([])

    return (
        <div className="row pt-4">
            {fishList.map((value, idx) => {
                return (
                    <div className="col-4 alert alert-danger">
                        <Fish id={value.id} name = {value.name} head_color={value.head_color} body_color={value.body_color} fin_color={value.fin_color}/>
                    </div>
                )
            })}
        </div>
    );      
}

export default FishList;