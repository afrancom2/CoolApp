import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productos = [
    {id: 1,
    nombre: 'huevo',
    categoria: 'comida',
    descripcion: 'Gran huevo',
    precio: 2},
    {id: 2,
    nombre: 'Coca',
    categoria: 'Perro',
    descripcion: 'Cocanavirus',
    precio: 2},
    {id: 3,
    nombre: 'Celuco',
    categoria: 'tecnologia',
    descripcion: 'Celular',
    precio: 4}
  ];

  getAllProducts() {
    return this.productos;
  }

  getProductoById(id: any) {
    return this.productos.filter(product => product.id == id);
  }

  constructor() { }
}
