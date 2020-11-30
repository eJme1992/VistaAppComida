import { Component, OnInit } from '@angular/core';
// EJME SE IMPORTA PARA QUE FUNCIONE LOS PARAMETROS
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public nombre: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router
    )
     { }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.params.var;
  }

  //Redireccion pasando parametros
  redirection(): void {
      this.router.navigate(['prueba,edwin']);
  }

}
