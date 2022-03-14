import React, { useEffect, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Input from "../../components/InputFiled/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CustomSelect from "../../components/select/Select";
import Grid from "@mui/material/Grid";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "../../components/Button/Button";
import { BlockContext } from '../../Util/ListProvider';
import authfetch from '../../Util/authfetch';

export default function CreateUser(props) {
  const { editId, setEditId } = props;
  const { BlockState } = useContext(BlockContext);
  const [app, setApp] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [access, setAccess] = useState([]);
  const [department, setDepartment] = useState([]);
  const [group, setGroup] = useState([]);
  const [accessData, setAccessData] = React.useState([]);
  const [values, setValues] = useState({ firstname: "", lastname: "", email: "", mobile_no: "", username: "", password: "", user_department_id: "", user_group_id: "" });
  const handleChange = (event) => {
    console.log("on change");
  };
  const departmentOptions = [
    { text: "PHP dev", val: "phpdev" },
    { text: "Java dev", val: "Javadev" },
    { text: "React dev", val: "Reactdev" },
    { text: "Angular dev", val: "Angulardev" },
  ];

  const handleGroup = (val) => {
    authfetch(`/api/group/details?id=${val}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem("token")
      }
    }).then((result) => {
      if (!!result && !!result.ok) {
        result.json().then(
          (payload) => {
            setAccessData(payload.group_access);
          },
          (err) => {
            console.log("err");
          }
        );
      } else {
        console.log("err");
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const getAppName = (val) => {
    const name = app.filter(elem => elem.val == val);
    return name.length > 0 ? name[0].text : "";
  }
  const getWorkflowName = (val) => {
    const name = workflow.filter(elem => elem.val == val);
    return name.length > 0 ? name[0].text : "";
  }

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

  const savedata = () => {
    const payload = { ...values, group_access: accessData };
    console.log("payload", payload);
    authfetch('/api/users/create', {
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
          setEditId(null);
          props.handelClose();
          props.requery();
          //window.location.href = "/user";
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

  const updatedata = () => {
    const payload = { ...values, id: editId, group_access: accessData };
    console.log("payload", payload);
    authfetch('/api/users/update', {
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
          setEditId(null);
          props.handelClose();
          props.requery();
          //window.location.href = "/user";
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
      setApp(BlockState.app.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setWorkflow(BlockState.workflow.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setAccess(BlockState.access.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setDepartment(BlockState.department.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      setGroup(BlockState.group.map((elem) => { return { "text": elem.name, "val": elem.id } }));
      if (editId !== null) {
        authfetch(`/api/users/details?id=${editId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("token")
          }
        }).then((result) => {
          console.log("result", result);
          if (!!result && !!result.ok) {
            result.json().then(
              (editDetails) => {
                setValues({ ...values, firstname: editDetails.firstname, lastname: editDetails.lastname, email: editDetails.email, mobile_no: editDetails.mobile_no, username: "", password: "", user_department_id: editDetails.user_department_id, user_group_id: editDetails.user_group_id });
                setAccessData(editDetails.group_access);
              },
              (err) => {
                console.log("err");
              }
            );
          } else {
            console.log("err");
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
    console.log("editId", editId);
  }, [BlockState]);

  return (
    <>
      <Box sx={{ m: 3, mb: 1, mt: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <small>Add</small>
            <h5 style={{ color: "var(--bs-purple)" }}>New User</h5>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="upload picture"
              onClick={() => { setEditId(null); props.handelClose(); }}
              component="span"
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="form"
        sx={{
          m: 3,
          mb: 1,
          mt: 0,
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="firstName">
            First Name
          </InputLabel>
          <Input
            size="samll"
            name="firstName"
            placeholder="Enter the first name"
            defaultValue=""
            id="firstName"
            value={values.firstname}
            onChange={(e) => setValues({ ...values, firstname: e.target.value })}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="lastName">
            Last Name
          </InputLabel>
          <Input
            size="samll"
            name="lastName"
            placeholder="Enter the last name"
            defaultValue=""
            value={values.lastname}
            id="lastName"
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="email">
            Email
          </InputLabel>
          <Input
            size="samll"
            name="email"
            placeholder="Enter the email id"
            defaultValue=""
            value={values.email}
            id="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="contactNo">
            Contact
          </InputLabel>
          <Input
            size="samll"
            name="contactNo"
            placeholder="+91"
            defaultValue=""
            value={values.mobile_no}
            id="contactNo"
            onChange={(e) => setValues({ ...values, mobile_no: e.target.value })}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="department">
            Department
          </InputLabel>
          <CustomSelect
            id="department"
            fullWidth
            size="small"
            legend="false"
            placeholder={"Enter the value"}
            onChange={(e) => setValues({ ...values, user_department_id: e.target.value })}
            optionsVlaue={department}
            defaultValue=""
            value={values.user_department_id}
            variant="outlined"
          ></CustomSelect>
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="group">
            Groups
          </InputLabel>
          <CustomSelect
            id="group"
            fullWidth
            size="small"
            legend="false"
            placeholder={"Enter the value"}
            onChange={(event) => { handleGroup(event.target.value); setValues({ ...values, user_group_id: event.target.value }) }}
            optionsVlaue={group}
            defaultValue=""
            value={values.user_group_id}
            variant="outlined"
          ></CustomSelect>
        </FormControl>
      </Box>

      <Box sx={{ ml: 3, mr: 3, fontSize: ".9rem" }}>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">APP</th>
                <th scope="col">WORKFLOW</th>
                <th scope="col">ACCESS</th>
              </tr>
            </thead>
            <tbody>
              {accessData.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{getAppName(elem.appId)}</td>
                    <td>{getWorkflowName(elem.workflowId)}</td>
                    <td>
                      <FormControl variant="standard">
                        <CustomSelect
                          style={{ width: 120 }}
                          id="department"
                          size="small"
                          legend="false"
                          placeholder={"Enter the value"}
                          onChange={(event) => handleAccess(event, index, 'accessId')}
                          optionsVlaue={access}
                          defaultValue=""
                          value={Number(elem.accessId)}
                          variant="outlined"
                        ></CustomSelect>
                      </FormControl>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Box>

      <Box
        sx={{
          p: 2,
          background: "var(--bs-gray-200)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Grid container direction="row" justifyContent="end">
          <Button
            className="btn-small"
            buttonInnerText="Done"
            buttonWidth="100px"
            onClick={() => editId !== null ? updatedata() : savedata()}
          ></Button>
        </Grid>
      </Box>
    </>
  );
}
