export interface Compatibility {
  app_step: number;
  app_test: TestQuestions;
}

export interface TestQuestions {
  test_question: string;
  test_answers: string[];
}
