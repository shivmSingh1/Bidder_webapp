import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

function Signup() {
  const handleSignupSubmit = (values) => {
    console.log("formik", values);
  };

  const signupFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({}) ,
    onSubmit: handleSignupSubmit,
  });

  return (
    <>
      <Form onSubmit={signupFormik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter Firstname"
            value={signupFormik.values.firstName}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Lastname"
             value={signupFormik.values.lastName}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
             value={signupFormik.values.password}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
              value={signupFormik.values.confirmPassword}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
