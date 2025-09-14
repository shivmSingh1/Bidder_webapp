import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import ConfirmationModal from '../common/ConfirmationModal'
import { toast } from 'react-toastify'
import { logout } from '../../redux/slices/authSlice'

function Header() {
  const { isLogin, isLoading, isError } = useSelector((state) => state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const toggle = () => {
    setIsModalOpen((prev) => !prev)
  }

  const handleLogout = () => {
    dispatch(logout())
    toast.success("Logout successfully !")
  }

  return (
    <div>
      <div className='d-flex justify-content-between' >
        <div className='ms-3 me-3 d-flex' >
          <div>
            <h3>LOGO</h3>
          </div>
          <ul className='d-flex gap-5' >
            <li>Home</li>
            <li>Auctions</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <ul className='me-3 d-flex gap-5' >
          <li>Notification</li>
          <li>Profile</li>
          {
            !isLogin ? (
              <li><Link to="/auth/signin" ><button>{isLoading ? <Spinner /> : "Signin"}</button></Link></li>
            ) : (
              <button onClick={toggle} >{isLoading ? <Spinner /> : "Logout"}</button>
            )
          }
        </ul>
      </div>
      <ConfirmationModal isOpen={isModalOpen} toggle={toggle} acceptBtnText={"Yes"} cancleBtnText={"No"} headertext={"Confirm logout"} bodyMessage={"Are You sure you want to logout ?"} handleAccept={handleLogout} />
    </div>
  )
}

export default Header