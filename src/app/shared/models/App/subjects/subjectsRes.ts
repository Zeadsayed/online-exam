import { ApiResponse } from '../ApiResponse';

export interface Subjects extends ApiResponse {
  subjects: Subject[];
}

export interface Subject {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}
