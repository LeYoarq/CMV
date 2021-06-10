import { Component, OnInit } from '@angular/core';

// IMPORTO:
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  title = 'Formulario / REACTIVO';
  form: FormGroup;  // definimos variable para el formulario -> TAMBIÉN EN el HTML !!!!!!!
  constructor(private fctrl: FormBuilder) {   // a través de del constructor inyectamos "FormBuilder" para poder crear un Objeto que ->
    // con "form" creamos el grupo de controles de Validación por campo del formulario                         -> represente los controles del formulario
    this.form = fctrl.group({
      codigo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ])],
      nombre: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log("codigo . " + this.form.controls['codigo'].value);
    console.log("nombre . " + this.form.controls['nombre'].value);
    console.log(JSON.stringify(this.form.value));
  }

  ngOnInit(): void {
  }

}
