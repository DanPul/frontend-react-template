import { createStore } from "redux";
import DataModel from "../Models/DataModel";

// Application level State:
export class DataState {
    public data: DataModel[] = [];
}

// List of actions that interacts with the data:
export enum DataActionType {
    FetchData = "FetchData",
    AddData = "AddData",
    UpdateData = "UpdateData",
    DeleteData = "DeleteData"
}

export interface DataAction {
    type: DataActionType;
    payload: any;
}

// What to do for each action:
export function dataReducer(currentState = new DataState(), action: DataAction): DataState {
    const newState = { ...currentState };

    switch(action.type) {
        case DataActionType.FetchData:
            newState.data = action.payload;
            break;
        
        case DataActionType.AddData:
            break;
        
        case DataActionType.UpdateData:
            break;
        
        case DataActionType.DeleteData:
            newState.data.splice(0);
            break;
        
    }
    
    return newState;
}

// Redux store:
export const dataStore = createStore(dataReducer);