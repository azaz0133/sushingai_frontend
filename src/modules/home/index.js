import React from 'react'
import { HowTo , Carousel } from './components'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import {translate} from 'react-i18next'
import './style.css'

const Home = ({t}) => (
   
    <div> 
        <div className="justify-content">
            <br/>
            <h1 style={{color:"black",textAlign:"center"}}>
                Sushi'Ngai <br />
                {t('home-delivery')}
            </h1>
            <br />
        </div>
           <Carousel/>
            <br />
            <br />
        <div className="container">
         <HowTo />
        </div>
        <br />
        <br />
        <h1 style={{textAlign:"center"}}>
           <Link className="btn btn-danger font-weight-bold btn3d" style={{color:"white",backgroundColor:"#F21C34"}} to={`/menu`}>START</Link>{" "}
        </h1>
        <br />
    </div>

    )
export default translate()(Home)