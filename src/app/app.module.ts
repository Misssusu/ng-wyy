import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    // 指令、组件、管道
    AppComponent
  ],
  imports: [
    // 引入依赖模块
    CoreModule
  ],
  bootstrap: [AppComponent]  // 入口组件
})
export class AppModule { }
