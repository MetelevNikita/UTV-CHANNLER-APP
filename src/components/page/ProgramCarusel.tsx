import { FC } from 'react'

// carusel

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//

import { Col, Row } from 'react-bootstrap'

// img

import sliderImg from './../../asset/page/caruselIMG.png'


const caruselArr = [

  {
    img: sliderImg,
    label: '1'
  },

  {
    img: sliderImg,
    label: '2'
  },

  {
    img: sliderImg,
    label: '3'
  },

  {
    img: sliderImg,
    label: '4'
  },
]

const ProgramCarusel = () => {
  return (
    <Row className='mt-4 mb-4'>
      <Col>

      <Carousel autoPlay showArrows showStatus={false} showIndicators={false} showThumbs={false} stopOnHover={false}>

        {caruselArr.map((item) => {
          return <img src={item.img} alt="" />


        })}

      </Carousel>



      </Col>
    </Row>
  )
}

export default ProgramCarusel
