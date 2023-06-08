import { Dispatch } from 'redux';
import { SideBarPayloadPageNameEnum, SideBarReducerPageNameEnum } from '../../types/enums'
import { SideBarActionTypes } from '../../types/types';


export const PageChangeEvent = (payload: SideBarPayloadPageNameEnum): SideBarActionTypes => {
    return {
        type: SideBarReducerPageNameEnum.SELECTED_PAGE,
        payload: payload
    };
};
