import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Views
import { BizCurrenciesViewComponent } from './public/views/currencies/currencies-view.component';
import { BizDatesViewComponent } from './public/views/dates/dates-view.component';
import { BizHomeViewComponent } from './public/views/home/home-view.component';
import { BizTranslationsViewComponent } from './public/views/translations/translations-view.component';


const ROUTES: Routes = [
  { path: "", component: BizHomeViewComponent, data: { menuItem: 1 } },
  { path: "currencies", component: BizCurrenciesViewComponent, data: { menuItem: 2 } },
  { path: "dates", component: BizDatesViewComponent, data: { menuItem: 3 } },
  { path: "translations", component: BizTranslationsViewComponent, data: { menuItem: 4 } },

  { path: "**", pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
