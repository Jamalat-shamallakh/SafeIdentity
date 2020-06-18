import { Link } from "gatsby"
import React,{Component} from "react"
import Icon from "../../assets/safe-logo.svg";
import './style.css'

class Header extends Component{
  state={
    mainNavClass:"main-nav",
    dropdownClasses:"dropdown-menu-style"
  }
  handleClick = (e)=>{
    if(this.state.mainNavClass.search("activeNav")!== -1){
      this.setState({
        mainNavClass:"main-nav",
       
      })
    }else{
      this.setState({
        mainNavClass:"main-nav activeNav",
       
      })
    }
  }
  dropDownHandle=()=>{
    if(this.state.dropdownClasses.search("show")!== -1){
      this.setState({
        dropdownClasses:"dropdown-menu-style"
       
      })
    }else{
      this.setState({
        dropdownClasses:"dropdown-menu-style show"
      })
    }
  }
  render(){
    return(
<header className="bg-header" >
      <nav className="navbar">
        <button className="navbar-toggle" id="js-navbar-toggle" onClick={(e)=> this.handleClick(e)}>
            <span className="navbar-toggle-icon"></span>
        </button>
        <Icon className="logo"/>
        <ul className={this.state.mainNavClass} id="js-menu">
            <li>
               <Link to='/' className="nav-links">WHAT IS SAFE</Link>
            </li>
            <li>
               <Link to='/' className="nav-links">BENEFITS</Link>
            </li>
            <li>
               <Link to='/'className="nav-links dropdown" onClick={this.dropDownHandle}>WHAT WE PROVIDE</Link>
               <ul className={this.state.dropdownClasses}>
                 <li className="dropdown-item"><Link className="dropdown-links">Trust Framwork</Link></li>
                 <li className="dropdown-item"><Link className="dropdown-links">The SAFE Identity QPL</Link></li>
                 <li className="dropdown-item"><Link className="dropdown-links">SAFE Global Encryption Directory</Link></li>

               </ul>
            </li>
            <li>
             <Link to='/' className="nav-links">GET INVOLVED</Link>
            </li>
        </ul>
    </nav>
  </header>
    )
  }
}
export default Header
