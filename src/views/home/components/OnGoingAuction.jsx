import React from 'react'
import AuctionCard from './AuctionCard'
import { Col, Row } from 'reactstrap'

function OnGoingAuction() {
    const Auctions =["test","test",'test']
    return (
        <>
            <div className='bg-primary p-4' >
                <h2 className='text-center' >On Going Auction</h2>
            </div>
            <div className='p-4' >
                 <Row>
               {
                Auctions.map((auction,index)=>(
                 <Col key={index}>
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