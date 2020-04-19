// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './RegisterPageNav.css';

// const RegisterPageNav = (props) => (
//     <div className="nav-register">

//         <div className="nav-registration-div">
           
//             <div className="buggie-logo">
//                 <img
//                     className="logo-image"
//                     alt="book buggie logo"
//                     src="https://thefreebookbuggie.org/wp-content/uploads/2018/08/cropped-logo.jpg" />
//             </div>
//         </div>

//         <div className="nav-right">
//             <Link className="nav-link-register" to="/home">
//                 {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//                 {props.user.id ? 'Home' : 'Login / Register'}
//             </Link>
//             {/* Show the link to the info page and the logout button if the user is logged in */}
//             {props.user.id && (
//                 <>

//                     <Link className="nav-link-register" to="/DataReporting">
//                         Data Reporting
//           </Link>
//                     <Link className="nav-link-register" to="/OrganizationsListPage">
//                         Organizations List
//           </Link>
//                     <Link className="nav-link-register" to="/contactsListPage">
//                         Contacts List
//           </Link>
//           <Link className="nav-link-register" to="/event">
//                         New Event
//           </Link>
//                     <Link className="nav-link-register" to="/neworganization">
//                         Add New Org
//           </Link>

                    

//                     <LogOutButton className="nav-link" />
//                 </>
//             )}
            
//         </div>
//     </div>
// );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//     user: state.user,
// });

// export default connect(mapStateToProps)(RegisterPageNav);
