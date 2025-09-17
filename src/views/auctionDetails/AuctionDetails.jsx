import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Card, Col, Row } from 'reactstrap'
import { getAuctionDetailsById, placeBidApi } from '../../redux/slices/auctionSlice'
import CustomModal from '../common/CustomModal'
import CustomInput from '../common/CustomInput'
import { toast } from 'react-toastify'

function AuctionDetails() {
  const {AuctionDetails} = useSelector((state)=>state.auction)
  const [isOpen,setIsOpen] = useState(false)
  const [bidValue,setBidValue]= useState(0)
  const dispatch = useDispatch()
  const {id}=useParams();
  useEffect(()=>{
    dispatch(getAuctionDetailsById(id))
  },[])

  const toggle=()=>{
    setIsOpen((prev)=>!prev)
  }

  const handleBidInputChange=(e)=>{
   setBidValue(e?.target?.value)
  }

  const handleBtnSubmit=async()=>{
    const payload={
      id,
      bidAmount:bidValue
    }
  try {
    const response = await dispatch(placeBidApi(payload)).unwrap();
    // agar API success ho
    toast.success(response.message || "Your bid is placed successfully!");
    setIsOpen(()=>false)
  } catch (err) {
    // agar API reject ho
    toast.error(err.message || err || "Something went wrong!");
    setIsOpen(()=>false)
  }
  }

  useEffect(()=>{console.log("auction details",AuctionDetails)},[AuctionDetails])
  return (
    <div className='mt-4' >
      <Row>
        <Col md={6} >
        </Col>
        <Col className='d-flex flex-column gap-2' md={6} >
         <strong>{AuctionDetails[0]?.itemName}</strong>
         <small>Time left 4d 20h (Sat 2:39pm)</small>
         <h3>RS. {AuctionDetails[0]?.basePrice}</h3>
         <p>{AuctionDetails[0]?.description}</p>
         <Card className="p-4" >
          <strong className='text-danger' >Seller Information</strong>
          <p>First Name : <small>{AuctionDetails[0]?.creator?.firstName}</small></p>
          <p>Last Name : <small>{AuctionDetails[0]?.creator?.lastname}</small></p>
          <p>Emal : <small>{AuctionDetails[0]?.creator?.email}</small></p>
         </Card>
         <Button onClick={()=>setIsOpen(true)} >Place bid</Button>
        </Col>
      </Row>
        <CustomModal isOpen={isOpen} toggle={toggle} title='place your bid' btnName={"submit"} btnSubmit={handleBtnSubmit} >
        <p>Time left 16d 19h (web,3:30pm)</p>
        <div className='d-flex text-center gap-2' >
          <Button onClick={()=>setBidValue(250)} >Bid INR:250</Button>
          <Button onClick={()=>setBidValue(500)} >Bid INR:500</Button>
          <Button onClick={()=>setBidValue(1000)} >Bid INR:1000</Button>
        </div>
        <CustomInput lable={"Your max bid"} value={bidValue} name={"bidAmount"} onChange={handleBidInputChange} />
      </CustomModal>
    </div>
  )
}

export default AuctionDetails