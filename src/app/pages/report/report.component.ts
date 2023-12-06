import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reportForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre_paciente: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      edad: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      comentario: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.reportForm.valid) {
      // Realiza la lógica de registro aquí
      Swal.fire({
        title: 'Éxito',
        text: 'Registro exitoso',
        icon: 'success',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        // Redirige al usuario o realiza otra acción después de 3 segundos
        this.router.navigate(['panel']);
      });
    } else {
      // Verifica campos específicos
      const formControls = this.reportForm.controls;
      for (const controlName in formControls) {
        if (formControls.hasOwnProperty(controlName)) {
          const control = formControls[controlName];

          if (control.invalid) {
            let errorMessage = 'Campo inválido';

            if (control.errors) {
              if (control.errors['required']) {
                errorMessage = 'Campo obligatorio';
              } else if (control.errors['email']) {
                errorMessage = 'Correo electrónico inválido';
              } else if (control.errors['pattern']) {
                errorMessage = 'Número de teléfono inválido';
              }
            }

            Swal.fire({
              title: 'Error',
              text: `${
                controlName.charAt(0).toUpperCase() + controlName.slice(1)
              }: ${errorMessage}`,
              icon: 'error',
              position: 'top-end',
              toast: true,
              showConfirmButton: false,
              timer: 3000,
            });

            break; // Detener el bucle después de mostrar el primer error
          }
        }
      }

      // Verifica si todo el formulario está vacío
      if (Object.values(this.reportForm.value).every((value) => !value)) {
        Swal.fire({
          title: 'Error',
          text: 'Todos los campos son obligatorios',
          icon: 'error',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  }
}
