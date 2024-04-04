export interface FlyingMachineSearchParams {
  page: number;
  pageSize: number;
}

export interface Machine {
  id: number;
  attributes: {
    Name: string;
    Attack: number;
    Defense: number;
    Speed: number;
    Agility: number;
    Capacity: number;
    Image: any;
  };
}
