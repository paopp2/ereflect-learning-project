import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { AboutModule } from './features/about/about.module';
import { AuthModule } from './features/auth/auth.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AboutModule,
    ContactUsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
