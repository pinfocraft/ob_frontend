import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const CustomSelectStyle = styled(Select)(({ theme, legend }) => ({
  borderRadius: "2px",
  "label + &": {
    marginTop: theme.spacing(3.5),
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    lineHeight: "90%",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    fontSize: 16,
    padding: "5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  "& legend": {
    display: legend === "true" ? "" : "none",
  },
}));

export default function CustomSelect({
  legend,
  defaultValue,
  optionsVlaue,
  ...others
}) {
  return (
    <CustomSelectStyle legend={legend} defaultValue={defaultValue} {...others}>
      {optionsVlaue.map((item, key) => {
        return (
          <MenuItem
            selected={item.val === defaultValue}
            key={key}
            value={item.val}
          >
            {item.text}
          </MenuItem>
        );
      })}
    </CustomSelectStyle>
  );
}
