import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MagicModule } from '@magic-xpa/angular';
import { MagicAngularMaterialModule } from '@magic-xpa/angular-material-core';
import { MagicGenLibModule } from './magic/magic.gen.lib.module';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MagicModule.forRoot(),
    MagicAngularMaterialModule,
    MagicGenLibModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
