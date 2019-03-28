import Axios, { AxiosInstance } from "axios";
import { Config } from "../Config/config";
import { development } from "../Config/development";
import { production } from "../Config/production";
import { StopData } from "../App/Form/StopSelector/StopSelector";
import stops from "../Data/stops.json";

export class Container {

  public getApi(): AxiosInstance {
    return Axios.create({
      baseURL: this.config.apiBaseUrl
    });
  }

  public get config(): Config {
    switch (process.env.NODE_ENV) {
      case "development": return development;
      default: return production;
    }
  }

  public getStops(): StopData {
    return stops as StopData;
  }

}
