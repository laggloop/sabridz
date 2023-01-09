import React, { Component } from 'react';
import './NavBar.css';
import {FiHome} from 'react-icons/fi'
import {TbSelect} from 'react-icons/tb'
import {BsQuestionSquare} from 'react-icons/bs'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';



export default function NavBar(){
        return(
          <div className='Nav'>
            <div className='NavItems'>
              <FiHome /> <Link to='/'>Accueil</Link>
            </div>
            <div className='NavItems'>
              <TbSelect /> <Link to='/Products'>Produits</Link>
            </div>
            <div className='NavItems' >
              <BsQuestionSquare /> <Link to='/About'>A propos</Link>
            </div>
            <div className='NavItems'>
              <RiQuestionAnswerLine /> <Link to='/Contact'>Contact</Link>
            </div>

          </div>
        );
    
}