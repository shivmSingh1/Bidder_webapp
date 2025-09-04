import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInInitialValues, signInValidationSchema } from "../../utils/formikValidations";
import { Link } from "react-router-dom";

function SignIn() {
    const [isHide, setIsHide] = useState(false)
    const handleSignInSubmit = (values) => {
        console.log("formik", values);
    };

    const signupFormik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInValidationSchema,
        onSubmit: handleSignInSubmit,
    });

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between" >
                <div>
                    <Form className="mt-5" onSubmit={signupFormik.handleSubmit}>
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
                        {signupFormik.touched.email && signupFormik.errors.email && <p style={{ color: "red" }} >{signupFormik.errors.email}</p>}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="position-relative">
                                <Form.Control
                                    type={isHide ? "password" : "text"}
                                    name="password"
                                    placeholder="Password"
                                    value={signupFormik.values.password}
                                    onChange={signupFormik.handleChange}
                                    onBlur={signupFormik.handleBlur}
                                />
                                <FaRegEyeSlash
                                    className={`position-absolute end-0 top-50 translate-middle-y me-2 ${isHide ? "d-block" : "d-none"}`}
                                    onClick={() => setIsHide(false)}
                                />

                                <FaRegEye
                                    className={`position-absolute end-0 top-50 translate-middle-y me-2 ${isHide ? "d-none" : "d-block"}`}
                                    onClick={() => setIsHide(true)}
                                />
                            </div>
                        </Form.Group>
                        {signupFormik.touched.password && signupFormik.errors.password && <p style={{ color: "red" }} >{signupFormik.errors.password}</p>}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    <p>dont remember your password ? <Link to="/auth/forgot-password" >Forgot password</Link> </p>
                    <p>dont have an account ? <Link to="/auth/signup" >Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
