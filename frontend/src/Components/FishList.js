import React, { useState, useEffect } from "react";
import Fish from "./Fish";
import useFish from "./useFish";
import API_URL from "../config";

function FishList() {
    const [fishCnt, setFishCnt] = useState(0)
    // const [fishList, addFish] = useFish()
    const [fishList, setFishList] = useState([])
    console.log("Fetching from:", API_URL + "/fish");
    console.log(API_URL)
    useEffect(() => {
        //fishリストのフェッチ(GETリクエスト)
        fetch(API_URL + "/fish")
        .then(response => response.text()) // JSONではなくテキストで取得
        .then(text => {
            console.log("API Response:", text); // レスポンスの内容を確認
            return JSON.parse(text); // JSONパースを試す
        })
        .then(data => setFishList(Array.isArray(data) ? data : []))
        .catch(error => console.error("Error fetching fish:", error));
    }, [])

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