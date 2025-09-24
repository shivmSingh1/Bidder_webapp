
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Label } from 'reactstrap';

function CommonTextEditor({formik,name,label,theme="snow",readOnly=false,placeholder="write something here",error=null,}) {
  
  return (
    <>
      {
        label && (
          <Label htmlFor={name} className='mb-1' >{label}</Label>
        )
      }
      <ReactQuill
      className='mb-2'
        theme="snow"
        value={formik.values[name]}
        onChange={(value) => {
          formik.setFieldValue(name, value);
        }}
        name={name}
        readOnly={readOnly}
        placeholder={placeholder}
      />
      {
        error && (
          <p className='text-danger' >{error}</p>
        )
      }
    </>
  )
}

export default CommonTextEditor