import React from 'react'
import products from '../../data/productData.json'

export default function Homescreen() {
  return (
    <div>
      <h1>{products.length}</h1>
    </div>
  )
}
