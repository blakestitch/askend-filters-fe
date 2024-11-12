export interface FilterModel {
  name: string;
  criterias: Criteria[]
}

export interface Criteria {
  type: string;
  comparingCondition: string;
  value: string;
}


