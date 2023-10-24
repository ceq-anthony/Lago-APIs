interface ChargeProperty {
  amount: number;
  free_units: number;
  package_size: number;
}

interface GraduatedRange {
  from_value: number;
  to_value: number | null;
  flat_amount: number;
  per_unit_amount: number;
}

interface VolumeRange {
  from_value: number;
  to_value: number | null;
  flat_amount: number;
  per_unit_amount: number;
}

interface GroupProperty {
  group_id: string;
  invoice_display_name: string;
  values: {
    amount: number;
  };
}

interface Charge {
  lago_id: string;
  lago_billable_metric_id: string;
  billable_metric_code: string;
  created_at: string;
  charge_model: string;
  invoiceable: boolean;
  invoice_display_name: string;
  pay_in_advance: boolean;
  prorated: boolean;
  min_amount_cents: number;
  properties: ChargeProperty | GraduatedRange[] | VolumeRange[] | Record<string, any>;
  group_properties: GroupProperty[];
}

interface Tax {
  lago_id: string;
  name: string;
  code: string;
  description: string;
  rate: number;
  applied_to_organization: boolean;
  add_ons_count: number;
  charges_count: number;
  customers_count: number;
  plans_count: number;
  created_at: string;
}

interface Plan {
  lago_id: string;
  name: string;
  invoice_display_name: string;
  created_at: string;
  code: string;
  interval: string;
  description: string;
  amount_cents: number;
  amount_currency: string;
  trial_period: number;
  pay_in_advance: boolean;
  bill_charges_monthly: boolean;
  active_subscriptions_count: number;
  draft_invoices_count: number;
  charges: Charge[];
  taxes: Tax[];
}

interface Meta {
  current_page: number;
  next_page: number;
  prev_page: number;
  total_pages: number;
  total_count: number;
}

interface PlanResponse {
  plans: Plan[];
  meta: Meta;
}


export interface ListAllPlansOptions {
  /**
   * Only return plans belonging to the store with this ID
   */
  page?: number;
  /**
   * Only return plans belonging to the variant with this ID
   */
  perPage?: number;
}

export type ListAllPlansResult = PlanResponse;

