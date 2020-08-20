import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Paulina Guerrero';
  nombre2: string = 'PaUlInA GuErReRo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '20',
    },
  };

  promesa: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma: string = 'es';
  activar: boolean = true;

  videoUrl: string = 'https://www.youtube.com/embed/2Vv-BfVoq4g';
  cambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }
}
