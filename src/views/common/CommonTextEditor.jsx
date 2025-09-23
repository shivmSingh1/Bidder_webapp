
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

function CommonTextEditor({formik,name,label,theme="snow"}) {
  return (
    <>
   <ReactQuill 
   theme="snow" 
   value={formik.values.description} 
   onChange={setValue} 
   />;
    </>
  )
}

export default CommonTextEditor