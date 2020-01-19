import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './letters/letters.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PackageComponent } from './package/package.component';
import { FinancialTransactionComponent } from './financial-transaction/financial-transaction.component';
import { LettersService } from './services/letters.service';
import { PackagesService } from './services/packages.service';
import { CitiesService } from './services/cities.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AllLettersComponent } from './all-letters/all-letters.component';
import { AddressesComponent } from './addresses/addresses.component';
import { MatSelectModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';

const appRoutes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'letter', component: LettersComponent },
  { path: 'package', component: PackageComponent },
  { path: 'finance', component: FinancialTransactionComponent },
  { path: 'allLetters', component: AllLettersComponent },
  { path: 'allPackages', component: AllPackagesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    StartComponent,
    PackageComponent,
    FinancialTransactionComponent,
    UserComponent,
    AddNewUserComponent,
    AllLettersComponent,
    AddressesComponent,
    AllPackagesComponent,
  ],
  entryComponents: [
    UserComponent,
    AddNewUserComponent,
    AddressesComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, { /*enableTracing: true*/ } // <-- debugging purposes only
    ),
    MatTableModule,
    MatSelectModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    MatDialogModule,
    MatInputModule,
    LettersService,
    PackagesService,
    CitiesService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
