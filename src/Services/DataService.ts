import axios from "axios";
import DataModel from "../Models/DataModel";
import appConfig from "../Utils/AppConfig";

class DataService {
    public async getData(): Promise<DataModel> {

        const response = await axios.get<DataModel>(appConfig.dataUrl);
        const data = response.data;
        return data;
    }
}