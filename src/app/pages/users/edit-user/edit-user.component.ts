import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      date: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
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
        this.router.navigate(['panel-user']);
      });
    } else {
      // Verifica campos específicos
      const formControls = this.userForm.controls;
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
      if (Object.values(this.userForm.value).every((value) => !value)) {
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
