import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './letters/letters.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PackageComponent } from './package/package.component';
import { FinancialTransactionComponent } from './financial-transaction/financial-transaction.component';


const appRoutes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'letter', component: LettersComponent },
  { path: 'package', component: PackageComponent },
  { path: 'finance', component: FinancialTransactionComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    StartComponent,
    PackageComponent,
    FinancialTransactionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
