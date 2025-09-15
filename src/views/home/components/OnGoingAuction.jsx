import React, { useEffect } from 'react'
import AuctionCard from './AuctionCard'
import { Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeAuctionList } from '../../../redux/slices/auctionSlice'

function OnGoingAuction() {
    const dispatch = useDispatch()
    const {homeAuctionList} = useSelector((state)=>state.auction)
    //  useEffect(()=>{
    //     console.log("shfnsndfns",homeAuctionList)
    //  },[homeAuctionList])
    // console.log("home",homeAuctionList)
    useEffect(()=>{
        dispatch(getHomeAuctionList())
    },[])
    return (
        <>
            <div className='bg-primary p-4' >
                <h2 className='text-center' >On Going Auction</h2>
            </div>
            <div className='p-4' >
                 <Row>
               {
                homeAuctionList?.map((auction,index)=>(
                 <Col lg={2} md={4} sm={6} xs={12} key={index} className='mt-3' >
                   <AuctionCard auction={auction} />
                 </Col>
                ))
               }
           </Row>
            </div>
        </>
    )
}

export default OnGoingAuction