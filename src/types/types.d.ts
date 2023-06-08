
import { SocialMediaRecord, greetingOptions } from "../redux/home_old/homeReducer"
import { SideBarReducerPageNameEnum, SideBarPayloadPageNameEnum, homeReducerEnums } from "./enums"

export interface GET_HOME_PAGE_LOADING {
    type: homeReducerEnums.GET_LOADING
}
export interface GET_HOME_PAGE_ERROR {
    type: homeReducerEnums.GET_ERROR
}
export interface GET_HOME_PAGE_GET_SUCCESS_GREETINGS {
    type: homeReducerEnums.GET_SUCCESS_GREETINGS
}
export interface GET_HOME_PAGE_GET_SUCCESS_SOCIAL_MEDIA {
    type: homeReducerEnums.GET_SUCCESS_SOCIAL_MEDIA
}
export interface GET_ALL_HOME_PAGE_DATA {
    type: homeReducerEnums.GET_ALL_HOME_DATA
    payload: {
        greeting: greetingOptions;
        socialMediaLinks: SocialMediaRecord[];
    }
}


export type homeActionType =
    GET_HOME_PAGE_LOADING |
    GET_HOME_PAGE_ERROR |
    GET_HOME_PAGE_GET_SUCCESS_GREETINGS |
    GET_HOME_PAGE_GET_SUCCESS_SOCIAL_MEDIA |
    GET_ALL_HOME_PAGE_DATA

////////////////////////////////////////////////////////////////////////
// Sidebar navigation types 
export interface SIDEBAR_LOADING {
    type: SideBarReducerPageNameEnum.SIDEBAR_LOADING;
}

export interface SIDEBAR_ERROR {
    type: SideBarReducerPageNameEnum.SIDEBAR_ERROR;
}

export interface SELECTED_PAGE {
    type: SideBarReducerPageNameEnum.SELECTED_PAGE,
    payload: SideBarPayloadPageNameEnum.CONTACT_ME | SideBarPayloadPageNameEnum.EDUCATION |
    SideBarPayloadPageNameEnum.EXPERIENCE | SideBarPayloadPageNameEnum.HOME
    | SideBarPayloadPageNameEnum.OPEN_SOURCE | SideBarPayloadPageNameEnum.PROJECTS;
}

export type SideBarActionTypes = SIDEBAR_LOADING | SIDEBAR_ERROR | SELECTED_PAGE


