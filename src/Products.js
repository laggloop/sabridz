import './Products.css';
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
import img1 from './img/orange2.jpg';
import img2 from './img/strawberyyy.jpg';
import img3 from './img/strawberyyy.jpg';
import img4 from './img/strawberyyy.jpg';
import img5 from './img/orange2.png';
import img6 from './img/des fruits a tartiner.png';
import img8 from  './img/img2.jpg';
import img9 from './img/img3.jpg';
import img10 from './img/img4.jpg';
import img12 from './img/image 1.png';
import img13 from './img/image 2.png';
import img14 from './img/apricot.jpg';
import img15 from './img/duo 1.jpg';
import img16 from './img/duo 2.jpg';
import img17 from './img/duo 3.jpg';
import img18 from './img/fig.jpg';
import img19 from './img/dueo 1.jpg';
import img20 from './img/dueo 2.jpg';
import img21 from './img/figue.jpg';
import img22 from './img/fraise.jpg';
import img23 from './img/orange.jpg';
import img24 from './img/Peche.jpg';
import img25 from './img/pèche.jpg';
import img26 from './img/Tartinettes.jpg';
import img27 from './img/ORANGE3.jpg';
import img28 from './img/fraise .jpg';
import img29 from './img/Assila.jpg';
import img30 from './img/choco.jpg';
import img31 from './img/beurre.jpg';
import img32 from './img/capre.jpg';
import img33 from './img/cornichons.jpg';
import { Link } from 'react-router-dom';
export default function Products(){
    const [styleeeP, setStyleeeP] = useState("dropdown-content22P");
    const shownavmobP = () => {
      document.getElementById('optAP').style.display='none';
      setStyleeeP("dropdown-content2P");
      document.getElementById({styleeeP}).style.display='flex';

    }
    
    const shownavmob2P = () => {
      setStyleeeP("dropdown-content22P");
      document.getElementById('optAP').style.display='flex';
      document.getElementById({styleeeP}).style.display='none';
    }
    
  const [isActiveP, setActiveP] = useState(true);
  const [isActive2P, setActive2P] = useState(false);
  const [isActive3P, setActive3P] = useState(false);
  const toggleClassP = () => {
    if(!isActiveP){
    setActiveP(!isActiveP);
  }
  if(isActive2P){
    setActive2P(!isActive2P);
  }
  if(isActive3P){
    setActive3P(!isActive3P);
  }
  document.getElementById('OPContent').style.display='flex';
  document.getElementById('OPContent2').style.display='none';
  document.getElementById('OPContent3').style.display='none';

  };
  const toggleClass2P = () => {
    if(!isActive2P){
    setActive2P(!isActive2P);
    }
    if(isActiveP){
      setActiveP(!isActiveP);
    }
    if(isActive3P){
      setActive3P(!isActive3P);
    }

    document.getElementById('OPContent').style.display='none';
    document.getElementById('OPContent2').style.display='flex';
    document.getElementById('OPContent3').style.display='none';
  };
  const toggleClass3P = () => {
    if(!isActive3P){
    setActive3P(!isActive3P);
    }
    if(isActive2P){
      setActive2P(!isActive2P);
    }
    if(isActiveP){
      setActiveP(!isActiveP);
    }
      document.getElementById('OPContent').style.display='none';
      document.getElementById('OPContent2').style.display='none';
      document.getElementById('OPContent3').style.display='flex';
    
  };
    return(
        <div className='Pmain'>
            <div className='PHeader'>
                        <div className='HeaderLP'>
                                <img src={Logo} alt=''/>
                            </div>
                            <div className='HeaderCP'>
                                <div className='HeaderCAP'>
                                <NavBar />
                                </div>
                                <div className='HeaderCBP'>
                                Nos Produits
                                </div>
                            </div>
                            <div className='HeaderRP'>
                            <div className='RSOCP'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
                            </div>
            
            </div>
            <div id='optAP'>
                    <div className='videP'></div>
                    <div className="LogoOP">
                      <img src={Logo} alt='' />
                    </div>
                    <div className="dropdownP">
                      <RxHamburgerMenu  onClick={shownavmobP} className="dropbtnP" />
                    </div>
            </div>
            <div id={styleeeP}>
                <div className='MbNavP'>
                <div className='Mbcase1P'>
                  <img src={Logo} alt=''/>
                  <div className='closeMbnavP'><IoIosCloseCircleOutline onClick={shownavmob2P} color='#1e1e74' size={'100%'} /></div>
                </div>
                <div className='Mbcase2P'>
                  <FiHome /> <Link to='/'>Accueil</Link>
                </div>
                <div className='Mbcase3P'>
                  <TbSelect /> <Link to='/Products'>Produits</Link>
                </div>
                <div className='Mbcase4P'>
                  <BsQuestionSquare /> <Link to='/About'>A propos</Link>
                </div>
                <div className='Mbcase5P'>
                  <RiQuestionAnswerLine /> <Link to='/Contact'>Contact</Link>
                </div>
               </div>   
            </div>
            <div className='PContent'>
                <div className='NavProd'>
               <a className={isActiveP? 'NavTypesActP': 'NavTypesOthP'} 
                  onClick={toggleClassP}  >Confitures</a>
               <a className={isActive2P ? 'NavTypesActP': 'NavTypesOthP'} 
                  onClick={toggleClass2P} > Conserves</a>
               <a className={isActive3P ? 'NavTypesActP': 'NavTypesOthP'} 
                  onClick={toggleClass3P} >Divers</a>
                </div>
                <div className='OPContent' id='OPContent'>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img1} alt=''/>
                      </div>
                      <div className='SPTEXT'> 
                         <p><b>Orange GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img2} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Fraise GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img14} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Abricot GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img18} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Figue GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img16} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Duo Fraise Framboise</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img17} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Duo Fraise Mures</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img15} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                        <p><b>Duo Fraise Cassis</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img19} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                         <p><b>Duo Fraise Cassis PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img20} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                         <p><b>Duo Fraise Framboise PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img21} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Figue PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img22} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Fraise PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img23} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Orange PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img24} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Abricot PM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    
                </div>

                <div className='OPContent2' id='OPContent2'>
                <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img32} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Câpres GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img33} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Cornichons GM</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                                    </div>

                <div className='OPContent3' id='OPContent3'>
                <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img25} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Abricot</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img27} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Orange</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img28} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Fraise</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img29} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Miel</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img30} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Chocolat</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    <div className='SingProd'>
                      <div className='SPIMG'>
                        <img src={img31} alt=''/>
                      </div>
                      <div className='SPTEXT'>
                          <p><b>Tartinettes Beurre</b><br />Poids net : xx g</p>
                      </div>
                    </div>
                    
                </div>
            </div>
            <div className='PFooter'>
                        <div className='FooterLofoP'>   <img src={Logo} alt=''/></div>
                        <div className='FooterContactP'>
                            <a><b>Contact</b></a>
                            <div className='FC1P'><FiPhoneCall />+213 0 561 87 67 35 </div>
                            <div className='FC2P'><CiMail /> contact@sabri-agro-industries.dz</div>
                            <div className='FC3P'><MdPlace /> Route du Cap Bordj-El-Kiffan B.P 146 , Bordj el Kiffan, Algeria</div>

                        </div>
                        <div className='FooterLinksP'>
                            <div className='RSOCP'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
                        </div>
                        </div>  
            </div>
        
    )
}