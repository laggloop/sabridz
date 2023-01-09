import './Contact.css';
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
import {RiQuestionAnswerLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Contact(){
  const [stylee, setStylee] = useState("dropdown-content222");
  const shownavmob2 = () => {
    document.getElementById('optA2').style.display='none';
    setStylee("dropdown-content22");
    document.getElementById({stylee}).style.display='flex';
  }
  
  const shownavmob22 = () => {
    setStylee("dropdown-content222");
    document.getElementById('optA2').style.display='flex';
    document.getElementById({stylee}).style.display='none';
  }
    return(
        <div className="Main">
            <div className="Header">
                <div className='HeaderL'>
                      <img src={Logo} alt=''/>
                </div>
                <div className='HeaderC'>
                    <div className='HeaderCA'>
                      <NavBar />
                    </div>
                    <div className='HeaderCB'>
                      Contact
                    </div>
                </div>
                <div className='HeaderR'>
                  <div className='RSOC'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
                </div>
            </div>
            <div id='optA2'>
                    <div className='vide2'></div>
                    <div className="LogoO2">
                      <img src={Logo} alt='' />
                    </div>
                    <div className="dropdown2">
                      <RxHamburgerMenu  onClick={shownavmob2} className="dropbtn2" />
                    </div>
            </div>
            <div id={stylee}>
                <div className='MbNav2'>
                <div className='Mbcase12'>
                  <img src={Logo} alt=''/>
                  <div className='closeMbnav2'><IoIosCloseCircleOutline onClick={shownavmob22} color='#1e1e74' size={'100%'} /></div>
                </div>
                <div className='Mbcase22'>
                  <FiHome /> <Link to='/'>Accueil</Link>
                </div>
                <div className='Mbcase32'>
                  <TbSelect /> <Link to='/Products'>Produits</Link>
                </div>
                <div className='Mbcase42'>
                  <BsQuestionSquare /> <Link to='/About'>A propos</Link>
                </div>
                <div className='Mbcase52'>
                  <RiQuestionAnswerLine /> <Link to='/Contact'>Contact</Link>
                </div>
               </div>   
            </div>
            <div className="Contactforms">
                <div className='TitreF'><b>Prenez contact avec nous !</b></div>
                <form className='FormF'> 
                  <div className='C1'>
                  <input type="text" name='Nom' placeholder='Nom' required />
                  <input type="email" name='Email' placeholder='Mail'required />
                  </div>
                  <div className='C2'>
                  <input type="text" name='Sybject' placeholder='Sujet' required />
                  </div>
                  <div className='C3'>
                    <textarea name='Msg' placeholder='Message' required></textarea>
                  </div>
                  <div className='C4'><input type="submit" /></div>

                </form>
            </div>
            <div className="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.811552027527!2d3.2157266156501727!3d36.75109417816132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e4fdfcd1a0091%3A0x8d3278d2aaec321d!2sSABRI%20AGRO%20INDUSTRIES!5e0!3m2!1sfr!2sdz!4v1672961251746!5m2!1sfr!2sdz" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className='FootNav2'>
              <div className='FooterLofo2'>   <img src={Logo} alt=''/></div>
              <div className='FooterContact2'>
                <a><b>Contact</b></a>
                <div className='FC12'><FiPhoneCall />+213 0 561 87 67 35 </div>
                <div className='FC22'><CiMail /> contact@sabri-agro-industries.dz</div>
                <div className='FC32'><MdPlace /> Route du Cap Bordj-El-Kiffan B.P 146 , Bordj el Kiffan, Algeria</div>

              </div>
              <div className='FooterLinks2'>
                <div className='RSOC2'><BsInstagram size={'25px'}/> <FaFacebookF size={'25px'}/></div>
              </div>

            </div>
        </div>
    )
}