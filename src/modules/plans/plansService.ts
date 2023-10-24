import { Client, PlansPaginated } from "lago-javascript-client"
import { ListAllPlansOptions } from "./plan.types";

export class Plans {
  constructor(private client: ReturnType<typeof Client>) { }

  /**
   * List all plans
   *
   * @description Returns a paginated list of plans
   *
   * @docs https://docs.lago.com/api/plans#list-all-plans
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of plan objects ordered by `created_at` (descending)
   */
  async listAllPlans(options: ListAllPlansOptions): Promise<PlansPaginated> {
    const { page, perPage } = options;
    const { data } = await this.client.plans.findAllPlans({ page, per_page: perPage });
    return data;
  }
}