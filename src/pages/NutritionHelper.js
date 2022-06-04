import { nutrientVault } from "../const/nutrientVault";

const NutritionHelper = () => {
    return (
        <div className='card bg-white m-0 m-lg-3 p-3'>
            <title>Calculator — Nutrition Helper</title>
            <p className="card-title border-bottom pb-2 ps-1 fs-5">Calculator</p>
            <div className="card-body d-flex flex-column align-items-center">
                <div className="w-75">
                    {Object.keys(nutrientVault).map((key) => {
                        return (
                            <div key={key} className="d-flex">
                                <label htmlFor="customRange1" className="form-label" style={{width:"15%"}}>{key}</label>
                                <p className="pe-2">0</p>
                                <input type="range" class="form-range" min="0" max="1000" step="1" id="customRange1"></input>
                                <p className="ps-2">1000g</p>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>

        </div>

    );
}


export default NutritionHelper;