import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker";
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { Label } from 'reactstrap';

function CustomDatePicker({label,name,range="false",minDate= new Date,maxDate,formik}) {

  const handleOnChange = (date) => {
    if (!date) return;
    if (Array.isArray(date)) {
      formik.setFieldValue(
        name,
        date.map((d) => (d ? d.toDate().toISOString() : null))
      );
    } else {
      formik.setFieldValue(name, date.toDate().toISOString());
    }
  };

  return (
    <div className='d-flex flex-column mb-2'>
    {
        label && <Label>{label}</Label>
          }
          <DatePicker
              value={
                  formik.values[name]
                      ? Array.isArray(formik.values[name])
                          ? formik.values[name].map((d) => new Date(d))
                          : new Date(formik.values[name])
                      : null
              }
              format='YYYY-MM-DD HH:MM A'
              range={range}
              minDate={minDate}
              maxDate={maxDate}
              name={name}
              onChange={handleOnChange}
              plugins={[
                  <TimePicker position='right' key={"time"} />
              ]}
          />
    </div>
  )
}

export default CustomDatePicker