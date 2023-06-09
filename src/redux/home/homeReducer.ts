import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { homeReducerEnums } from "../../types/enums";
import { homeActionType } from "../../types/types";
import { FetchAllHomePageData } from '../../api/FetchAllHomePageData';
import { v4 as uuidv4 } from 'uuid';

export interface greetingOptions {
    Name: string;
    logoName: string;
    Description: string;
    nickName: string;
    resumeLink: string;
    portfolio_repository: string;
    githubProfile: string;
}
export type SocialMediaRecord = {
    id: number | string;
    name: string;
    avatarPath: string;
    linkPath: string;
};

export interface homeReducerInitialState {
    loading: boolean;
    error: boolean;
    greeting: greetingOptions;
    socialMediaLinks: SocialMediaRecord[];
}

// Usage example:
const initialState: homeReducerInitialState = {
    loading: false,
    error: false,
    greeting: {
        Name: 'John',
        logoName: 'Logo',
        Description: 'Hello',
        nickName: 'Johnny',
        resumeLink: 'resume.pdf',
        portfolio_repository: 'https://github.com/username/repo',
        githubProfile: 'https://github.com/username',
    },
    socialMediaLinks: [
        {
            id: 1,
            name: 'LinkedIn',
            avatarPath: 'https://linkedin.com/user',
            linkPath: 'https://linkedin.com/user'
        },
        // Add more social media records...
    ],
};


export const fetchAllUser = createAsyncThunk('homeReducer/fetchAllUser', FetchAllHomePageData)


const homeReducer = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        deleteSocialLink: (state, action) => {
            return {
                ...state,
                socialMediaLinks: state.socialMediaLinks.filter((link: SocialMediaRecord) => link.id !== action.payload)
            }
        },
        addSocialLink: (state, action) => {
            const socialMediaLinks = {
                ...action.payload,
                id: uuidv4()
            }
            return {
                ...state,
                socialMediaLinks: [...state.socialMediaLinks, socialMediaLinks]
            }
        },
        addBasicInformations: (state, action) => {
            return {
                ...state,
                greeting: {
                    ...state.greeting,
                    ...action.payload
                }
            }
        }


        // todo synchronous operations
        //         case homeReducerEnums.GET_LOADING: {
        //     return {
        //         ...state,
        //         loading: true,
        //         error: false,
        //     }
        // }
        //         case homeReducerEnums.GET_ERROR: {
        //     return {
        //         ...state,
        //         loading: false,
        //         error: true,
        //     }
        // }
        //         case homeReducerEnums.GET_ALL_HOME_DATA : {
        //     // todo
        //     return {
        //         ...state
        //     }
        // }

        //         case homeReducerEnums.GET_SUCCESS_GREETINGS: {

        //     return {
        //         ...state,
        //         // todo
        //     }
        // }
        //         case homeReducerEnums.GET_SUCCESS_SOCIAL_MEDIA: {
        //     return {
        //         ...state,
        //         // todo
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUser.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: false,
            }
        })
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            console.log(state)
            return {
                ...state,
                loading: false,
                greeting: action.payload.greeting,
                socialMediaLinks: action.payload.socialMediaLinks
            }
        })
        builder.addCase(fetchAllUser.rejected, (state) => {
            return {
                ...state,
                loading: false,
                error: true,
            }
        });
    }
})
export const { deleteSocialLink, addSocialLink, addBasicInformations } = homeReducer.actions

export default homeReducer
