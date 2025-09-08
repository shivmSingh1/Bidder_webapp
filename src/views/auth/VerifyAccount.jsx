import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { verifyAccount } from '../../redux/slices/authSlice'

function VerifyAccount() {
    const {token} = useParams()
    console.log("token",token)
    const dispatch = useDispatch()
    const {isLoading,isAccountVerified} = useSelector((state)=>state.auth)

    useEffect(()=>{
        dispatch(verifyAccount(token))
    },[token])

  return (
    <div>
       {
        isLoading && <h1>loading...</h1>
       }
       {
        isAccountVerified && <h1>Your account is verified now</h1>
       }
    </div>
  )
}

export default VerifyAccount