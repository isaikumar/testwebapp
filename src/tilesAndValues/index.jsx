import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tile from "./tile";

const TilesAndValues = () => {
  const [randomValues, setRandomValues] = useState([]);
  const [generatedValues, setGeneratedValues] = useState("");

  const addValue = () => {
    let value = Math.floor(Math.random() * 9) + 1;
    setRandomValues((prevValues) => [...prevValues, value]);
    setGeneratedValues(generatedValues + value.toString());
  };

  const deleteValue = (index) => {
    var array = [...randomValues]; // make a separate copy of the array

    if (index !== -1) {
      array.splice(index, 1);
      setRandomValues(array);
    }
  };

  randomValues.map((num) => {
    return setInterval(function () {
      let value = generatedValues + num.toString();
      // setGeneratedValues(value);
      console.log(value);
    }, num * 1000);
  });

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let counter = count;
  //   const interval = setInterval(() => {
  //     if (counter >= randomValues.length) {
  //       clearInterval(interval);
  //     } else {
  //       console.log(randomValues[counter]);
  //       setCount((count) => count + 1);
  //       counter++;
  //     }
  //   }, randomValues[counter] * 1000);
  //   return () => clearInterval(interval);
  // }, [count, randomValues]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
        margin: "auto",
        padding: "0 50px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>TEST APPLICATION</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
        <TextField fullWidth id="generated-values" value={generatedValues} />
      </div>

      <Grid container justifyContent="center" spacing={0.5}>
        {randomValues.map((value, index) => (
          <Grid key={index + "_" + value} item>
            <Tile
              key={index}
              value={value}
              onCloseClick={() => deleteValue(index)}
            />
          </Grid>
        ))}
        <Grid item>
          <Tile onAddClick={addValue} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TilesAndValues;
