import { Component, Input } from '@angular/core';

@Component ( {
    selector: 'app-product',
    template: ` <h2>
                    Nombre:
                    <a [routerLink]="['/productos', producto.id]">{{producto.nombre}}</a>
                </h2>
                <div>Precio: {{producto.precio}}</div>`
})
export class ProductComponent {
    @Input() producto;
}