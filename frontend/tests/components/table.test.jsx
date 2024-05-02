// ChartComponent.test.js
import { render, screen } from "@testing-library/react";
import ChartComponent from "../../src/components/Table";
import { expect } from "chai";

describe("ChartComponent", () => {
  it("renders ChartComponent with default props", () => {
    const data = [
      { date: "2024-01-01", location: "City1", component1: 10, component2: 20 },
      { date: "2024-01-02", location: "City2", component1: 15, component2: 25 },
    ];
    const componentFilter = "aqi"; 
    const countryFilter = ""; 

    render(
      <ChartComponent
        data={data}
        componentFilter={componentFilter}
        countryFilter={countryFilter}
      />
    );
    

    const chartElement = screen.getByTestId("chart");
    expect(chartElement).to.exist;
  });
});
