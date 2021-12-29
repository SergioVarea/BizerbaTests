import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Modules
import { TranslateModule } from '@ngx-translate/core';

// Shell
import { BizPublicShellComponent } from './public-shell.component';
import { BizPublicFooterComponent } from './footer/footer.component';
import { BizPublicHeaderComponent } from './header/header.component';
import { BizPublicNavbarComponent } from './navbar/navbar.component';
import { BizPublicSidenavComponent } from './sidenav/sidenav.component';

// Shared
import { BizLogoModule } from 'src/app/shared/components/logo/logo.module';
@NgModule({
  imports: [
    BrowserModule,
    BizLogoModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),

  ],
  providers: [],
  declarations: [
    BizPublicShellComponent,
    BizPublicSidenavComponent,
    BizPublicNavbarComponent,
    BizPublicHeaderComponent,
    BizPublicFooterComponent
  ],
  exports: [
    BizPublicShellComponent,
    BizPublicSidenavComponent,
    BizPublicNavbarComponent,
    BizPublicHeaderComponent,
    BizPublicFooterComponent
  ],
})
export class BizPublicShellModule {}
