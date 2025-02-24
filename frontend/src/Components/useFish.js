//カスタムフック
import React, { useState, useEffect } from "react";
import API_URL from "../config";

function useFish() {
    const [fishList, setFishList] = useState([]) 

    useEffect(() => {  //初回レンダリング時、fishList更新時に実行
      const fetchFishList= async() => {
        try{
          const response = await fetch(API_URL + "/fish")
          if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const result = await response.json()
          setFishList(result)
        }catch(err){
          console.log(err.message)
        }
      }
      fetchFishList() 
    },[fishList])
    
    const addFish = async(newFish) => {
        try{
          const response = await fetch(API_URL + "/fish", {
            method:"POST",
            headers:{"Content-type" : "application/json",},
            body:JSON.stringify(newFish)
          });
          if(!response.ok){
            throw new Error("HTTP error! Status: " + response.status)
          }
          const addFish = await response.json() //データベースに追加された魚のオブジェクト
          setFishList([...fishList, addFish])
        }catch(err){
          console.log(err.message)
        }
    }
    return [fishList, addFish]
  }
  
  export default useFish;