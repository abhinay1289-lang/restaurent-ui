import { Button, Input, InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useNavigate from "../../common/useNavigate";
import { login as loginApi } from "../../service/securityservice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import globalObject from "../../common/global-variables";

const Login = () => {
  const [worker, setWorker] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [navigate, redirect] = useNavigate();
  const [hide, setHide] = useState(true);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const login = (values: any) => {
    loginApi(values)
      .then((resp) => {
        console.log(values.username === resp.data.emailId);
        if (
          values.username === resp.data.emailId &&
          values.password === resp.data.password
        ) {
          setHide(true);
          globalObject.userObject = resp.data;
          navigate(
            [
              {
                label: "Menucard",
                link: "/",
              },
            ],
            true
          );
        } else {
          setHide(false);
          globalObject.userObject = null;
        }
      })
      .catch((_err) => {
        setHide(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="new-login">
      <form
        className="loginform"
        onSubmit={formik.handleSubmit}
        onChange={() => setHide(true)}
      >
        <h1 className="restaurent-name">ANUSHA FAMILY RESTAURENT</h1>
        <h3>{worker === true ? "WORKER  " : "OWNER  "}LOGIN</h3>

        <InputLabel className="Username" style={{ color: "cyan" }}>
          UserName
        </InputLabel>
        <TextField
          className="textfield"
          placeholder="Enter Your Username"
          id="username"
          name="username"
          style={{ marginBottom: "10px" }}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="err-msg">{formik.errors.username}</div>
        ) : null}

        <InputLabel className="Username" style={{ color: "cyan" }}>
          password
        </InputLabel>
        <Input
          type="password"
          className="textfield"
          placeholder="Enter Your password"
          id="password"
          name="password"
          style={{ marginBottom: "10px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="err-msg">{formik.errors.password}</div>
        ) : null}

        <span style={{ color: "red" }} hidden={hide}>
          Invalid Username or Password
        </span>
        <Button
          style={{ backgroundColor: "#000089", marginBottom: "15px" }}
          type="submit"
        >
          Log In
        </Button>

        {worker === true ? (
          <span
            style={{
              cursor: "pointer",
              fontFamily: "Ambit",
              textDecorationLine: "underline",
            }}
            onClick={() => setWorker(false)}
          >
            <p>owner login...?</p>
          </span>
        ) : (
          <span
            style={{
              cursor: "pointer",
              fontFamily: "Ambit",
              textDecorationLine: "underline",
            }}
            onClick={() => setWorker(true)}
          >
            <p>worker login...?</p>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
