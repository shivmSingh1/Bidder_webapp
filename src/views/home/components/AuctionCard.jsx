import React from 'react'
import { Badge, Card, CardBody, CardText } from 'reactstrap'
import { getTimeDef } from '../../../utils/commonFunctions'
import { useNavigate } from 'react-router-dom'

function AuctionCard({auction}) {
    // console.log("name",auction)
    const navigate = useNavigate()
    const handleCardClick = ()=>{
        navigate(`/auction-details/${auction?.id}`)
    }
  return (
      <div>
          <Card className="p-2" onClick={handleCardClick} >
              <div className="position-relative">
                  <img src="/sunset.jpg" width={"100%"} alt="" />
                  <Badge className="position-absolute top-0 end-0 bg-danger text-black p-2 m-3">
                      {auction?.auctionCategory?.name}
                  </Badge>
              </div>
              <CardBody>
                  <div className="card-text">
                      <span>{auction?.itemName}</span>
                      <div className="d-flex justify-content-between">
                          <div>
                              <span>Rs.{auction?.basePrice}</span>
                              <span className="ms-2">2 bids</span>
                          </div>
                          <span>{auction?.creator?.firstname+" "+auction?.creator?.lastName}</span>
                      </div>
                      <div>Time left: {getTimeDef(auction?.endDate)}</div>
                  </div>
              </CardBody>
          </Card>
      </div>
  )
}

export default AuctionCard