import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "../Button/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SvgIcon from '@mui/material/SvgIcon';
import {ReactComponent as SortIcon} from '../../assets/svg/sort.svg';
import {ReactComponent as FilterIcon} from '../../assets/svg/filter.svg';
import {ReactComponent as DownloadIcon} from '../../assets/svg/download.svg';
export default function DataFilter() {
  const initoptions = ["SHOW", "10", "15", "ORDER", "DESE", "ASC"];

  const [options, setOptions] = React.useState(initoptions);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filter, setFilter] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [filterStatus, setFilterStatus] = React.useState("");
  const open = Boolean(anchorEl);
  const filterOpen = Boolean(filter);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilter(null);
  };

  const handleClickFilterListItem = (event) => {
    setFilter(event.currentTarget);
  };
  const handleFiltageerStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleDownloadReport =()=>{
    console.log("file download")
  }
  return (
    <div className="data_grid_tools">
      <div>
        <IconButton>
          <SvgIcon component={DownloadIcon} inheritViewBox sx={{ fontSize:28, color:"var(--bs-gray-600)" }} />
        </IconButton>
        <IconButton onClick={handleClickFilterListItem}>
          <SvgIcon component={FilterIcon} inheritViewBox sx={{ fontSize:30, opacity:".6" }} />
        </IconButton>
        <IconButton onClick={handleClickListItem}>
          <SvgIcon component={SortIcon} inheritViewBox sx={{ fontSize: 35, opacity:".6" }} />
        </IconButton>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              className="dataGridSortMenu"
              key={option}
              disabled={index === 0 || index === 3}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          id="filter-menu"
          className="dataGridFilterMenu"
          anchorEl={filter}
          open={filterOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "filter Data",
            role: "Item List",
          }}
        >
          <MenuItem className="dataGridFilterMenuItem">
            <div className="filterHead">Filter Users</div>
            <div className="filterBody">
              <div className="col-6">
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Department"
                  variant="outlined"
                />
               
              </div>
              <div className="col-5">
                <FormControl>
                  <TextField
                    size="small"
                    label="Status"
                    sx={{ width: "110px" }}
                    select
                    value={filterStatus}
                    onChange={handleFiltageerStatus}
                  >
                    <MenuItem value={"active"}>Active</MenuItem>
                    <MenuItem value={"suspend"}>Suspend</MenuItem>
                  </TextField>
                </FormControl>
              </div>
            </div>
            <div className="filterFooter">
              <Button
                className="btn-small"
                buttonWidth="100%"
                buttonInnerText="FILTER"
                size="small"
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
