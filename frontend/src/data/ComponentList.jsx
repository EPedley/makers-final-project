const components = [
  { 
    value: "aqi", 
    label: "AQI", 
    name: "Air Quality Index", 
    description: "Good: 1\nFair: 2\nModerate: 3\nPoor: 4\nVery Poor: 5" 
  },
  { 
    value: "co", 
    label: "CO",
    name: "Carbon Monoxide",
    description: "Good: 0 - 4,400 μg/m³\nFair: 4,400 - 9,400 μg/m³\nModerate: 9,400 - 124,000 μg/m³\nPoor: 124,000 - 154,000 μg/m³\nVery Poor: ⩾154,000 μg/m³" 
  },
  { 
    value: "no", 
    label: "NO",
    name: "Nitrogen Monoxide",
    description: "min: 0.1 μg/m³\nmax: 100 μg/m³\n" 
  },
  { 
    value: "no2", 
    label: "NO₂",
    name: "Nitrogen Dioxide",
    description: "Good: 0 - 40 μg/m³\nFair: 40 - 70 μg/m³\nModerate: 70 - 150 μg/m³\nPoor: 150 - 200 μg/m³\nVery Poor: ⩾200 μg/m³" 
  },
  { 
    value: "o3", 
    label: "O₃",
    name: "Ozone",
    description: "Good: 0 - 60 μg/m³\nFair: 60 - 100 μg/m³\nModerate: 100 - 140 μg/m³\nPoor: 140 - 180 μg/m³\nVery Poor: ⩾180 μg/m³" 
  },
  { 
    value: "so2", 
    label: "SO₂", 
    name: "Sulphur Dioxide", 
    description: "Good: 0 - 20 μg/m³\nFair: 20 - 80 μg/m³\nModerate: 80 - 250 μg/m³\nPoor: 250 - 350 μg/m³\nVery Poor: ⩾350 μg/m³" 
  },
  { 
    value: "pm2_5", 
    label: "PM₂.₅",
    name: "Particulate Matter (PM₂.₅)",
    description: "Good: 0 - 10 μg/m³\nFair: 10 - 25 μg/m³\nModerate: 25 - 50 μg/m³\nPoor: 50 - 75 μg/m³\nVery Poor: ⩾75 μg/m³" 
  },
  { 
    value: "pm10", 
    label: "PM₁₀",
    name: "Particulate Matter (PM₁₀)",
    description: "Good: 0 - 20 μg/m³\nFair: 20 - 50 μg/m³\nModerate: 50 - 100 μg/m³\nPoor: 100 - 200 μg/m³\nVery Poor: ⩾200 μg/m³" 
  },
  { 
    value: "nh3", 
    label: "NH₃",
    name: "Ammonia",
    description: "min: 0.1 μg/m³\nmax: 200 μg/m³" 
  }
];

export default components;
