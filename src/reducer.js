import { act } from "react-dom/test-utils";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDz83ZiKzRwm2O30y7b-5bHZcMTTAmbipMhHkPS4NVyMQVpYU0n1JvTzd9-KuA2J8dK3cU6-g5ST3EUWEPX14yqDb0gO_Mfmk8OBsQRhyCA3iyaz7Rjuc7sRZKu3T7VP0JDuW-2MxrnS3LeRH0AyX-2qB6YgpyLd5BSsLAIqyGn-cc64y3L",
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.state,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }

}

export default reducer;