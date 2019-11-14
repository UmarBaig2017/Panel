
import dispatcher from "./dispatcher";

export function handlelogin(){
    dispatcher.dispatch({
        type: "LOGIN"
    })
}
export function handlelogout(val){
    dispatcher.dispatch({
        type: "LOGOUT"
    })
}

// export const COLOR_APP_ACTIONS = {
//     CHANGE_COLOR: 'colorAppActions.ChangeColor'
// };

// export function changeColor(update) {
//     dispatcher.dispatch({
//         type: COLOR_APP_ACTIONS.CHANGE_COLOR,
//         value: colorName
//     })
// }
