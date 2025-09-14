import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInInitialValues, signInValidationSchema } from "../../utils/formikValidations";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

function SignIn() {
    const [isHide, setIsHide] = useState(false)
    const { isLogin } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        console.log("isLogin", isLogin)
    }, [isLogin])
    const handleSignInSubmit = async (values) => {
        console.log("print")
        try {
            const response = await dispatch(signInUser(values)).unwrap()
            if (response.status === 200) {
                localStorage.setItem("isLogin", isLogin)
            }
            toast.success("you are logged in")
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error(error);
        }
    };

    const signInFormik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInValidationSchema,
        onSubmit: handleSignInSubmit,
    });

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between" >
                <div>
                    <Form className="mt-5" onSubmit={signInFormik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter Lastname"
                                value={signInFormik.values.email}
                                onChange={signInFormik.handleChange}
                                onBlur={signInFormik.handleBlur}
                            />
                        </Form.Group>
                        {signInFormik.touched.email && signInFormik.errors.email && <p style={{ color: "red" }} >{signInFormik.errors.email}</p>}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="position-relative">
                                <Form.Control
                                    type={isHide ? "password" : "text"}
                                    name="password"
                                    placeholder="Password"
                                    value={signInFormik.values.password}
                                    onChange={signInFormik.handleChange}
                                    onBlur={signInFormik.handleBlur}
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
                        {signInFormik.touched.password && signInFormik.errors.password && <p style={{ color: "red" }} >{signInFormik.errors.password}</p>}
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
