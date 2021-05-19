import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BitcoinService } from './bitcoin.service';
import { TaxabitcoinComponent } from './taxabitcoin/taxabitcoin.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TemporizadorService } from './temporizador.service';

@NgModule({
  imports:[ 
    BrowserModule, FormsModule, RouterModule.forRoot([
     {path: "taxabitcoin", component: TaxabitcoinComponent}
    ]),
    HttpClientModule
    ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, TaxabitcoinComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, TemporizadorService]
})
export class AppModule { }
