import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddNodeComponent } from './add-node/add-node.component';
import { ListNodeComponent } from './list-node/list-node.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddNodeComponent,
    ListNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'addList',
        component:AddNodeComponent,
      },

      {
        path:'listNode',
        component:ListNodeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
