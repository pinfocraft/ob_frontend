import * as React from "react";
import AppSidebar from "../../components/AppSidebar/AppSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CustomSelect from "../../components/select/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Input from "../../components/InputFiled/Input";
import AddRemoveButton from "../../components/AddRemoveButton/AddRemoveButton";
export default function BoqUserGroup() {

  const IntilaAccessData = [
    { id: "1", app: "phpdev", workflow: "Javadev", access: "Angulardev" },
    { id: "2", app: "", workflow: "", access: "" },
    { id: "3", app: "", workflow: "", access: "" },
  ];

  const [accessData, setAccessData] = React.useState(IntilaAccessData);

  const handleChange = (event) => {
    console.log("on change");
  };

  const departmentOptions = [
    { text: "PHP dev", val: "phpdev" },
    { text: "Java dev", val: "Javadev" },
    { text: "React dev", val: "Reactdev" },
    { text: "Angular dev", val: "Angulardev" },
  ];

  const addAccssData = (item) => {
    const newData = {
      id: btoa(Math.random()).substring(0, 12),
      app: "",
      workflow: "",
      access: "",
    };
    setAccessData([...accessData, newData]);
  };

  const minusAccssData = (removeItem) => {
    const filterData = accessData.filter((item) => item.id != removeItem.id);
    setAccessData(filterData);
  };
 
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
                            id="department"
                            fullWidth
                            size="small"
                            legend="false"
                            placeholder={"Enter the value"}
                            onChange={handleChange}
                            optionsVlaue={departmentOptions}
                            defaultValue=""
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
                            fullWidth
                            size="small"
                            legend="false"
                            placeholder={"Enter the value"}
                            onChange={handleChange}
                            optionsVlaue={departmentOptions}
                            defaultValue=""
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
                            defaultValue=""
                            id="userGroupName"
                            onChange={handleChange}
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
                                onChange={handleChange}
                                optionsVlaue={departmentOptions}
                                defaultValue={item.app}
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
                                onChange={handleChange}
                                optionsVlaue={departmentOptions}
                                defaultValue={item.workflow}
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
                                onChange={handleChange}
                                optionsVlaue={departmentOptions}
                                defaultValue={item.access}
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
