import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { signupInitialValues, signupValidationSchema } from "../../utils/formikValidations";

function Signup() {
  const handleSignupSubmit = (values) => {
    console.log("formik", values);
  };

  const signupFormik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidationSchema,
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
        {signupFormik.touched.firstName && signupFormik.errors.firstName && <p style={{color:"red"}} >{signupFormik.errors.firstName}</p>}

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
        {signupFormik.touched.lastName && signupFormik.errors.lastName && <p style={{color:"red"}} >{signupFormik.errors.lastName}</p>}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Lastname"
            value={signupFormik.values.email}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>
        {signupFormik.touched.email && signupFormik.errors.email && <p style={{color:"red"}} >{signupFormik.errors.email}</p>}

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
        {signupFormik.touched.password && signupFormik.errors.password && <p style={{color:"red"}} >{signupFormik.errors.password}</p>}

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
        {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword && <p style={{color:"red"}} >{signupFormik.errors.confirmPassword}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
