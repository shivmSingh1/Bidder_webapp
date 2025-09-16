import React from 'react'
import { Input, Label } from 'reactstrap'

function CustomInput({lable,value,name,onChange,onKeyUp,error,type,className=""}) {
  return (
    <div>
        {
            lable && <Label for={name}>{lable}</Label>
        }
        <Input type={type} value={value} name={name} onChange={onChange} onKeyUp={onKeyUp} className={className} ></Input>
        {
            error && <p className='text-danger' >{error}</p>
        }
    </div>
  )
}

export default CustomInput