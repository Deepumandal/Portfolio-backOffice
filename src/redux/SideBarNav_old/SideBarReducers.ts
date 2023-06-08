import { SideBarPayloadPageNameEnum, SideBarReducerPageNameEnum } from "../../types/enums";
import { SIDEBAR_LOADING, SideBarActionTypes } from "../../types/types";
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

const sideBarReducer = (
    state: SideBarInitialStateType = initialState,
    action: SideBarActionTypes
): SideBarInitialStateType => {
    switch (action.type) {
        case SideBarReducerPageNameEnum.SIDEBAR_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case SideBarReducerPageNameEnum.SIDEBAR_ERROR: {
            return {
                ...state,
                error: true,
                loading: false,
            }
        }
        case SideBarReducerPageNameEnum.SELECTED_PAGE: {
            return {
                ...state,
                error: false,
                loading: false,
                selectedPageName: action.payload
            }
        }
        default:
            return state;
    }
};

export default sideBarReducer;