import Axios, { AxiosInstance } from "axios";
import { Config } from "../Config/config";
import { local } from "../Config/local";
import { production } from "../Config/production";

export class Container {

  public getApi(): AxiosInstance {
    return Axios.create({
      baseURL: this.config.apiBaseUrl
    });
  }

  public get config(): Config {
    switch (process.env.ENV) {
      case "local": return local;
      default: return production;
    }
  }

}
