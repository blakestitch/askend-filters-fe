export interface FilterResource {
  name: string;
  criterias: Criteria[]
}

export interface Criteria {
  type: string;
  comparingCondition: string;
  value: string;
}
