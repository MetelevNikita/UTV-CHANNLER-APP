import { CSSProperties, FC } from 'react'

//

import './Header.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'

// router

import { Link } from 'react-router-dom'

// img

import logoUTV from './../../asset/header/logo.svg'
import searchHeader from './../../asset/header/search-icon.svg'


const menu = [
  {
    title: 'menu1',
    path: '/'
  },

  {
    title: 'menu2',
    path: '/'
  },

  {
    title: 'menu3',
    path: '/'
  },

  {
    title: 'menu4',
    path: '/'
  },
]



const Header: FC = () => {


  return (

    <div className="Header">
      <Row className='d-flex align-items-center mt-4'>
            <Col md={4} className='mb-4 d-flex justify-content-lg-start justify-content-center'>
              <Link to={''}><img src={logoUTV} alt="logo utv" /></Link>
            </Col>

              <Col md={4} className='d-flex flex-row justify-content-around mb-4'>
                {menu.map((item) => {
                  return <Link key={item.path} className='header-menu-title' to={item.path}>{item.title}</Link>
                })}
              </Col>

              <Col md={4} className='header-serach-input mb-4 d-flex justify-content-end'>

                <input className='header-search-text' type="text" placeholder='text'/>
                <button className='header-search-icon'><img  src={searchHeader} alt="searchIcon" /></button>

              </Col>
      </Row>
    </div>


  )
}

export default Header
