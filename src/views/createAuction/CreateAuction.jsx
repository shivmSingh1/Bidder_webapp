import React from 'react'
import CustomInput from '../common/CustomInput'
import { useFormik } from 'formik'
import { Button, Form } from 'reactstrap'
import { auctionFormikInitialValues, auctionFormikValidationSchema } from '../../utils/formikValidations'
import { VscLaw } from 'react-icons/vsc'

function CreateAuction() {

    const handleSubmit=(values)=>{
        console.log("values",values)
    }

    const auctionFormik = useFormik({
        initialValues:auctionFormikInitialValues,
        validationSchema:auctionFormikValidationSchema,
        onSubmit:handleSubmit
    })
    console.log("formik error",auctionFormik.errors)
  return (
    <div>
       <Form onSubmit={auctionFormik.handleSubmit} >
         <CustomInput name={"itemName"} lable={"Product Name"} value={auctionFormik.values.itemName} onChange={auctionFormik.handleChange} onBlur={auctionFormik.handleBlur} error={auctionFormik.touched.itemName && auctionFormik.errors.itemName}  />

        <CustomInput name={"description"} lable={"Description"} value={auctionFormik.values.description} onChange={auctionFormik.handleChange}  onBlur={auctionFormik.handleBlur}  error={auctionFormik.touched.description && auctionFormik.errors.description}  />

        <CustomInput name={"basePrice"} lable={"Base price"} value={auctionFormik.values.basePrice} onChange={auctionFormik.handleChange}  onBlur={auctionFormik.handleBlur}  error={auctionFormik.touched.basePrice && auctionFormik.errors.basePrice}  />
        
        <Button type='submit' >Submit</Button>
       </Form>
    </div>
  )
}

export default CreateAuction