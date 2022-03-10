import * as React from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataToolbar from "./DataToolBar";
import DataGridSearch from "./DataGridSearch";
export function SortedDescendingIcon() {
  return <ExpandMoreIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ExpandLessIcon className="icon" />;
}

export default function DatagridUi(props) {
  const {
    rows,
    columns,
    pageSize,
    checkboxSelection,
    disableColumnMenu,
  } = props;
  const [searchText, setSearchText] = React.useState("");
  const [rowsData, setRows] = React.useState(rows);
  const [datePageSize, setPageSize] = React.useState(pageSize);
  function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  React.useEffect(() => {
    setRows(rowsData);
  }, [rowsData]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer className="data_grid_tools">
        <DataToolbar></DataToolbar>
      </GridToolbarContainer>
    );
  }
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rowsData.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={datePageSize}
      checkboxSelection={checkboxSelection}
      disableColumnMenu={disableColumnMenu}
      onPageSizeChange={(newPage) => setPageSize(newPage)}
      pagination
      components={{
        Toolbar: CustomToolbar,
        Searchbar: DataGridSearch,
        ColumnSortedDescendingIcon: SortedDescendingIcon,
        ColumnSortedAscendingIcon: SortedAscendingIcon,
      }}
      componentsProps={{
        Searchbar: {
          value: searchText,
          onChange: (event) => requestSearch(event.target.value),
          clearSearch: () => requestSearch(""),
        },
      }}
    />
  );
}
