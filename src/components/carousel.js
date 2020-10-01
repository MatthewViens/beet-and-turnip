import React, { useState } from 'react';
const reviews = [
  {
    review: `If you've been in Alkinoos Taverna, you've seen - and tasted - what keeps customers
            coming back for more. Perfect materials and freshly baked food, delicous Baklavas,
            Koulourakia, and gourmet coffees make it hard to resist!`,
    author: "Patricia Madrazo"  
  },
  {
    review: `If you've been in Alkinoos Taverna, you've seen - and tasted - what keeps customers
            coming back for more. Perfect materials and freshly baked food, delicous Baklavas,
            Koulourakia, and gourmet coffees make it hard to resist!`,
    author: "Maxime Gonalons"
  },
  {
    review: `If you've been in Alkinoos Taverna, you've seen - and tasted - what keeps customers
            coming back for more. Perfect materials and freshly baked food, delicous Baklavas,
            Koulourakia, and gourmet coffees make it hard to resist!`,
    author: "Marek Jankulovski"
  },
  {
    review: `If you've been in Alkinoos Taverna, you've seen - and tasted - what keeps customers
            coming back for more. Perfect materials and freshly baked food, delicous Baklavas
            Koulourakia, and gourmet coffees make it hard to resist!`,
    author: "Martha Santos" 
  }
]

const Carousel = () => {
  const [index, setIndex] = useState(0)

  const length = reviews.length - 1
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
  }
  const review = reviews[index]

  return (
    <div>
      <div>
        <span onClick={() => handlePrevious()}> prev </span>
        <p>{review.review}</p>
        <h3>{review.author}</h3>
        <span onClick={() => handleNext()}> next </span> 
      </div>
    </div>
  )
}

export default Carousel