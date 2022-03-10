import React, { useContext } from 'react';
import './Topbar.css';
import BrandLogo from '../../assets/image/OB-Logo-Black-1.png';
// import SettingsIcon from '@mui/icons-material/Settings';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Util/UserProvider';
import { getFirstCapitalLetter } from '../../Util/helper';

const Topbar = () => {
    const { UserState } = useContext(UserContext);
    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("idd");
        window.location.href = "/signin";
    }
    // const styleForIcon ={
    //     fontSize : "12px"
    // }
    return (
        <>
            <section className='topbar-section'>
                <div className="topbar">
                    <div className="topbarleft">
                        <div className="brandLogo">
                            <img src={BrandLogo} alt="brand-logo" title='brand-logo' />
                        </div>
                    </div>
                    <div className="topbar-right">
                        <ul>
                            <li><Link to=""><i className="fa-solid fa-gear"></i></Link></li>
                            <li><Link to=""><i className="fa-solid fa-bell"></i></Link></li>
                            <li className='bm-style'><Link to=""><span>{(UserState?.firstname && UserState?.lastname) ? getFirstCapitalLetter(`${UserState.firstname} ${UserState.lastname}`) : ""}</span><i className="fa-solid fa-angle-down" onClick={() => signOut()}></i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Topbar;
