import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updatePassword, verifyAccount } from '../../redux/slices/authSlice';
import { useFormik } from 'formik';
import { resetPasswordInitialValues, resetPasswordValidationSchema } from '../../utils/formikValidations';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function ResetPassword() {
     const [isHide, setIsHide] = useState(false)
  const dispatch = useDispatch()

  const handleResetSubmit = (values) => {
    const payload = {
      password:values.password,
      confirmPassword:values.confirmPassword,
    }
    dispatch(updatePassword(payload))
  };

  const resetFormik = useFormik ({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: handleResetSubmit,
  });

  return (
    <div>
        <Form className="mt-5" onSubmit={resetFormik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              type={isHide ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={resetFormik.values.password}
              onChange={resetFormik.handleChange}
              onBlur={resetFormik.handleBlur}
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
        {resetFormik.touched.password && resetFormik.errors.password && <p style={{ color: "red" }} >{resetFormik.errors.password}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={resetFormik.values.confirmPassword}
            onChange={resetFormik.handleChange}
            onBlur={resetFormik.handleBlur}
          />
        </Form.Group>
        {resetFormik.touched.confirmPassword && resetFormik.errors.confirmPassword && <p style={{ color: "red" }} >{resetFormik.errors.confirmPassword}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ResetPassword