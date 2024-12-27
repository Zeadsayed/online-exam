import { Exam } from './examsRes';
import { Subject } from './subjectsRes';

export interface Questions {
  message: string;
  questions: Question[];
}

export interface Question {
  answers: Answer[];
  type: string;
  _id: string;
  question: string;
  correct: string;
  subject: Subject;
  exam: Exam;
  createdAt: string;
}

export interface Answer {
  answer: string;
  key: string;
}
