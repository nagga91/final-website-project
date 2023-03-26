import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_offers, my_offers } from '../redux/Action/Offer_act'

function Offer() {
    const dispatch=useDispatch()

  useEffect(() => {
    dispatch(get_offers())
  }, [dispatch])

  const offers=useSelector((state)=>state.Offersreducer.offers)
  console.log(offers)
  return (
    <div>
      {offers.map((e)=>
    <h1>{e.title}</h1>
    )}
    </div>
  )
}

export default Offer
