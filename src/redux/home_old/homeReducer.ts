import { homeReducerEnums } from "../../types/enums";
import { homeActionType } from "../../types/types";

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
    _id: number | string;
    name: string;
    avatarPath: string;
    fontAwesomeIcon: string;
    backgroundColor: string;
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
        _id: 1,
        name: 'LinkedIn',
        avatarPath: 'https://linkedin.com/user',
        fontAwesomeIcon: 'fa-linkedin',
        backgroundColor: '#0077B5',
      },
      // Add more social media records...
    ],
  };
  // reducer  
export const homeReducer = (state: homeReducerInitialState = initialState, action: homeActionType): homeReducerInitialState => {
    // todo
    switch (action.type) {
        // todo
        case homeReducerEnums.GET_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case homeReducerEnums.GET_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case homeReducerEnums.GET_ALL_HOME_DATA :{
          // todo
          return {
            ...state
          }
        }

        case homeReducerEnums.GET_SUCCESS_GREETINGS: {

            return {
                ...state,
                // todo
            }
        }
        case homeReducerEnums.GET_SUCCESS_SOCIAL_MEDIA: {
            return {
                ...state,
                // todo
            }
        }

        default: {
            return state
        }
    }
    }


    // here above socialMediaRedord is a record that is provided by ts. in this we can give a type for a 
    // array of objects that objects having paramenter with _id name link fontAwesomeIcon backgroundColor 
    //  can only be created 

    //  a record is always created with a unique key and value pair above key is index for array and 
    // value is out desired objects
