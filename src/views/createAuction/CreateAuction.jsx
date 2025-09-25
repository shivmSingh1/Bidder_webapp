import React, { useRef, useState } from 'react'
import CustomInput from '../common/CustomInput'
import { useFormik } from 'formik'
import { Button, Col, Form, Row } from 'reactstrap'
import { auctionFormikInitialValues, auctionFormikValidationSchema } from '../../utils/formikValidations'
import { CgDanger } from "react-icons/cg";
import CustomDropdown from '../common/CustomDropdown'
import CustomDatePicker from '../common/CustomDatePicker'
import CommonTextEditor from '../common/CommonTextEditor'
import { MdOutlineUploadFile } from "react-icons/md";
import { toast } from 'react-toastify'

function CreateAuction() {

  // const [selectedOption, setSelectedOption] = useState(null);

  const fileRef = useRef()

  const handleSubmit = (values) => {
    console.log("values", values)
  }

  const handleFileRef=()=>{
    fileRef?.current?.click()
  }

  const handleFileChange=(e)=>{
        const files = Array.from(e.target.files);  // FileList -> Array
        console.log("files", files);

        const validFileTypes= ["image/png","image/jpeg","image.jpg"]

        files.forEach((file)=>{
          if(!validFileTypes.includes(file?.type)){
            return toast.error(`${file.name} is invalid type`)
          }
        })
        files.forEach((file)=>{
          if(file.size > 5*1024*1024){
            return toast.error(`${file.name} is too large`)
          }
        })

        auctionFormik.setFieldValue("images", files);
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

            {/* <CustomInput name={"description"} lable={"Description"} value={auctionFormik.values.description} onChange={auctionFormik.handleChange} onBlur={auctionFormik.handleBlur} error={auctionFormik.touched.description && auctionFormik.errors.description} /> */}

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

             <CommonTextEditor label={"Description"} name={"description"} formik={auctionFormik} />

             <div  className='d-flex gap-3' >
              <div >
                  <div className='p-4 border border-primary d-inline-flex flex-column align-items-center ' onClick={handleFileRef} >
                        <MdOutlineUploadFile size={30} />
                        <input type="file" multiple accept='.png,.jpg,.jpeg' hidden ref={fileRef} onChange={handleFileChange} />
                  </div>
                  <div className='d-flex flex-column' >
                    <small>Max size:25 mb</small>
                    <small>JPG PNG only</small>
                  </div>
              </div>
              <div>
                    <div className='p-4 border border-danger d-inline-flex flex-column align-items-center ' onClick={handleFileRef} >
                        <CgDanger size={30} />
                  </div>
                  <div className='d-flex flex-column' >
                    <small>XYZ Name</small>
                    <small>25 mb</small>
                  </div>
              </div>
             </div>

            <Button type='submit'>Submit</Button>
          </Form>
        </Col>
        <Col md="6" ></Col>
      </Row>
    </>
  )
}

export default CreateAuction