import React from 'react'
import { Badge, Card, CardBody, CardText } from 'reactstrap'

function AuctionCard({category}) {
    console.log("name",category)
  return (
      <div>
          <Card className="p-2">
              <div className="position-relative">
                  <img src="/sunset.jpg" width={"100%"} alt="" />
                  <Badge className="position-absolute top-0 end-0 bg-danger text-black p-2">
                      {homeAuctionList?.auctionCategory?.name}
                  </Badge>
              </div>
              <CardBody>
                  <div className="card-text">
                      <span>Bid Name</span>
                      <div className="d-flex justify-content-between">
                          <div>
                              <span>Rs.400</span>
                              <span className="ms-2">2 bids</span>
                          </div>
                          <span>Created By</span>
                      </div>
                      <div>Time left 2hr 2 days</div>
                  </div>
              </CardBody>
          </Card>
      </div>
  )
}

export default AuctionCard