import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsComponent } from './stats/stats.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainContentComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'recognition', component: RecognitionComponent },
  { path: 'login', component: AuthComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
