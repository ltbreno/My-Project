import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-projetos',
    standalone: true,
    templateUrl: './projetos.component.html',
    styleUrl: './projetos.component.css',
    imports: [HeaderComponent]
})
export class ProjetosComponent implements OnInit {
    text: string = 'Meu Portfolio';
    link: string = 'https://github.com/ltbreno'

    text1: string = 'Audio Player';
    link1: string = 'https://github.com/ltbreno/Audio-Player'

    text2: string = 'Banco em TypeScript';
    link2: string = 'https://github.com/ltbreno/Ts-Bank'

    text3: string = 'Meu Blog';
    link3: string = 'https://github.com/ltbreno/Curriculo_Web'

    text4: string = 'Pokedex em JavaScript';
    link4: string = 'https://github.com/ltbreno/Pokedex'

    text5: string = 'Blog em Angular';
    link5: string = 'https://github.com/ltbreno/Angular-Blog'


    constructor () { }
        ngOnInit(): void {

        }
    }

