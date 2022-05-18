import { ActionType } from "../action-types"
import { Dispatch } from "redux"

// actions described here

export const expandContainer = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.EXPAND,
        })
    }
}

export const contractContainer = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.CONTRACT,
        })
    }
}