import './App.css';
import Logo from './img/logoCont.png';
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
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdPlace} from 'react-icons/md'
import React, {useState} from 'react';
import {CiMail} from 'react-icons/ci'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {FiHome} from 'react-icons/fi'
import {TbSelect} from 'react-icons/tb'
import {BsQuestionSquare} from 'react-icons/bs'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import {RiArrowDropLeftLine} from 'react-icons/ri'
import {RiArrowDropRightLine} from 'react-icons/ri'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Apps() {

  const [isActive, setActive] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [style, setStyle] = useState("dropdown-content2");
  


  const toggleClass = () => {
    if(!isActive){
    setActive(!isActive);
  }
  if(isActive2){
    setActive2(!isActive2);
  }
  if(isActive3){
    setActive3(!isActive3);
  }
  

  };
  const toggleClass2 = () => {
    if(!isActive2){
    setActive2(!isActive2);
    }
    if(isActive){
      setActive(!isActive);
    }
    if(isActive3){
      setActive3(!isActive3);
    }


  };
  const toggleClass3 = () => {
    if(!isActive3){
    setActive3(!isActive3);
    }
    if(isActive2){
      setActive2(!isActive2);
    }
    if(isActive){
      setActive(!isActive);
    }


  };
  const toggleClassF = () => {
    if(!isActive){
    setActive(!isActive);
  }
  if(isActive2){
    setActive2(!isActive2);
  }
  if(isActive3){
    setActive3(!isActive3);
  }
  document.getElementById('SConf').style.display='contents';
  document.getElementById('SConf2').style.display='none';
  document.getElementById('SConf3').style.display='none';

  };
  const toggleClass2F = () => {
    if(!isActive2){
    setActive2(!isActive2);
    }
    if(isActive){
      setActive(!isActive);
    }
    if(isActive3){
      setActive3(!isActive3);
    }
    document.getElementById('SConf').style.display='none';
    document.getElementById('SConf2').style.display='contents';
    document.getElementById('SConf3').style.display='none';
  };
  const toggleClass3F = () => {
    if(!isActive3){
    setActive3(!isActive3);
    }
    if(isActive2){
      setActive2(!isActive2);
    }
    if(isActive){
      setActive(!isActive);
    }
    document.getElementById('SConf').style.display='none';
    document.getElementById('SConf2').style.display='none';
    document.getElementById('SConf3').style.display='contents';
  };
  
  const shownavmob = () => {
    setStyle("dropdown-content");
  }
  
  const shownavmob2 = () => {
    setStyle("dropdown-content2");
  }
  const ChangeSc = () => {
    const scrollableArea = document.getElementById("Slider");
    scrollableArea.scrollBy(-150, 0);

  }
  const ChangeScR = () => {
    const scrollableArea = document.getElementById("Slider");
    scrollableArea.scrollBy(150, 0);

  }
  return (
    <div className="App">
        <div className="Container1">
          <div className='optA'>
            <div className='vide'></div>
            <div className="LogoO">
              <img src={Logo} alt='' />
            </div>
            <div className="dropdown" onClick={shownavmob}>
              <RxHamburgerMenu  onClick={shownavmob} className="dropbtn" />
            </div>
          </div>
          <div className={style}>
            <div className='MbNav'>
                <div className='Mbcase1'>
                  <img src={Logo} alt=''/>
                  <div className='closeMbnav' onClick={shownavmob2}><IoIosCloseCircleOutline onClick={shownavmob2} color='#1e1e74' size={'100%'} /></div>
                </div>
                <div className='Mbcase2'>
                  <FiHome /> <Link to='/'>Accueil</Link>
                </div>
                <div className='Mbcase3'>
                  <TbSelect /> <Link to='/Products'>Produits</Link>
                </div>
                <div className='Mbcase4'>
                  <BsQuestionSquare /> <Link to='About'>A propos</Link>
                </div>
                <div className='Mbcase5'>
                  <RiQuestionAnswerLine /> <Link to='Contact'>Contact</Link>
                </div>


            </div>   
          </div>
          <div className='ContTop'>
            <div className="Logo">
              <img src={Logo} alt=''/>
            </div>
            <div className='NavBar'>
                <NavBar />
            </div>
            </div>
            <div className='PotImg'>
               <img src={img5} alt=''/>
            </div>
            <div className='NavTypes'>
               <a className={isActive ? 'NavTypesAct': 'NavTypesOth'} 
      onClick={toggleClassF}  >Confitures</a>
               <a className={isActive2 ? 'NavTypesAct': 'NavTypesOth'} 
      onClick={toggleClass2F} > Conserves</a>
               <a className={isActive3 ? 'NavTypesAct': 'NavTypesOth'} 
      onClick={toggleClass3F} >Hôtellerie</a>
            </div>


            
        </div>
        <div className='Scont'>
          <div className='arrL' onClick={ChangeSc}>
          <RiArrowDropLeftLine onClick={ChangeSc} size={'100%'} color={'#1e1e74'}/>
          </div>
               <div className='Slider' id='Slider'>
                <div id='SConf'>
               <div className='SliderImage'>
               <img src={img1} alt='' />
               </div>
               <div className='SliderImage'>
               <img src={img2} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img14} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img18} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img16} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img17} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img15} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img19} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img20} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img21} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img22} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img23} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img24} alt=''/>
               </div>
               </div>
               <div id='SConf2'>
               <div className='SliderImage'>
               <img src={img32} alt='' />
               </div>
               <div className='SliderImage'>
               <img src={img33} alt=''/>
               </div>
               </div>
               <div id='SConf3'>
               <div className='SliderImage'>
               <img src={img25} alt='' />
               </div>
               <div className='SliderImage'>
               <img src={img26} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img27} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img28} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img29} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img30} alt=''/>
               </div>
               <div className='SliderImage'>
               <img src={img31} alt=''/>
               </div>
               </div>

            </div>
            <div className='arrR' onClick={ChangeScR}>          <RiArrowDropRightLine size={'100%'} onClick={ChangeScR} color={'#1e1e74'}/>
