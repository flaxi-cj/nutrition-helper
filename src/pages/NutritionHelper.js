import { nutrientVault } from "../const/nutrientVault";
import { useState } from "react";
import { DAILY_CALORIES, DAILY_PROTEINS, DAILY_FAT, DAILY_CARBS, DAILY_SUGAR, DAILY_FIBER } from "../const/dailyGoalVault";

const NutritionHelper = () => {

    const [currentValue, setCurrentValue] = useState({ ...nutrientVault });
    const [calories, setCalories] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [sugar, setSugar] = useState(0);
    const [fiber, setFiber] = useState(0);
    const [fat, setFat] = useState(0);

    const indexCurrentValueState = [calories, proteins, carbs, sugar, fiber, fat];
    const indexNutrientName = ['Calories', 'Proteins', 'Carbs', 'Sugar', 'Fiber', 'Fat'];
    const indexNutrientDailyGoal = [DAILY_CALORIES, DAILY_PROTEINS, DAILY_CARBS, DAILY_SUGAR, DAILY_FIBER, DAILY_FAT];
    const indexProgressBarStyling = ['bg-success bg-gradient', 'bg-primary bg-gradient', 'bg-warning bg-gradient bg-opacity-50', 'bg-danger bg-gradient bg-opacity-75', 'bg-info bg-gradient', 'bg-warning bg-gradient'];


    const widthCalculator = (value, maxValue) => Math.round(((100 / maxValue * value) + Number.EPSILON) * 10000) / 10000;

    const handleChange = (event) => {
        console.log(event.value);
        console.log(event.id);

        let changeFactor = event.value - currentValue[event.id]['value'];

        setCalories((prev) => isNaN(currentValue[event.id]['calories']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['calories'] + Number.EPSILON) * 10000) / 10000);
        setProteins((prev) => isNaN(currentValue[event.id]['proteins']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['proteins'] + Number.EPSILON) * 10000) / 10000);
        setCarbs((prev) => isNaN(currentValue[event.id]['carbs']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['carbs'] + Number.EPSILON) * 10000) / 10000);
        setSugar((prev) => isNaN(currentValue[event.id]['sugar']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['sugar'] + Number.EPSILON) * 10000) / 10000);
        setFiber((prev) => isNaN(currentValue[event.id]['fiber']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['fiber'] + Number.EPSILON) * 10000) / 10000);
        setFat((prev) => isNaN(currentValue[event.id]['fat']) ? prev : Math.round((prev + changeFactor * currentValue[event.id]['fat'] + Number.EPSILON) * 10000) / 10000);

        setCurrentValue({ ...currentValue }, currentValue[event.id]['value'] = event.value);

        // console.log(currentValue)
        console.log(indexCurrentValueState)
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

                {
                    indexCurrentValueState.map((state, index) => {
                        return (
                            <div key={indexNutrientName[index]} className="row align-items-center gy-0 px-5">
                                <p className="m-0 p-0" style={{ width: '6em' }}>{indexNutrientName[index]}</p>
                                <div className="progress col  p-0">
                                    <div className={`progress-bar ${indexProgressBarStyling[index]}`} role="progressbar"
                                        style={{ width: `${widthCalculator(indexCurrentValueState[index], indexNutrientDailyGoal[index])}%` }}
                                        aria-valuenow={indexCurrentValueState[index]}
                                        aria-valuemin="0" aria-valuemax={indexNutrientDailyGoal[index]}>{indexCurrentValueState[index].toFixed(2)}</div>
                                </div>
                                <p className="m-0 p-0 ps-2" style={{ width: '4em'}}>{indexNutrientDailyGoal[index]}{indexNutrientName[index]==='Calories'?'cal':'g'}</p>
                            </div>)
                    })
                }

            </div>
        </>
    );
}


export default NutritionHelper;