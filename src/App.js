import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './routeLayouts/mainLayout'
import CalculatorLayout from './routeLayouts/calculatorLayout';

import NutritionHelper from './pages/NutritionHelper';
import NotFound from './pages/NotFound';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<CalculatorLayout />}>
                    <Route index element={<NutritionHelper />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );

}

export default App;