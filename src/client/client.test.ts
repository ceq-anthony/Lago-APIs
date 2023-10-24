import { describe, it, expect, beforeAll } from "vitest";

import { LagoClient } from "./client.class";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

describe.concurrent("Client", () => {
  const { LAGO_API_KEY, LAGO_BASE_URL } = process.env;

  let client: LagoClient;

  beforeAll(() => {
    if (!LAGO_API_KEY)
      throw "No LAGO_API_KEY environment variable found";
    if (!LAGO_BASE_URL)
      throw "No LAGO_BASE_URL environment variable found";

    client = new LagoClient(LAGO_API_KEY, LAGO_BASE_URL);
  });

  it("List all plans", async () => {
    const plans = await client.plans.listAllPlans({ page: 1, perPage: 10 });
    console.log(plans);

    expect(plans).toBeDefined();
  });

});
