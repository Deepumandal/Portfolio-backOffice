import { SideBarPayloadPageNameEnum, SideBarReducerPageNameEnum } from "../../types/enums";
import { SIDEBAR_LOADING, SideBarActionTypes } from "../../types/types";
import { createSlice } from '@reduxjs/toolkit'
export interface SideBarInitialStateType {
    pageName: SideBarPayloadPageNameEnum[];
    selectedPageName: SideBarPayloadPageNameEnum;
    loading: boolean;
    error: boolean;
}

const initialState: SideBarInitialStateType = {
    loading: false,
    error: false,
    pageName: [
        SideBarPayloadPageNameEnum.HOME,
        SideBarPayloadPageNameEnum.EDUCATION,
        SideBarPayloadPageNameEnum.EXPERIENCE,
        SideBarPayloadPageNameEnum.PROJECTS,
        SideBarPayloadPageNameEnum.OPEN_SOURCE,
        SideBarPayloadPageNameEnum.CONTACT_ME
    ],
    selectedPageName: SideBarPayloadPageNameEnum.HOME
};


const sideBarReducer = createSlice({
    name: 'sidebarReducer',
    initialState: initialState,
    reducers: {
        PageChangeEvent(state, action) {
            return {
                ...state,
                selectedPageName: action.payload
            }
        }
    }
})
export const { PageChangeEvent } = sideBarReducer.actions
export default sideBarReducer