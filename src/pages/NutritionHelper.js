import { nutrientVault } from "../const/nutrientVault";
import { useState } from "react";
import { DAILY_CALORIES, DAILY_PROTEINS, DAILY_FAT } from "../const/dailyGoalVault";

const NutritionHelper = () => {

    const [currentValue, setCurrentValue] = useState({ ...nutrientVault });
    const [calories, setCalories] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [fat, setFat] = useState(0);


    const handleChange = (event) => {
        console.log(event.value);
        console.log(event.id);

        let changeFactor = event.value - currentValue[event.id]['value'];


        setCalories((prev) => Math.round((prev + changeFactor * currentValue[event.id]['calories'] + Number.EPSILON) * 10000) / 10000);

        setProteins((prev) => Math.round((prev + changeFactor * currentValue[event.id]['proteins'] + Number.EPSILON) * 10000) / 10000);

        setFat((prev) =>Math.round((prev + changeFactor * currentValue[event.id]['fat'] + Number.EPSILON) * 100) / 100);

        setCurrentValue({ ...currentValue }, currentValue[event.id]['value'] = event.value);

        console.log(currentValue)
    };

    return (
        <>
            <div className='card bg-white m-0 m-lg-3 p-3'>
                <title>Calculator — Nutrition Helper</title>
                <p className="card-title border-bottom pb-2 ps-1 fs-5">Calculator</p>
                <div className="card-body d-flex flex-column align-items-center">
                    <div className="w-75">
                        {Object.keys(nutrientVault).map((key) => {
                            return (
                                <div key={key} className="d-flex">
                                    <label htmlFor={key} className="form-label" style={{ width: "15%" }}>{key}</label>
                                    <p className="pe-2">0</p>
                                    <input type="range" className="form-range" min="0" max="1000" defaultValue='0' onChange={(e) => handleChange(e.target)} step="1" id={key}></input>
                                    <p className="ps-2">1000g</p>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
            </div>

            <div className='card bg-white m-0 m-lg-3 p-3'>
                <p className="card-title border-bottom pb-2 ps-1 fs-5">Result</p>

                <div className="row align-items-center gy-0 px-5">
                    <p className="m-0 p-0" style={{width:'6em'}}>Calories</p>
                    <div className="progress col  p-0">
                        <div className="progress-bar bg-success bg-gradient" role="progressbar"
                            style={{ width: `${calories*0.05}%` }} aria-valuenow={calories} aria-valuemin="0" aria-valuemax={DAILY_CALORIES}>{calories.toFixed(2)}</div>
                    </div>
                    <p className="m-0 p-0 ps-2" style={{width:'3em'}}>{DAILY_CALORIES}</p>
                </div>

                <div className="row align-items-center gy-0 px-5">
                    <p className="m-0 p-0" style={{width:'6em'}}>Proteins</p>
                    <div className="progress col  p-0">
                        <div className="progress-bar bg-info bg-gradient" role="progressbar" style={{ width: `${proteins*0.833}%` }} aria-valuenow={proteins} aria-valuemin="0" aria-valuemax={DAILY_PROTEINS}>
                            {proteins.toFixed(2)}</div>
                    </div>
                    <p className="m-0 p-0  ps-2" style={{width:'3em'}}>{DAILY_PROTEINS}</p>
                </div>

                <div className="row align-items-center gy-0 px-5">
                    <p className="m-0 p-0" style={{width:'6em'}}>Fat</p>
                    <div className="progress col p-0 ">
                        <div className="progress-bar bg-warning bg-gradient" role="progressbar" style={{ width: `${fat*1.666}%` }} aria-valuenow={fat} aria-valuemin="0" aria-valuemax={DAILY_FAT}>{fat.toFixed(2)}</div>
                    </div>
                    <p className="m-0 p-0 ps-2" style={{width:'3em'}}>{DAILY_FAT}</p>
                </div>

            </div>
        </>
    );
}


export default NutritionHelper;