
import { Button } from 'reactstrap'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { testFetchData } from './redux/slices/testSlice';
import Signup from './views/auth/Signup';
import SignIn from './views/auth/SignIn';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './views/auth/ForgotPassword';
import VerifyAccount from './views/auth/VerifyAccount';
import ResetPassword from './views/auth/ResetPassword';
import Header from './views/header/Header';
import Home from './views/home/Home';
import { getTimeDef } from './utils/commonFunctions';
import AuctionDetails from './views/auctionDetails/AuctionDetails';
import CreateAuction from './views/createAuction/CreateAuction';

function App() {
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.test)

  // useEffect(() => {
  //   dispatch(testFetchData())
  // }, [])

    // useEffect(() => {
    getTimeDef("2028-08-22 10:00:08")
  // }, [])

  // useEffect(() => {
  //   console.log("loading", loading)
  //   console.log("data", data)
  //   console.log("error", error)
  // }, [data, loading, error])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/auth/signin" element={<SignIn />} ></Route>
        <Route path="/auth/signup" element={<Signup />} ></Route>
        <Route path="/auth/forgot-password" element={<ForgotPassword />} ></Route>
        <Route path="/auth/verify-account/:token" element={<VerifyAccount />} ></Route>
        <Route path="/auth/reset-password/:token" element={<ResetPassword />} ></Route>
        <Route path='/auction-details/:id' element={<AuctionDetails/>} ></Route>
        <Route path='/auction/create' element={<CreateAuction/>} ></Route>
      </Routes>
    </>
  )
}

export default App
