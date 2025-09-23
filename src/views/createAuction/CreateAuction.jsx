import React, { useState } from 'react'
import CustomInput from '../common/CustomInput'
import { useFormik } from 'formik'
import { Button, Col, Form, Row } from 'reactstrap'
import { auctionFormikInitialValues, auctionFormikValidationSchema } from '../../utils/formikValidations'
import { VscLaw } from 'react-icons/vsc'
import CustomDropdown from '../common/CustomDropdown'
import CustomDatePicker from '../common/CustomDatePicker'

function CreateAuction() {

  // const [selectedOption, setSelectedOption] = useState(null);


  const handleSubmit = (values) => {
    console.log("values", values)
  }

  const auctionFormik = useFormik({
    initialValues: auctionFormikInitialValues,
    validationSchema: auctionFormikValidationSchema,
    onSubmit: handleSubmit
  })
  console.log("formik error", auctionFormik.errors)
  return (
    <>
      <Row>
        <Col md={"3"} ></Col>
        <Col md="6" >
          <Form onSubmit={auctionFormik.handleSubmit} >
            <CustomInput name={"itemName"} lable={"Product Name"} value={auctionFormik.values.itemName} onChange={auctionFormik.handleChange} onBlur={auctionFormik.handleBlur} error={auctionFormik.touched.itemName && auctionFormik.errors.itemName} />

            <CustomInput name={"description"} lable={"Description"} value={auctionFormik.values.description} onChange={auctionFormik.handleChange} onBlur={auctionFormik.handleBlur} error={auctionFormik.touched.description && auctionFormik.errors.description} />

            <CustomInput name={"basePrice"} lable={"Base price"} value={auctionFormik.values.basePrice} onChange={auctionFormik.handleChange} onBlur={auctionFormik.handleBlur} error={auctionFormik.touched.basePrice && auctionFormik.errors.basePrice} />

            <CustomDropdown label="select category"
              onChange={(selectedOption) => auctionFormik.setFieldValue("category_id", selectedOption?.value || "")
              }
              value={
                {
                  value: auctionFormik.values.category_id,
                  label: auctionFormik.values.category_id
                }
              }
              name='category'
            />

            <CustomDatePicker label={"Start Date"} formik={auctionFormik} name="startDate" />

             <CustomDatePicker label={"End Date"} formik={auctionFormik} name="endDate" />

            <Button type='submit'>Submit</Button>
          </Form>
        </Col>
        <Col md="6" ></Col>
      </Row>
    </>
  )
}

export default CreateAuction