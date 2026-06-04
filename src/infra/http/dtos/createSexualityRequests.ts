export interface CreateSexualityRequests {
  id: string;
  title: string;
  description: string;
  acronym: string;
}
export type UpdateSexualityRequests = Partial<CreateSexualityRequests>;
