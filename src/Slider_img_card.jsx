import React from 'react'

const Slider_img_card = ({longPoster}) => {
  return (

<div className="carousel-item  " data-bs-interval="5000">
        <img src={longPoster} className="d-block w-100 rounded-4" width={"95%"} height={"650px"} />
      </div>
          )
}

export default Slider_img_card