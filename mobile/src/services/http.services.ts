require('dotenv').config();
import axios from "axios";

export class HttpSerivce {
  baseUrl: string | undefined;
  fetchingService: any;
  apiVersion: string;
  constructor(
    baseUrl = "http://localhost:5000",
    fetchingService = axios,
    apiVersion = "api"
  ) {
    console.log(process.env.REACT_APP_SERVER_URL, "baseUrl"); // Can't get system variable
    console.log('process.env', process.env)

    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem("token"),
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: {
    data: string;
    url: string;
  }) {
    return configWithoutDataAndUrl;
  }

  get(config: any, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
  post(config: {headers: any; url: string; data: any}, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config: {headers: any; url: string; data: any}, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
  delete(config: {headers: any; url: string; data: any}, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      {data: config.data},
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
