import React from 'react'
import { Link } from 'react-router-dom'
import { forgotPasswordInitialValue, forgotPasswordValidationSchema } from '../../utils/formikValidations';
import {  useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/slices/authSlice';

function ForgotPassword() {
    const dispatch = useDispatch()
      const handleForgotPasswordSubmit = async(values) => {
        try {
            await dispatch(forgotPassword(values)).unwrap()
            toast.success(response?.data?.message||"mail sent")
        } catch (error) {
            toast.error(error)
        }
      };
    
      const ForgotPasswordFormik = useFormik({
        initialValues: forgotPasswordInitialValue,
        validationSchema: forgotPasswordValidationSchema,
        onSubmit: handleForgotPasswordSubmit,
      });
    return (
        <div className='container' >
            <div className='d-flex align-items-center justify-content-between' >
                <div>
  <Form className="mt-5" onSubmit={ForgotPasswordFormik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter Lastname"
                                value={ForgotPasswordFormik.values.email}
                                onChange={ForgotPasswordFormik.handleChange}
                                onBlur={ForgotPasswordFormik.handleBlur}
                            />
                        </Form.Group>
                        {ForgotPasswordFormik.touched.email && ForgotPasswordFormik.errors.email && <p style={{ color: "red" }} >{ForgotPasswordFormik.errors.email}</p>}

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    <p>Remember password <Link to="/auth/signin" >Sign in</Link> </p>
                    <p>Dont have an account ? <Link to="/auth/signup" >Sign up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword