import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../services/api';
import { Timeline as TimelineModel } from '../models/timeline';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline implements OnInit {

  timeline: TimelineModel[] = [];
  selectedTimeline: TimelineModel | null = null;
  isLoading = true;
  errorMessage = '';
  // Số skeleton items hiển thị khi đang load (khớp với số item thực tế)
  skeletonItems = [1, 2, 3, 4, 5, 6, 7];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getTimeline().subscribe({
      next: (data) => {
        this.timeline = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Không thể tải dữ liệu. Vui lòng thử lại.';
        this.isLoading = false;
      }
    });
  }

  selectItem(item: TimelineModel): void {
    // Nếu click lại item đang mở thì đóng
    if (this.selectedTimeline?.id === item.id) {
      this.selectedTimeline = null;
    } else {
      this.selectedTimeline = item;
    }
  }

  isSelected(id: number): boolean {
    return this.selectedTimeline?.id === id;
  }
}