import React from 'react'  
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
import { cartReducer } from '../reducer/cartReducers'
    
    const PlaceOrderScreen = () => {
        const cart = useSelector(state => state.cart)

        return (
            <>
              <CheckoutSteps step1 step2 step3 step4 />
               <Row>
                <Col md={8}>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>
                          <h2>Shipping</h2>
                          <p>
                              <strong>Address:</strong>
                              {cart.shippingAddress.address}, 
                              {cart.shippingAddress.city},{' '}
                              {cart.shippingAddress.postalCode}{' '}
                              {cart.shippingAddress.country}{' '}
                          </p>
                      </ListGroup.Item>

                      <ListGroup.Item>
                          <h2>Payment Method</h2>
                          <strong>Method: </strong>
                          {cart.paymentMethod}
                      </ListGroup.Item>

                  </ListGroup>
                </Col>
               </Row>  
            </>
        )
    }
    
    export default PlaceOrderScreen
    