import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

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

const Carousel = (props) => {
  const [index, setIndex] = useState(0)

  const length = reviews.length - 1
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
  }
  const review = reviews[index]

  const containerStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "stretch",
  }

  const contentStyles = {
    width: "70%",
    display: "flex",
    flexDirection: "column"
  }

  const arrowStyles = {
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px"
  }

  // const chevron = {
  //   height: "100%"
  // }


  return (
    <div>
      <h2>{props.title}</h2>
      <div style={containerStyles}>
        <div style={arrowStyles} onClick={() => handlePrevious()}>
          <FontAwesomeIcon icon={faChevronLeft} size="3x" />
        </div>
        <div style={contentStyles}>
          <p>{review.review}</p>
          <h3>- {review.author}</h3>
        </div>
        <div style={arrowStyles} onClick={() => handleNext()}>
          <FontAwesomeIcon icon={faChevronRight} size="3x"  />
        </div> 
      </div>
    </div>
  )
}

export default Carousel