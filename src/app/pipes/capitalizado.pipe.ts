import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    console.log(value);
    value = value.toLowerCase();
    let nombres = value.split(' ');
    if (todas) {
      nombres = nombres.map(
        (nombre) => nombre[0].toUpperCase() + nombre.substr(1)
      );
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }
}
