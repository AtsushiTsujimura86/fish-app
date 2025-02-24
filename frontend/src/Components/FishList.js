import React, { useState, useEffect } from "react";
import Fish from "./Fish";
import useFish from "./useFish";
import API_URL from "../config";

function FishList() {
    const [fishCnt, setFishCnt] = useState(0)
    // const [fishList, addFish] = useFish()
    const [fishList, setFishList] = useFish([])
    // console.log("Fetching from:", API_URL + "/hello");
    // console.log(API_URL)
    // useEffect(() => {
    //     //fishリストのフェッチ(GETリクエスト)
    //     const fetchData = async() => {
    //         try{
    //             const response = await fetch(API_URL + "/fish")
    //             console.log("response: ", response)
    //             if(!response.ok){
    //                 throw new Error(`HTTP error! Status: ${response.status}`)
    //             }
    //             const result = await response.json() //オブジェクトの配列
    //             console.log("result: ", result)
    //             setFishList(result)
    //         } catch(err){
    //             console.log("error!: ", err.message)    
    //         }finally{

    //         }
    //     }
    //     fetchData()
    // }, [])

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