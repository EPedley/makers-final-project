const request = require("supertest");
const app = require("../../app");
const City = require("../../models/city");
require("../mongodb_helper");


describe("Testing the cities controller", () => {

  afterEach(async () => {
    await City.deleteMany({});
  });

  describe("GET works", () => {
    test("the response code is 200", async () => {
      const city1 = new City({
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
      const city2 = new City({
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
      await city1.save();
      await city2.save();

      const response = await request(app)
        .get("/cities")
        // .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
    });

    test("returns every city in the collection", async () => {
      const city1 = new City({
        aqi: 1,
        date: new Date(2001, 0, 1),
        location: "test1",
        co: 2,
        no: 3,
        no2: 4,
        o3: 5,
        so2: 6,
        pm2_5: 7,
        pm10: 8,
        nh3: 9
      });
      const city2 = new City({
        aqi: 1,
        date: new Date(2001, 0, 1),
        location: "test2",
        co: 2,
        no: 3,
        no2: 4,
        o3: 5,
        so2: 6,
        pm2_5: 7,
        pm10: 8,
        nh3: 9
      });
      await city1.save();
      await city2.save();

      const response = await request(app)
        .get("/cities")

      const cities = response.body.data;
      console.log(cities)
      const firstCity = cities[0];
      const secondCity = cities[1];

      expect(firstCity.location).toEqual("test1");
      expect(secondCity.location).toEqual("test2");
    });
  });
});

