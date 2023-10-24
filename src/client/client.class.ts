import { Client } from "lago-javascript-client";
import { Plans } from "~/modules/index";

export class LagoClient {
  private lagoSDK: ReturnType<typeof Client>;
  public plans: Plans;

  constructor(apiKey: string, baseUrl: string) {
    this.lagoSDK = Client(apiKey, { baseUrl });
    this.plans = new Plans(this.lagoSDK);
  }
}
