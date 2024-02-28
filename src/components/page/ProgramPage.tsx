import { FC } from 'react'

// redux

import { useAppDispatch, useAppSelector } from '../../types/reduxHook'
import { fetchGetCard } from '../../services/programCardSlice'

//

import { useEffect } from 'react'

//

import { Row, Col } from 'react-bootstrap'

// router

import { Link } from 'react-router-dom'

// components

import ProgramCard from '../UI/ProgramCard'

// type

import { programCardType } from '../../types/types'


//

interface CardList {
  id: any,
  data:  programCardType[]
}



const ProgramPage = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.list.cards)


  useEffect(() => {
    dispatch(fetchGetCard())
  },[dispatch])


  const cardList = state.map((item) => {
    return item.data
  })


  console.log(cardList)

  return (
    <Row>
      <Col className='d-flex'>

      {(cardList.length < 1) ? <h3 style={{textAlign: 'center'}}>СПИСОК ПУСТ</h3> : cardList.map((card) => {return <Link style={{textDecoration: 'none'}} to={`/${card.titleEng}`}><ProgramCard card={card}></ProgramCard></Link>})}

      </Col>
    </Row>

  )
}

export default ProgramPage
