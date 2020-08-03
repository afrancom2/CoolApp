import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productos = [
    {id: 1,
    nombre: 'Huevo',
    categoria: 'Comida',
    descripcion: 'Se presentan protegidos por una cáscara y son ricos en proteínas y lípidos',
    precio: 300},
    {id: 2,
    nombre: 'Coca',
    categoria: 'Perro',
    descripcion: 'Cocanavirus',
    precio: 150000},
    {id: 3,
    nombre: 'Celucar',
    categoria: 'Tecnologia',
    descripcion: 'teléfono móvil​ es un teléfono portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico.',
    precio: 700000},
    {id: 4,
    nombre: 'Palkel',
    categoria: 'Pequeña',
    descripcion: 'Nacida entle cubano',
    precio: 1298389127389712893712}
  ];

  getAllProducts() {
    return this.productos;
  }

  getProductoById(id: any) {
    return this.productos.filter(product => product.id == id);
  }

  constructor() { }
}
