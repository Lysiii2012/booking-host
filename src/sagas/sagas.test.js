import { runSaga } from "redux-saga";
import axios from "axios";
import { fetchHotelsSaga, fetchDestinationSaga } from "./reducers/hotelsSaga";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from "./reducers/hotelsReducer";
import {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} from "./reducers/destinationsReducer";

jest.mock("axios");

describe("fetchHotelsSaga", () => {
  it("should handle fetch hotels success", async () => {
    const mockHotels = [
      {
        name: "Hotel 1",
        address: "Address 1",
        code: "CODE1",
        city: "City 1",
        hotel_rating: 5,
        phone_number: "123456789",
        image: "image1.jpg",
      },
    ];

    axios.get.mockResolvedValue({ data: mockHotels });

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchHotelsSaga,
      fetchHotelsRequest("City 1")
    ).toPromise();

    expect(dispatchedActions).toContainEqual(fetchHotelsSuccess(mockHotels));
  });

  it("should handle fetch hotels failure", async () => {
    const error = "Error fetching hotels";
    axios.get.mockRejectedValue(new Error(error));

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchHotelsSaga,
      fetchHotelsRequest("City 1")
    ).toPromise();

    expect(dispatchedActions).toContainEqual(fetchHotelsFailure(error));
  });
});

describe("fetchDestinationSaga", () => {
  it("should handle fetch destinations success", async () => {
    const mockDestinations = [
      { id: 1, label: "Destination 1" },
      { id: 2, label: "Destination 2" },
    ];

    axios.get.mockResolvedValue({ data: mockDestinations });

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchDestinationSaga,
      fetchDestinationsRequest({ query: "some-query" })
    ).toPromise();

    expect(dispatchedActions).toContainEqual(
      fetchDestinationsSuccess(mockDestinations)
    );
  });

  it("should handle fetch destinations failure", async () => {
    const error = "Error fetching destinations";
    axios.get.mockRejectedValue(new Error(error));

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchDestinationSaga,
      fetchDestinationsRequest({ query: "some-query" })
    ).toPromise();

    expect(dispatchedActions).toContainEqual(fetchDestinationsFailure(error));
  });
});
