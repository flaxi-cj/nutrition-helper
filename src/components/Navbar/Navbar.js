
import { useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { LG_SCREEN } from '../../const/bootstrapBreakPoints';
import AppRoutes from '../../const/routes';
import './Navbar.scss'

const Navbar = ({ isExpanded, setIsExpanded }) => {

    const isLargeScreen = useMediaQuery(LG_SCREEN);

    useEffect(() => {
        if (!isLargeScreen) {
            setIsExpanded(false);
        }
    }, [isLargeScreen]);


    const largeScreenSizeClass = `d-flex flex-column order-first position-relative pb-1 px-0 min-vh-100${isExpanded ? ' normal-navbar' : ' minimized-navbar'}`;
    const smallScreenSizeClass = `d-flex flex-column order-first position-relative px-0 min-vh-100${isExpanded ? ' minimized-navbar' : ' d-none'}`;

    return (

        <nav className={isLargeScreen ? largeScreenSizeClass : smallScreenSizeClass}>

            <Link to="/" className={`text-decoration-none text-white d-flex align-items-center pt-2 pb-4${(isExpanded && isLargeScreen) ? ' ps-3' : ' align-self-center h5 mb-4'}`}>
                <i className='fa-solid fa-bowl-food m-0 pt-2 me-1' style={isExpanded ? { fontSize: '1.35em' } : { fontSize: '27px', paddingRight: '5px' }}></i>
                <p className={`${(isExpanded && isLargeScreen) ? '' : 'd-none '}fw-normal m-0 ps-2 pt-1`} style={{ color: '#ecf0f1', fontSize: '23px' }}>nutrition helper</p>
            </Link>

            <p className={`${(isExpanded && isLargeScreen) ? '' : 'd-none '}text-white fs-8 fw-bold ps-3 pt-2`} style={{letterSpacing:'0.5px'}}>MENU</p>

            <div className='d-flex flex-column align-items-stretch'>
                {
                    AppRoutes.map(item => {
                        return (
                            <NavLink key={item.name} to={item.path} className={`text-decoration-none py-3${(isExpanded && isLargeScreen) ? ' ps-3 d-inline' : ' d-flex flex-column align-items-center'}`}>
                                <i className={`${item.icon}${(isExpanded && isLargeScreen) ? ' pe-3' : ' h5'}`}></i>
                                <p className={`m-0 d-inline fs-7${(isExpanded && isLargeScreen) ? '' : ' fs-8'}`}>{item.name}</p>
                            </NavLink>)
                    })
                }
            </div>

        </nav>
    );
}

export default Navbar;