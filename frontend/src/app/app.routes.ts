import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Biography } from './biography/biography';
import { Timeline } from './timeline/timeline';
import { Quiz } from './quiz/quiz';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'biography',
    component: Biography
  },

  {
    path: 'timeline',
    component: Timeline
  },

  {
    path: 'gallery',
    component: Gallery
  },

  {
    path: 'quiz',
    component: Quiz
  },

  {
    path: 'about',
    component: About
  }

];