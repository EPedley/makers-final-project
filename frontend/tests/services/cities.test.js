import createFetchMock from "vitest-fetch-mock";
import { describe, expect, vi } from "vitest";
import loadDataFromMongoDB from "../../src/services/requests";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Mock fetch function
createFetchMock(vi).enableMocks();

describe("cities service", () => {
  describe("loadDataFromMongoDB", () => {
    test("runs if the status is 200", async () => {
      fetch.mockResponseOnce(JSON.stringify({ cities: [] }), {
        status: 200,
      });

      await loadDataFromMongoDB();

      // This is an array of the arguments that were last passed to fetch
      const fetchArguments = fetch.mock.lastCall;
      const url = fetchArguments[0];
      const options = fetchArguments[1];

      expect(url).toEqual(`${BACKEND_URL}/cities`);
      expect(options.method).toEqual("GET");
    });

    test("rejects with an error if the status is not 200", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({ message: "Something went wrong" }),
        { status: 400 }
      );

      try {
        await loadDataFromMongoDB();
      } catch (err) {
        expect(err.message).toEqual("Unable to fetch posts");
      }
    });
  });
});
