import React, { useEffect } from "react";
import AppSidebar from "../../components/AppSidebar/AppSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Topbar from "../../components/Topbar/Topbar";
import "./BoqListing.css";
import DatagridUi from "../../components/Datagrid";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CreateUser from "./CreateUser";
import { getFirstCapitalLetter } from '../../Util/helper';
import { ServerAction } from '../../Util/ServerAction';

const BoqListing = () => {

  const [rows, setRows] = React.useState([]);
  const [createUserDrawer, setCreateUserDrawer] = React.useState(false);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const editUser = React.useCallback(
    (id) => () => {
      setRows((prevRows) => prevRows.map((row) => console.log(row)));
    },
    []
  );

  const columns = React.useMemo(
    () => [
      {
        field: "user",
        headerName: "USER",
        width: 225,
        description: "User name",
        renderCell: (params) => {
          return (
            <>
              <Avatar
                sx={{ height: '35px', width: '35px' }}
                style={{
                  border: `1px solid var(--color-violet)`,
                  background: "transparent",
                  color: "var(--color-violet)",
                  textTransform: "uppercase",
                }}
              >
                {getFirstCapitalLetter(`${params.row.firstname} ${params.row.lastname}`)}
              </Avatar>{" "}
              &nbsp; {params.row.user}
            </>
          );
        },
      },
      { field: "department", headerName: "DEPARTMENT", width: 180, description: "User department" },
      { field: "contact", headerName: "CONTACT NO", width: 180, description: "User contact No." },
      {
        field: "created",
        headerName: "CREATED ON",
        description: "User created on",
        width: 170,
      },
      {
        field: "status",
        headerName: "STATUS",
        description: "User status",
        width: 150,
      },
      {
        field: "actions",
        type: "actions",
        width: 150,
        headerName: "ACTION",
        description: "Actions",
        className: "dataGridlastcell",
        getActions: (params) => [
          <GridActionsCellItem
            icon={<ModeEditOutlineOutlinedIcon />}
            label="Edit"
            onClick={editUser(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, editUser]
  );

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
  };

  const handelRightDrawer = (event) => {
    /*if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }*/
    setCreateUserDrawer(!createUserDrawer);
  };

  const requery = () => {
    return ServerAction({
      endpoint: '/api/users/list',
      options: {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("token")
        }
      }
    }).then((result) => {
      console.log("result", result);
      result.map((elem) => {
        elem.user = `${elem.firstname} ${elem.lastname}`;
        elem.department = elem.user_department;
        elem.contact = elem.mobile_no;
        elem.created = "09-02-2022";
        elem.status = "Active";
        return elem;
      });
      setRows(result);
      return result;
    },
      (err) => {
        console.log(err);
        return err;
      }
    );
  }

  useEffect(() => {
    requery();
  }, []);

  return (
    <>
      <Topbar />
      <AppSidebar />
      <div className="mainContent">
        <div className="boq-listing-content">
          <div className="row">
            <div className="col-12">
              <Breadcrumb PageName="BOQ Listing" />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <MainContentHeader />
            </div>
            <div className="col align-items-center justify-content-end d-flex">
              <Button
                className="btn-small"
                buttonInnerText="Create user"
                buttonWidth="150px"
                onClick={handelRightDrawer}
              ></Button>
            </div>
          </div>

          <Drawer anchor={"right"} variant="temporary" open={createUserDrawer}>
            <Box sx={{ width: 450 }}>
              <CreateUser handelClose={handelRightDrawer} requery={requery} />
            </Box>
          </Drawer>

          <div className="row" style={{ marginBottom: "80px" }}>
            <div className="col-12">
              <div className="card">
                <div style={{ height: 500, width: "100%", padding: "15px" }}>
                  <DatagridUi
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                    options={options}
                    disableColumnMenu={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer  */}
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BoqListing;
