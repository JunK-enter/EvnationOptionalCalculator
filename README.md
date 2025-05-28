# Evnation Optional Calculator

A modern, animated web calculator for optional load calculation, built with React.

## Features
- Dark theme with stylish animations
- Four main input fields:
  - **Square Foot**
  - **Small Appliances & Laundry Circuit**
  - **Other Loads (watts)**
  - **Max HVAC (watts)**
- Real-time calculation of Result AMP based on:
  - (Square Foot × 3) + (Small Appliances × 1500) + (First 10,000W of Other Loads + 40% of remainder) + Max HVAC
  - Final result is divided by 240 to get the AMP value
- Responsive and visually appealing UI
- Custom logo and favicon support

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/evnation_optional_calculator.git
cd evnation_optional_calculator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Usage
1. Enter the values for each field.
2. Click the **Calculate** button.
3. The calculated Result AMP will be displayed below.

## Example Calculation
- **Square Foot:** 2000
- **Small Appliances & Laundry Circuit:** 5
- **Other Loads:** 30000
- **Max HVAC:** 6000

**Calculation:**
- (2000 × 3) + (5 × 1500) + (10,000 + (20,000 × 0.4)) + 6000 = 6000 + 7500 + 18,000 + 6000 = 37,500
- 37,500 ÷ 240 = **156.25 AMP**

## License
This project is licensed under the MIT License.