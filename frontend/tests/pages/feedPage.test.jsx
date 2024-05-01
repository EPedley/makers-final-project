import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { MainPage } from "../../src/pages/MainPage";
import { loadDataFromMongoDB } from "../../src/services/requests";

// Mocking the mongoDB service
vi.mock("../../src/services/requests", () => {
  const loadDataFromMongoDBMock = vi.fn();
  return { loadDataFromMongoDB: loadDataFromMongoDBMock };
});



// Mocking React Router's useNavigate function
// vi.mock("react-router-dom", () => {
//   const navigateMock = vi.fn();
//   const useNavigateMock = () => navigateMock; // Create a mock function for useNavigate
//   return { useNavigate: useNavigateMock };
// });

describe("Main Page", () => {


  test("It loads", async () => {
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
    expect(dropdown.textContent).toEqual("AQI");
  });

  // test("It navigates to login if no token is present", async () => {
  //   render(<FeedPage />);
  //   const navigateMock = useNavigate();
  //   expect(navigateMock).toHaveBeenCalledWith("/login");
  // });
});
