import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ListarDepartamentoComponent } from './components/departamento/listar-departamento/listar-departamento.component';
import { CadastrarDepartamentoComponent } from './components/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { CadastrarCargoComponent } from './components/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { ListarCargoComponent } from './components/cargo/listar-cargo/listar-cargo.component';
import { ListarFuncionarioComponent } from './components/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { BotaoExcluirComponent } from './components/botao-acoes/botao-excluir.component';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';
import { DialogWindowComponent } from './shared/excluir/dialog-window/dialog-window.component';
import { BotaoComponent } from './shared/excluir/botao/botao-dialog.component';
import { Toolbar2Component } from './components/toolbar2/toolbar2.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarDepartamentoComponent,
    CadastrarDepartamentoComponent,
    CadastrarCargoComponent,
    ListarCargoComponent,
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    BotaoExcluirComponent,
    BotaoComponent,
    DialogWindowComponent,
    AlertMessageComponent,
    Toolbar2Component,
    Menu2Component,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