</div>

            </div>
        <div className='Container2'>
            <div className='Phrase'>
              <img src={img6} alt=''/>
            </div>
            <div className='MainCont'>
              <div className='LeftCont'>
                  <div className='ContL'>
                  <h3>Qui sommes Nous ?</h3>
                  <p><b>SABRI AGRO-INDUSTRIES</b><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Est une société familiale, fondée en 1997, elle se spécialise dans la fabrication de confiture de grande qualité. Ses recettes sont élaborées dans la plus authentique tradition. Les fruits utilisés, sont soigneusement choisis, Ils sont de premier choix, et répondent aux standards organoleptiques les plus élevés... </p>
                  </div>
                  <div className='contR'>
                    <img src={img12} alt='' />
                    <img src={img13} alt='' />
                  </div>
              </div>
              <div className='RightCont'>
                  <div className='RightContA'>
                  <img src={img8} alt=''/>
                  </div>
                  <div className='RightContB'>
                  <img src={img9} alt=''/>
                  <img src={img10} alt=''/>
                  </div>
              </div>
            </div>
            <div className='FootNav'>
              <div className='FooterLofo'>   <img src={Logo} alt=''/></div>
              <div className='FooterContact'>
                <a href=''><b>Contact</b></a>
                <div className='FC1'><FiPhoneCall />+213 0 561 87 67 35 </div>
                <div className='FC2'><CiMail /> contact@sabri-agro-industries.dz</div>
                <div className='FC3'><MdPlace /> Route du Cap Bordj-El-Kiffan B.P 146 , Bordj el Kiffan, Algeria</div>

              </div>
              <div className='FooterLinks'>
                <div className='RSOC'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
              </div>

            </div>
        </div>
    </div>
  );
}

export default Apps;
