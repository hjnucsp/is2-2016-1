'use strict';

import {Component, Inject} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Response} from 'angular2/http';
import {RouterLink} from 'angular2/router';
import {ArtistaService} from '../service/artista.service';

@Component({
    selector: 'test',
    templateUrl: 'app/artista/artista.component.html',
    providers: [ArtistaService],
    directives: [CORE_DIRECTIVES, RouterLink]
})

export class ArtistaComponent {

/*
en artistas se guardara la lista obtenido del JSON
*/
    private jsonResponse: string;
    private message: string;
    private artistas: Array<any>;

    constructor(@Inject(ArtistaService) private artistaService: ArtistaService) {}

/*
en la llamada de artista cargamos los datos de los artistas,
seran mostradas en artista.component.html
*/
    ngOnInit() {
        this.artistaService.getArtistas().subscribe(
            data => {this.jsonResponse = JSON.stringify(data),
                     this.message = data[0].name, this.artistas = data}
        );
    }
}