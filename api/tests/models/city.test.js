const dotenv = require("dotenv")
dotenv.config({ path: "./api/.env.test" });
require("../mongodb_helper");
const City = require("../../models/city");


describe("City model", () => {
  beforeEach(async () => {
    await City.deleteMany({});
  });

  it('should have access to test environment variables', () => {
    // Access your environment variables as usual
    const mongodbUrl = process.env.MONGODB_URL;
    expect(mongodbUrl).toBeDefined();
  });


  it("has an aqi", () => {
    const city = new City({
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
    });

    expect(city.aqi).toEqual(1);
  });

  it("has a date", () => {
    const city = new City({
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
    });
    expect(city.date).toEqual(new Date(2001, 0, 1));
  });

  it("has a location", () => {
    const city = new City({
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
    });

    expect(city.location).toEqual("test");
  });
  
  it("has an email address", () => {
    const city = new City({
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
    });

    expect(city.co).toEqual(2);
  });

  it("has a co", () => {
    const city = new City({
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
    });
    
    expect(city.no).toEqual(3);
  });

  it("has a no", () => {
    const city = new City({
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
    });
    
    expect(city.no2).toEqual(4);
  });

  it("has a no2", () => {
    const city = new City({
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
    });
    
    expect(city.o3).toEqual(5);
  });

  it("has a o3", () => {
    const city = new City({
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
    });
    
    expect(city.so2).toEqual(6);
  });

  it("has a so2", () => {
    const city = new City({
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
    });
    
    expect(city.pm2_5).toEqual(7);
  });

  it("has a pm2_5", () => {
    const city = new City({
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
    });

    expect(city.pm10).toEqual(8);
  });

  it("has a pm2_5", () => {
    const city = new City({
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
    });
    
    expect(city.nh3).toEqual(9);
  });
      

  it("can list all cities", async () => {
    const cities = await City.find();
    expect(cities).toEqual([]);
  });

  it("can save a city", async () => {
    const city = new City({
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
    });

    await city.save();
    const cities = await City.find();

    expect(cities[0].aqi).toEqual(1);
    expect(cities[0].date).toEqual(new Date(2001, 0, 1));
    expect(cities[0].location).toEqual("test");
    expect(cities[0].co).toEqual(2);
    expect(cities[0].no).toEqual(3);
    expect(cities[0].no2).toEqual(4);
    expect(cities[0].o3).toEqual(5);
    expect(cities[0].so2).toEqual(6);
    expect(cities[0].pm2_5).toEqual(7);
    expect(cities[0].pm10).toEqual(8);
    expect(cities[0].nh3).toEqual(9);
  });

});
