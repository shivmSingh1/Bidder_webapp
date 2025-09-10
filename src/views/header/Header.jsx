import React from 'react'

function Header() {
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
              <li><button>Signin</button></li>
          </ul>
         </div>
    </div>
  )
}

export default Header