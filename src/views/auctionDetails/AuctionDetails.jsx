import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { getAuctionDetailsById } from '../../redux/slices/auctionSlice'

function AuctionDetails() {
  const {AuctionDetails} = useSelector((state)=>state.auction)
  const dispatch = useDispatch()
  const {id}=useParams();
  useEffect(()=>{
    dispatch(getAuctionDetailsById(id))
  },[])

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
        </Col>
      </Row>
    </div>
  )
}

export default AuctionDetails