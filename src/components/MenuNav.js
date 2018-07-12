import React from 'react'
// import {NavLink} from 'react-router-dom'
import SearchBox from '../SearchBox.js'

const NavMenu = () =>(
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container">
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item "><NavLink exact className="nav-link" to='/' > Home </NavLink></li>
//         <li className="nav-item "><NavLink className="nav-link" to='/planets' > Planets </NavLink></li>
//         <li className="nav-item "><NavLink className="nav-link"to='/vehicles' > Vehicles </NavLink></li>
//         <li className="nav-item "><NavLink className="nav-link" to='/people' > People </NavLink></li>
//       </ul>
//     </div>
//   </div>
// </nav>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
           <a className="navbar-brand nav-link" to="/">React Movie</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarsExample07">
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item">
                       <a className="nav-link" href="/">Home</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="/peliculas">Peliculas</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="/series">Series</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="/milista">Mi Lista <span className="badge badge-danger">3</span></a>
                   </li>
               </ul>
               <SearchBox/>
           </div>
       </div>
   </nav>

);

export default NavMenu;
