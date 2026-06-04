export interface CreateGenderRequests {
  id: string;
  title: string;
  description: string;
  acronym: string;
}

export type UpdateGenderRequests = Partial<CreateGenderRequests>;
