import axios from "axios";
import { configuration } from "../../utils/config";
import { AnyAction, Dispatch } from "redux";
import { homeReducerEnums } from "../../types/enums";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../reduxStore";
import { homeActionType } from "../../types/types";
import { SocialMediaRecord, greetingOptions } from "./homeReducer";
import { FetchAllHomePageData } from "../../api/FetchAllHomePageData";


export const fetchAllData = () => async (dispatch: Dispatch) => {
    dispatch({
        type: homeReducerEnums.GET_LOADING
    })
    try {
        // Make your API request here
        const response = await FetchAllHomePageData()
        const data = await response.json();
        console.log(data)
        // Dispatch success action with the received data
        dispatch({
            type: homeReducerEnums.GET_ALL_HOME_DATA,
            payload: {
                greeting: data.greetings as greetingOptions,
                socialMediaLinks: data.socialMediaLinks as SocialMediaRecord[]
            }
        });
    } catch (error) {
        dispatch({
            type: homeReducerEnums.GET_ERROR
        });
    }
    return null;
}