import {configureStore, createSlice} from '@reduxjs/toolkit';
import stationId from './data/stationId';

const StationIdData = createSlice({
    name: 'StationNameData',
    initialState : {stationId},
});

export default configureStore({
    reducer : {
        StationNameData: StationIdData.reducer
    }
})

