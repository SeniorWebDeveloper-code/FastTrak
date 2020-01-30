import { GET_VEHICLES, GET_VEHICLES_FAIL, ADD_VEHICLE, ADD_VEHICLE_FAIL, UPDATE_VEHICLE }
    from "../actions/types";

const initialState = {
    //Get all vehicles 
    vehicles: [],
    loading: true,
    error: {}

}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_VEHICLES:
        case ADD_VEHICLE:
        case UPDATE_VEHICLE:
            return {
                ...state,
                vehicles: payload,
                loading: false
            }
        case GET_VEHICLES_FAIL:
        case ADD_VEHICLE_FAIL:
            return {
                ...state,
                vehicles: payload,
                loading: false
            }
        default:
            return state;
    }
}