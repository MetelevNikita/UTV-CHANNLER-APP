import { FC } from 'react'

// css

import './Footer.css'

//

import { Row, Col } from 'react-bootstrap'

// img

import tgIcon from './../../asset/footer/tg-icon.svg'
import vkIcon from './../../asset/footer/vk-icon.svg'
import waIcon from './../../asset/footer/wa-icon.svg'
import ytIcon from './../../asset/footer/yt-icon.svg'


const iconArr = [tgIcon, vkIcon, waIcon, ytIcon]




const Footer: FC = () => {

  return (



      <Row className='Footer d-flex align-items-center justify-content-center mt-4'>

          <Col className='d-flex justify-content-center align-items-center' md={6}><div style={{fontSize: 25 + 'px', fontWeight: 800, color: 'white'}}>Подписывайся</div></Col>

          <Col className='d-flex justify-content-center align-items-center' md={6}>
          {iconArr.map((icon) => {
            return <img style={{marginRight: 10 + 'px'}} src={icon} alt={`icon-${icon}`} />
          })}
          </Col>

      </Row>



  )
}

export default Footer
