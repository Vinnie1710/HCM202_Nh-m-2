export interface Quiz {
  id: number;
  question: string;
  options: string[];
}

export interface QuizAnswer {
  question_id: number;
  user_answer: number;
}

export interface QuizSubmit {
  answers: QuizAnswer[];
}

export interface QuizResultItem {
  question_id: number;
  user_answer: number;
  correct_answer: number;
  is_correct: boolean;
}

export interface QuizResult {
  score: number;
  total: number;
  message: string;
  results: QuizResultItem[];
}