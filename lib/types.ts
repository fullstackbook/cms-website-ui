export interface FlyingMachineSearchParams {
  Attack: number;
  Defense: number;
  Agility: number;
  Speed: number;
  Capacity: number;
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
