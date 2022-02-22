import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  smallTile: {
    height: "290px",
    width: "290px",
    backgroundColor: "#F7B49B",
    textAlign: "center",
    cursor: "pointer",
    fontSize: 150,
  },
  largeTile: {
    height: "580px",
    width: "580px",
    backgroundColor: "#F7B49B",
    textAlign: "center",
    cursor: "pointer",
    fontSize: 300,
  },
  value: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    float: "right",
    margin: 0,
    zIndex: 2,
    position: "relative",
  },
  add: {
    display: "flex",
    height: "100%",
  },
});

const Tile = (props) => {
  const classes = useStyles(props);
  const [zoomTile, setZoomTile] = useState(false);

  return (
    <div
      className={zoomTile ? classes.largeTile : classes.smallTile}
      style={{ backgroundColor: props.value ? "" : "#B8F7BA" }}
    >
      {props.value && (
        <IconButton
          className={classes.close}
          color="primary"
          aria-label="close-tile"
          component="span"
          onClick={() => props.onCloseClick()}
        >
          <CloseIcon />
        </IconButton>
      )}
      {props.value && (
        <div className={classes.value} onClick={() => setZoomTile(!zoomTile)}>
          {props.value}
        </div>
      )}
      {!props.value && (
        <IconButton
          className={classes.add}
          aria-label="close-tile"
          component="span"
          onClick={() => props.onAddClick()}
        >
          <AddIcon style={{ fontSize: 150 }} />
        </IconButton>
      )}
    </div>
  );
};

export default Tile;
