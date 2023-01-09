import './About.css';
import {FiPhoneCall} from 'react-icons/fi';
import {CiMail} from 'react-icons/ci'
import {MdPlace} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import Logo from './img/logoCont.png';
import NavBar from './NavBar';
import { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {FiHome} from 'react-icons/fi'
import {TbSelect} from 'react-icons/tb'
import {BsQuestionSquare} from 'react-icons/bs'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import img8 from  './img/img2.jpg';
import img9 from './img/img3.jpg';
import img10 from './img/img4.jpg';
import img12 from './img/image 1.png';
import img13 from './img/image 2.png';
import img14 from './img/les gammes 3 2.png';
import img15 from './img/les gammes copie 1.png';
import img16 from './img/imres.png'
import { Link } from 'react-router-dom';

export default function About(){
    const [styleee, setStyleee] = useState("dropdown-content223");
    const shownavmob3 = () => {
      document.getElementById('optA3').style.display='none';
      setStyleee("dropdown-content23");
      document.getElementById({styleee}).style.display='flex';

    }
    
    const shownavmob23 = () => {
      setStyleee("dropdown-content223");
      document.getElementById('optA3').style.display='flex';
      document.getElementById({styleee}).style.display='none';
    }
    const showcon1 = () => {
      document.getElementById('Games').style.display='none';
      document.getElementById('ContAb').style.display='flex';    }
    
    const showcon2 = () => {
      document.getElementById('ContAb').style.display='none';
      document.getElementById('Games').style.display='flex';    }
    return(
        <div className='MainAb'>
            <div className='HeaderAb'>
                        <div className='HeaderL3'>
                                <img src={Logo} alt=''/>
                            </div>
                            <div className='HeaderC3'>
                                <div className='HeaderCA3'>
                                <NavBar />
                                </div>
                                <div className='HeaderCB3'>
                                A propos
                                </div>
                            </div>
                            <div className='HeaderR3'>
                            <div className='RSOC3'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
                            </div>
            </div>
            <div id='optA3'>
                    <div className='vide3'></div>
                    <div className="LogoO3">
                      <img src={Logo} alt='' />
                    </div>
                    <div className="dropdown3">
                      <RxHamburgerMenu  onClick={shownavmob3} className="dropbtn3" />
                    </div>
            </div>
            <div id={styleee}>
                <div className='MbNav3'>
                <div className='Mbcase13'>
                  <img src={Logo} alt=''/>
                  <div className='closeMbnav3'><IoIosCloseCircleOutline onClick={shownavmob23} color='#1e1e74' size={'100%'} /></div>
                </div>
                <div className='Mbcase23'>
                  <FiHome /> <Link to='/'>Accueil</Link>
                </div>
                <div className='Mbcase33'>
                  <TbSelect /> <Link to='/Products'>Produits</Link>
                </div>
                <div className='Mbcase43'>
                  <BsQuestionSquare /> <Link to='/About'> A propos</Link>
                </div>
                <div className='Mbcase53'>
                  <RiQuestionAnswerLine /> <Link to='/Contact'>Contact</Link>
                </div>
               </div>   
            </div>
             <div className='ContAb' id='ContAb'>
            <div className='MainCont3'>
              <div className='LeftCont3'>
                  <div className='ContL3'>
                  <h3>Qui sommes Nous ?</h3>
                  <p><b>SABRI AGRO-INDUSTRIES</b><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Est une société familiale, fondée en 1997, elle se spécialise dans la fabrication de confiture de grande qualité. Ses recettes sont élaborées dans la plus authentique tradition. Les fruits utilisés, sont soigneusement choisis, Ils sont de premier choix, et répondent aux standards organoleptiques les plus élevés... </p>
                  <button onClick={showcon2}>Gamme de produits</button>
                  </div>

                  
              </div>
              <div className='RightSide'>
                    <div className='TopRightSide'>
                    <img src={img8} alt=''/>
                    <img src={img9} alt=''/>
                    <img src={img10} alt=''/>
                    </div>
                    <div className='BottomRightSide'>
                    <img src={img12} alt=''/>
                    <img src={img13} alt=''/>
                    </div>
              </div>
              
            </div>
            </div>
     
             <div className='Games' id='Games'>
              <h3>Notre gamme de produits </h3>
              <div className='GameCards'>
              <div className='GameCard'>
                <div className='GameCardImage'>
                <img src={img14} />
                </div>
                <div className='GameCardNom'>
                  CONSERVES
                </div>
              </div>
              <div className='GameCard'>
                <div className='GameCardImage'>
                <img src={img15} />
                </div>
                <div className='GameCardNom'>
                CONFITURES
                </div>
              </div>
              <div className='GameCard'>
                <div className='GameCardImage'>
                <img src={img16} />
                </div>
                <div className='GameCardNom'>
                  HOTELLERIE
                </div>
              </div>

              </div>
              <div className='GamButt'>
              <button onClick={showcon1}>A propos</button>
              <button><Link to='/products'>Produits</Link></button>
              </div>
              </div>
            
            <div className='FootNavAB'>
                        <div className='FooterLofo3'>   <img src={Logo} alt=''/></div>
                        <div className='FooterContact3'>
                            <a><b>Contact</b></a>
                            <div className='FC13'><FiPhoneCall />+213 0 561 87 67 35 </div>
                            <div className='FC23'><CiMail /> contact@sabri-agro-industries.dz</div>
                            <div className='FC33'><MdPlace /> Route du Cap Bordj-El-Kiffan B.P 146 , Bordj el Kiffan, Algeria</div>

                        </div>
                        <div className='FooterLinks3'>
                            <div className='RSOC3'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
                        </div>
                        </div>                    
                    
        </div>
        
    )
}