import React ,{Component} from 'react'
import { elastic as Menu } from 'react-burger-menu'
import './css/PortfolioCSS.css'
import {Route} from "react-router-dom";
import Img1 from './images/img1.jpg'
import About from './About'
import Services from './Services'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import {Link} from 'react-router-dom'
import './css/MainCSS.css'
import Main from "./Main";
import './css/FrontCss.css'

class PortFolio extends Component{
    render(){
        return(
            <div className="wrapper" >

                <Menu className="menu" >

                    <div className="navigation">
                        <div className=" navi affix">

                                <div className="nav ">

                                    <ul>
                                        <li className="active menu-item title"><Link to={"/"}>Home</Link></li>
                                        <li className="menu-item title"><Link to={"/about"}>About</Link></li>
                                        <li className="menu-item title"><Link to={"/services"}>Services</Link></li>
                                        <li className="menu-item title"><Link to={"/skills"}>Skills</Link></li>
                                        <li className="menu-item title"><Link to={"/education"}>Education</Link></li>
                                        <li className="menu-item title"><Link to={"/experience"}>Experience</Link></li>
                                        <li className="menu-item title"><Link to={"/work"}>Work</Link></li>
                                        <li className="menu-item title"><Link to={"/contact"}>Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="footer  ">
                                    <p><small>&copy; Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                        All rights reserved ..<br/>This website is made
                                        by Anjali..
                                    </small></p>
                                    <ul className="list">
                                        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                        <li><a href="#"><i className="	fa fa-twitter-square"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    </ul>
                                </div>


                        </div>


                    </div>
                    <div className="content ">
                        <Route path="/" exact component={Main}  />
                        <Route path="/about" exact component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/education" component={Education}/>
                        <Route path="/experience" component={Experience}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/contact" component={Contact}/>
                    </div>

                </Menu>
            </div>

        );
    }
}

export default PortFolio;