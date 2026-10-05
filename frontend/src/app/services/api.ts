import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import { Timeline } from '../models/timeline';
import { Quiz, QuizSubmit, QuizResult } from '../models/quiz';


@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl = 'http://127.0.0.1:8000';

  // Cache: dữ liệu timeline & quiz hầu như không đổi trong session
  // shareReplay(1) giữ lại response cuối, các lần subscribe sau dùng lại ngay
  private timeline$: Observable<Timeline[]> | null = null;
  private quiz$: Observable<Quiz[]> | null = null;

  constructor(private http: HttpClient) {}


  // =========================
  // TIMELINE (có cache)
  // =========================

  getTimeline(): Observable<Timeline[]> {
    if (!this.timeline$) {
      this.timeline$ = this.http
        .get<Timeline[]>(`${this.apiUrl}/api/timeline`)
        .pipe(shareReplay(1));
    }
    return this.timeline$;
  }

  // Xóa cache nếu cần refresh thủ công
  clearTimelineCache(): void {
    this.timeline$ = null;
  }


  // =========================
  // TIMELINE DETAIL
  // =========================

  getTimelineDetail(id: number): Observable<Timeline> {
    return this.http.get<Timeline>(`${this.apiUrl}/api/timeline/${id}`);
  }


  // =========================
  // QUIZ (có cache)
  // =========================

  getQuiz(): Observable<Quiz[]> {
    if (!this.quiz$) {
      this.quiz$ = this.http
        .get<Quiz[]>(`${this.apiUrl}/api/quiz`)
        .pipe(shareReplay(1));
    }
    return this.quiz$;
  }

  // Xóa cache nếu cần refresh thủ công
  clearQuizCache(): void {
    this.quiz$ = null;
  }


  // =========================
  // SUBMIT QUIZ (không cache - luôn gọi thật)
  // =========================

  submitQuiz(data: QuizSubmit): Observable<QuizResult> {
    return this.http.post<QuizResult>(`${this.apiUrl}/api/quiz/submit`, data);
  }

}