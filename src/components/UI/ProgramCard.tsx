import { FC } from 'react'

// css

import './ProgramCard.css'

//

import { Col, Row } from 'react-bootstrap'

//

import programCard from './../../asset/page/lsitprogram/IMG PROGRAMM.png'

//


import { programCardType } from '../../types/types'


interface Card {

  card: programCardType

}


const ProgramCard: FC<Card> = ({ card }) => {

  return (

    <Col>

        <div className="card-container">

          <img className='card-img' src={card.imgSmall} alt="" />

          <div className="card-title">{card.title}</div>
          <div className="card-subtitle">{card.subtitle}</div>

        </div>

    </Col>



  )

}

export default ProgramCard
