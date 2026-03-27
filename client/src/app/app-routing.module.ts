import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestNotifComponent } from './test-notif/test-notif.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test-notif' },
  { path: 'test-notif', component: TestNotifComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
