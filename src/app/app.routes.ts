import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { NgModule } from '@angular/core';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    {
        path: '', component: BodyComponent
    } ,
    {
        path: 'projetos', component: ProjetosComponent
    },
]

@NgModule ({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
