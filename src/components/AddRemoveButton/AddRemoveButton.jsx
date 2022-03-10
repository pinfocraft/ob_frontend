import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";

export default function AddRemoveButton({
  item,
  index,
  accessData,
  addItem,
  removeItem,
}) {
  const addRemoveButton = (item, index) => {
    const dlength = accessData.length;
    const style = { "&:hover": { color: "var(--color-violet)" } };
    if (index === dlength - 1 && dlength > 1) {
      return (
        <>
          <IconButton
            sx={style}
            onClick={() => removeItem(item)}
            aria-label="Delete"
          >
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton sx={style} onClick={() => addItem(item)} aria-label="Add">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </>
      );
    }
    if (index === 0 && dlength === 1) {
      return (
        <IconButton sx={style} onClick={() => addItem(item)} aria-label="Add">
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      );
    }
    if ((index === 0 && dlength > 0) || (index > 0 && dlength > 0)) {
      return (
        <IconButton
          sx={style}
          onClick={() => removeItem(item)}
          aria-label="Delete"
        >
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      );
    }
  };

  return addRemoveButton(item, index);
}
