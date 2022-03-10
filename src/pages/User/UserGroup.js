import React, { useContext, useEffect, useState } from "react";
import AppSidebar from "../../components/AppSidebar/AppSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CustomSelect from "../../components/select/Select";
import Grid from "@mui/material/Grid";
import Button from "../../components/Button/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Input from "../../components/InputFiled/Input";
import AddRemoveButton from "../../components/AddRemoveButton/AddRemoveButton";
import { BlockContext } from '../../Util/ListProvider';
import { UserContext } from '../../Util/UserProvider';
import authfetch from '../../Util/authfetch';

export default function BoqUserGroup() {
  const { BlockState } = useContext(BlockContext);
  const { UserState } = useContext(UserContext);
  const [app, setApp] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [access, setAccess] = useState([]);
  const [department, setDepartment] = useState([]);
  const [role, setRole] = useState([]);
  const [values, setValues] = useState({ role_id: 0, user_department_id: 0, group_name: "" })
  const IntilaAccessData = [
    { id: "1", appId: "", workflowId: "", accessId: "" },
  ];

  const [accessData, setAccessData] = React.useState(IntilaAccessData);

  const handleAccess = (event, index, accessType) => {
    setAccessData([...accessData].map((object, key) => {
      if (key === index) {
        return {
          ...object,
          [accessType]: event.target.value
        }
      } else return object
    }))
  };

  const addAccssData = (item) => {
    const newData = {
      id: btoa(Math.random()).substring(0, 12),
      appId: "",
      workflowId: "",
      accessId: "",
    };
    setAccessData([...accessData, newData]);
  };

  const minusAccssData = (removeItem) => {
    const filterData = accessData.filter((item) => item.id != removeItem.id);
    setAccessData(filterData);
  };

  const savedata = () => {
    const payload = { ...values, group_access: accessData };
    console.log("payload", payload);
    authfetch('/api/group/create', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem("token")
      }
    }).then((result) => {
      if (!!result && !!result.ok) {
        console.log(result);
        if (result.ok) {
          window.location.href = "/user";
        } else {
          console.log("err");
        }
      } else {
        console.log("err");
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    if (Object.keys(BlockState.department).length > 0) {
      console.log(BlockState);
      setApp(BlockState.app.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setWorkflow(BlockState.workflow.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setAccess(BlockState.access.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setRole(BlockState.roles.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setDepartment(BlockState.department.map((elem) => { return { "text": elem.name, "val": elem.id } }));
    }
  }, [BlockState]);

  return (
    <>
      <Topbar />
      <AppSidebar />
      <div className="mainContent">
        <div className="boq-listing-content">
          <div className="row">
            <div className="col-12">
              <Breadcrumb PageName="User Access" />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <MainContentHeader
                heading="User Group"
                subHeading="Create User Groups"
                leadId=" "
                customerId=" "
              />
            </div>
          </div>
          <div className="row" style={{ marginBottom: "100px" }}>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title py-3 text-violet">
                    User group configuration
                  </h5>
                  <Box component="form" sx={{ my: 1 }}>
                    <Grid container>
                      <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                        <FormControl fullWidth variant="standard">
                          <InputLabel shrink htmlFor="department">
                            Role Code
                          </InputLabel>
                          <CustomSelect
                            name="role"
                            id="department"
                            fullWidth
                            size="small"
                            legend="false"
                            placeholder={"Enter the value"}
                            onChange={(event) => setValues({ ...values, role_id: event.target.value })}
                            optionsVlaue={role}
                            defaultValue={values.role_id}
                            variant="outlined"
                          ></CustomSelect>
                        </FormControl>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                        <FormControl fullWidth variant="standard">
                          <InputLabel shrink htmlFor="department">
                            Department
                          </InputLabel>
                          <CustomSelect
                            id="department"
                            name="department"
                            fullWidth
                            size="small"
                            legend="false"
                            placeholder={"Enter the value"}
                            onChange={(event) => setValues({ ...values, user_department_id: event.target.value })}
                            optionsVlaue={department}
                            defaultValue={values.user_department_id}
                            variant="outlined"
                          ></CustomSelect>
                        </FormControl>
                      </Grid>

                      <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                        <FormControl fullWidth variant="standard">
                          <InputLabel shrink htmlFor="userGroupName">
                            User Group Name
                          </InputLabel>
                          <Input
                            size="samll"
                            name="userGroupName"
                            placeholder="Enter the User Group Name"
                            defaultValue={values.group_name}
                            id="userGroupName"
                            onChange={(event) => setValues({ ...values, group_name: event.target.value })}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider
                    variant="fullWidth"
                    sx={{ my: 3, borderColor: "var(--bs-gray-500)" }}
                  ></Divider>
                  <h5 className="my-4 text-violet">Add Access</h5>
                  <Box component="form">
                    {accessData.map((item, index) => {
                      return (
                        <Grid
                          key={item.id}
                          container
                          direction="row"
                          sx={{ my: 2 }}
                        >
                          <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                            <FormControl fullWidth variant="standard">
                              <InputLabel shrink htmlFor="app">
                                App
                              </InputLabel>
                              <CustomSelect
                                id="app"
                                fullWidth
                                size="small"
                                legend="false"
                                placeholder={"Enter the value"}
                                onChange={(event) => handleAccess(event, index, 'appId')}
                                optionsVlaue={app}
                                defaultValue={item.appId}
                                variant="outlined"
                              ></CustomSelect>
                            </FormControl>
                          </Grid>
                          <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                            <FormControl fullWidth variant="standard">
                              <InputLabel shrink htmlFor="Workflow">
                                Workflow
                              </InputLabel>
                              <CustomSelect
                                id="Workflow"
                                fullWidth
                                size="small"
                                legend="false"
                                placeholder={"Enter the value"}
                                onChange={(event) => handleAccess(event, index, 'workflowId')}
                                optionsVlaue={workflow}
                                defaultValue={item.workflowId}
                                variant="outlined"
                              ></CustomSelect>
                            </FormControl>
                          </Grid>
                          <Grid item md={3} xs={3} sm={3} sx={{ pr: 3 }}>
                            <FormControl fullWidth variant="standard">
                              <InputLabel shrink htmlFor="access">
                                Access
                              </InputLabel>
                              <CustomSelect
                                id="access"
                                fullWidth
                                size="small"
                                legend="false"
                                placeholder={"Enter the value"}
                                onChange={(event) => handleAccess(event, index, 'accessId')}
                                optionsVlaue={access}
                                defaultValue={item.accessId}
                                variant="outlined"
                              ></CustomSelect>
                            </FormControl>
                          </Grid>
                          <Grid item md={3} xs={3} sm={3} sx={{ mt: 3 }}>
                            <AddRemoveButton
                              item={item}
                              index={index}
                              accessData={accessData}
                              addItem={addAccssData}
                              removeItem={minusAccssData}
                            />
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Box>
                  <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col align-items-center justify-content-end d-flex">
                      <Button
                        className="btn-small"
                        buttonInnerText="Save"
                        buttonWidth="150px"
                        onClick={() => savedata()}
                      ></Button>
                    </div>
                  </div>
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
}
