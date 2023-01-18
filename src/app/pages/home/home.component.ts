import { Component, OnInit } from '@angular/core';
import { ApiPostsService } from 'src/app/services/api-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entrada: any = [];
  // UTILIZO EL SERVICIO api-post-service PARA LLAMAR A MI METODO getdatos()
  constructor(private llamarServicio: ApiPostsService) { }

  ngOnInit(): void {
    // LLAMO A MI FUNCION PARA QUE SE EJECUTE AL INICIAR.
    this.getInfoServicio();
  }
  // CREO UNA FUNCION
  getInfoServicio() {
    
    this.llamarServicio.getDatos().subscribe(
      res => {
        // USO EL METODO FILTER SOBRE EL EL ARREGLO PARA QUE ME TOME CUYOS ID SEAN MAYOR QUE 61 -
        // POR ULTIMO SE LE ASIGNA EL RESULTADO FILTRO A MI VARIABLE entrada
        this.entrada = res.filter((data:any) => data.id >= 61);
        // PRUEBA POR CONSOLE PARA VER SI IMPRIME LOS DATOS
        // console.log(this.entrada);
      },
      err => {
        //MENSAJE DE ERROR POR CONSOLE
        console.log(err);
      }
    );
  }
}
