import { FC, useState } from 'react'

//

import { Row, Col } from 'react-bootstrap'

// router

import { useParams } from 'react-router-dom'

// components

import MyButton from '../UI/MyButton'

// redux

import { useAppSelector } from '../../types/reduxHook'

// type

import { programCardType } from '../../types/types'

interface ProgramCardOpen {
 card: programCardType
}



const ProgramOpenPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()
  const id = params.id

  const selector = useAppSelector(state => state.list.cards)
  console.log(selector)



  const listCard = selector.map((list) => {
      return list.data
    })

    const checkedCard : any = listCard.filter((card) => {
      if(card.titleEng === id) {
        return card
      }
    })





  if(selector.length < 1) {
    return <h2>loading</h2>
  }


  return (

    <Row className='mt-4'>
      <Col md={5} className='d-flex flex-column'>

        <Row>
          <Col><img style={{width: 494 + 'px'}} src={checkedCard[0].imgBig} alt="zxczxc" /></Col>
        </Row>

        <Row className='mt-4 d-flex justify-content-start align-items-center'>
          <Col md={6}><MyButton style={{width: 218 + 'px', height: 59 + 'px', borderRadius: 10 + 'px', border: 'none'}} title='трейлер' onClick={() => {''}}></MyButton></Col>
          <Col md={6}><MyButton style={{width: 218 + 'px', height: 59 + 'px', borderRadius: 10 + 'px', border: 'none'}} title='смотреть' onClick={() => {''}}></MyButton></Col>
        </Row>

      </Col>


      <Col md={7}>


        <div style={{fontWeight: 800, fontSize: 25 + 'px', maxWidth: 425 + 'px', height: 30 + 'px', marginBottom: 18 + 'px'}} className="card-open-title">{checkedCard[0].title}</div>
        <div style={{maxWidth: 676 + 'px', height: 300 + 'px', fontSize: 14 + 'px', marginBottom: 18 + 'px', color: '#878787'}}>{checkedCard[0].subtitleFull}</div>


        <Row md={6}>
          <Col><div style={{fontSize: 14 + 'px', marginBottom: 18 + 'px', color: '#878787'}}>{checkedCard[0].timing}</div></Col>
          <Col><div style={{fontSize: 14 + 'px', marginBottom: 18 + 'px', color: '#878787'}} className="card-open-year">{checkedCard[0].year}</div></Col>
        </Row>


        <div style={{fontSize: 14 + 'px', marginBottom: 5 + 'px', color: '#878787'}}>{checkedCard[0].author}</div>
        <div style={{fontSize: 14 + 'px', marginBottom: 5 + 'px', color: '#878787'}}>{checkedCard[0].host}</div>
        <div style={{fontSize: 14 + 'px', marginBottom: 5 + 'px', color: '#878787'}}>{checkedCard[0].editor}</div>
        <div style={{fontSize: 14 + 'px', marginBottom: 5 + 'px', color: '#878787'}}>{checkedCard[0].operator}</div>


      </Col>
    </Row>
  )
}

export default ProgramOpenPage
