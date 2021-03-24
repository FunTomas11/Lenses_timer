
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularTiltModule } from 'angular-tilt';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ChangeDataDialog, GlassCardComponent } from './timer/glass-card/glass-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    GlassCardComponent,
    ChangeDataDialog
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    AngularTiltModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    // RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
