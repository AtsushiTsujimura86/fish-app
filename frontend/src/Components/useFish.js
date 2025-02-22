//カスタムフック
import React, { useState, useEffect } from "react";

function useFish() {
    const [fishList, setFishList] = useState([]) 
    const addFish=(name, head_color, body_color, fin_color) => {
        setFishList([...fishList, {id:Date.now(), name, head_color, body_color, fin_color}])
    }
  return [fishList, addFish]
}

export default useFish;