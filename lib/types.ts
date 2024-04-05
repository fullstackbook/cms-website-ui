export interface FlyingMachineSearchParams {
  Attack: number;
  Defense: number;
  Agility: number;
  Speed: number;
  Capacity: number;
  page: number;
  pageSize: number;
  weapons: string;
  sort: string;
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
    weapons: {
      data: Weapon[];
    };
  };
}

export interface Weapon {
  id: number;
  attributes: {
    Name: string;
  };
}

export interface CreateContactMessageFormState {
  errors?: {
    Name?: string[];
    Email?: string[];
    Message?: string[];
  };
  message?: string;
  success?: string;
}
