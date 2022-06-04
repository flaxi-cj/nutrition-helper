import { useEffect } from "react";
import "./InfoBar.scss";
import {userImage} from "../../assets/images/userImage.png";
import { Tooltip } from "../../assets/assetIndex";


const Infobar = ({ isExpanded, setIsExpanded }) => {

    useEffect(() => {
        new Tooltip(document.querySelector('#thumbs-up'));

    }, []);


    return (
        <div id='infobar' className="row m-0">
            <div className='col d-flex align-items-center justify-content-between p-0'>
                <div>
                    {
                        isExpanded ?
                            <button className="btn btn-light bg-transparent border-0 shadow-none" onClick={() => setIsExpanded(false)}>
                                <i className='fa-solid fa-bars h3 m-0'></i>
                            </button> :
                            <button className="btn btn-light bg-transparent border-0 shadow-none" onClick={() => setIsExpanded(true)}>
                                <i className='fa-solid fa-bars h3 m-0'></i>
                            </button>
                    }
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <div className="d-flex align-items-center pe-2">
                            <div className="pe-3">
                                <p className="m-0 fw-semibold text-end fs-7">Placeholder</p>
                                <p className="m-0 fw-semibold text-end fs-7">email@justmockup.com</p>
                            </div>
                            <img className="rounded-circle" src={userImage} alt='User profile image' />
                        </div>
                    </div>
                    <button id='thumbs-up' className="btn border-0 shadow-none py-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title={`Give your feedback here!`}>
                        <i className="fa-regular fa-thumbs-up h4 m-0"></i>
                    </button>
                    <button className="btn border-0 shadow-none py-3">
                        <i className="fa-solid fa-power-off h4 m-0"></i>
                    </button>


                </div>
            </div>
        </div>
    );
}

export default Infobar;