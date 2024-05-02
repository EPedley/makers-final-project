import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import '@testing-library/jest-dom';


import { MainPage } from "../../src/pages/MainPage";
import loadDataFromMongoDB from "../../src/services/requests";
import mockDataJSON from "../scripts/data.json"

// Mocking the mongoDB service
vi.mock("../../src/services/requests", () => {
  const loadDataFromMongoDBMock = vi.fn();
  return {
    default: loadDataFromMongoDBMock ,
}
});

// date formatting
const formatDate = (dateString) => {
  const options = {month: 'long', day: 'numeric', year: 'numeric'}
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options)
}

describe("Main Page", () => {

  test("It loads and the dropdown renders", async () => {
    const mockData = [{ 
      _id: "12345",
      aqi: 1,
      date: new Date(2001, 0, 1),
      location: "test",
      co: 2,
      no: 3,
      no2: 4,
      o3: 5,
      so2: 6,
      pm2_5: 7,
      pm10: 8,
      nh3: 9
    }];

    loadDataFromMongoDB.mockResolvedValue({ data: mockData});

    render(<MainPage />);

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown.textContent).toContain("AQI");
  });

  test("It renders the map describer", async () => {
    const mockData = [{ 
      _id: "12345",
      aqi: 1,
      date: new Date(2001, 0, 1),
      location: "test",
      co: 2,
      no: 3,
      no2: 4,
      o3: 5,
      so2: 6,
      pm2_5: 7,
      pm10: 8,
      nh3: 9
    }];

    loadDataFromMongoDB.mockResolvedValue({ data: mockData});

    render(<MainPage />);
    const date = new Date(Date.now() - 864e5)
  
    const dropdown = screen.getByTestId("mapLabel");
    expect(dropdown.textContent).toBe(`World mapchart showing AQIⓘ for ${formatDate(date)} from Open Weather`);
  });

  test("It renders the world map", async () => {
    const mockData = mockDataJSON;

    loadDataFromMongoDB.mockResolvedValue({ data: mockData});

    render(<MainPage />);

    const map = screen.getByTestId("map");
    expect(map).toBeInTheDocument()
  });
});