import { ApiResponse } from '../ApiResponse';

export interface Exams extends ApiResponse {
  exams: Exam[];
}

export interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}
