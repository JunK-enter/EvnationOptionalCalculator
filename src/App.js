import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    squareFoot: '',
    smallAppliances: '',
    otherLoads: '',
    maxHVAC: ''
  });
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateResult = () => {
    const squareFootValue = Number(inputs.squareFoot) * 3;
    const smallAppliancesValue = Number(inputs.smallAppliances) * 1500;
    
    // Calculate Other Loads: first 10,000 + 40% of remainder
    const otherLoads = Number(inputs.otherLoads);
    const otherLoadsValue = otherLoads <= 10000 
      ? otherLoads 
      : 10000 + (otherLoads - 10000) * 0.4;
    
    const maxHVACValue = Number(inputs.maxHVAC);

    const total = squareFootValue + smallAppliancesValue + otherLoadsValue + maxHVACValue;
    const resultAmp = total / 240;

    setResult(resultAmp);
    setShowResult(false);
    setTimeout(() => setShowResult(true), 100); // 페이드 인 트리거
  };

  const handleButtonClick = () => {
    setButtonActive(true);
    calculateResult();
    setTimeout(() => setButtonActive(false), 200);
  };

  return (
    <div className="App">
      <img src="/Logo Full Color (2).png" alt="Evnation Logo" className="evnation-logo" />
      <h1 className="slide-in">Evnation Optional Calculator</h1>
      <div className="calculator-container slide-in">
        <div className="input-group">
          <label>Square Foot:</label>
          <input
            type="number"
            name="squareFoot"
            value={inputs.squareFoot}
            onChange={handleInputChange}
            placeholder="e.g. 2000"
          />
        </div>

        <div className="input-group">
          <label>Small Appliances & Laundry Circuit:</label>
          <input
            type="number"
            name="smallAppliances"
            value={inputs.smallAppliances}
            onChange={handleInputChange}
            placeholder="e.g. 5"
          />
        </div>

        <div className="input-group">
          <label>Other Loads (watts):</label>
          <input
            type="number"
            name="otherLoads"
            value={inputs.otherLoads}
            onChange={handleInputChange}
            placeholder="e.g. 30000"
          />
        </div>

        <div className="input-group">
          <label>Max HVAC (watts):</label>
          <input
            type="number"
            name="maxHVAC"
            value={inputs.maxHVAC}
            onChange={handleInputChange}
            placeholder="e.g. 6000"
          />
        </div>

        <button 
          className={buttonActive ? 'active-animate' : ''}
          onClick={handleButtonClick}
        >
          Calculate
        </button>

        {result !== null && (
          <div className={`result fade-in-animate${showResult ? ' show' : ''}`}>
            <h2>Result AMP: {result.toFixed(2)}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
