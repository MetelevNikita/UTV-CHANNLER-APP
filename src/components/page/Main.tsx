import { CSSProperties, FC, useEffect } from 'react'

// bootstrap

import { Col, Row } from 'react-bootstrap'

// router

import { Routes, Route } from 'react-router-dom'

// components'

import ProgramPage from './ProgramPage'
import ProgramCarusel from './ProgramCarusel'


// type

import type { programCardType } from '../../types/types'



const Main: FC = () => {

  return (

    <Row>


      <ProgramCarusel></ProgramCarusel>
      <ProgramPage></ProgramPage>


    </Row>

  )
}

export default Main
