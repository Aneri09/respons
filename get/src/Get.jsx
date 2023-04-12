import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Get() {
  let [add, setAdd] = useState(1);

  let [data, setData] = useState([]);

  let adde = () => {
    setAdd(add + 1);
  };

  let sube = () => {
    if (add == 1) {
      return setAdd(add + 1);
    }
    setAdd(add - 1);
  };

  useEffect(() => {
    gets();
  }, [add]);

  let gets = async () => {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${add}`
    );
    let req = await res.json();
    console.log(req.data);
    setData(req.data);
  };

  return (
    <div>
        <SimpleGrid minChildWidth='300px' spacing='40px' margin={"50px"}>
        {data.map((e) => {
          return (
            <div>
             <Box bg='white'padding={"10px"} border={"1px solid white"} backgroundColor={"black"} className="box">
                {" "}
                <img src={e.image} /><br/>
                <h1>name:{e.name}</h1><br/>
                <h1>Type:{e.type}</h1><br/>
                <h1>number_of_votes:{e.number_of_votes}</h1>
                </Box>
            </div>
          );
        })}
     </SimpleGrid>
     <button onClick={adde}>Add</button>
     <button onClick={sube}>Sub</button>
    </div>
  );
}

export default Get;
