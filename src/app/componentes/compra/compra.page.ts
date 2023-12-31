import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html'
})
export class CompraPage  {
    public migrupo1: FormGroup;
    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router: Router) {
    this.migrupo1 = this.crearMiFormulario();
  }
  get codigo() { return this.migrupo1.get('codigo'); }
  get nombre() { return this.migrupo1.get('nombre'); }
  get direccion() { return this.migrupo1.get('direccion'); }


  crearMiFormulario() {
    return new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
    });
  }
  salvarFormulario(): void {
    this.router.navigate(['detacompra']);
    
   //codigo de firebase para agregar
  }

}

