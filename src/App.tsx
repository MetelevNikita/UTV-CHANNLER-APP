import { FC, useEffect } from 'react'

// css

import './App.css'

// bootstrap

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// router

import { Routes, Route } from 'react-router-dom';

//

import { useAppDispatch, useAppSelector } from './types/reduxHook';
import { fetchGetCard } from './services/programCardSlice';


// components

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Main from './components/page/Main';
import ProgramOpenPage from './components/page/ProgramOpenPage';



const App = () => {

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

    <div className="App">

        <Container>

          <Header />

            <Routes>

              <Route path='/' element={<Main />}></Route>
              <Route path='/:id' element={<ProgramOpenPage/>}></Route>

            </Routes>

            <Footer />

        </Container>

    </div>



  )
}

export default App
