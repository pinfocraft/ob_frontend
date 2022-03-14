import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                            <li className='bm-style'><span>{(UserState?.firstname && UserState?.lastname) ? getFirstCapitalLetter(`${UserState.firstname} ${UserState.lastname}`) : ""}</span><i className="fa-solid fa-angle-down" style={{ cursor: "pointer" }} onClick={handleClick}></i></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={signOut}>Logout</MenuItem>
            </Menu>
        </>
    )
};

export default Topbar;
