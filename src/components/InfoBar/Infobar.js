import "./Infobar.scss";

const Infobar = ({ isExpanded, setIsExpanded }) => {

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
                </div>
            </div>
        </div>
    );
}

export default Infobar;
