export interface Department {
  id: number;
  name: string;
  city: string;
  county: string;
  state: string;
  stateAbbr: string;
  excerpt: string;
  agencyAbbr: string;
  slug: string;
}

export interface DepartmentsArray {
  departments: Department[];
}
