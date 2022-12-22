export interface Filter {
  propertyName: string;
  operator: 'in' | '=';
  value: any;
}
