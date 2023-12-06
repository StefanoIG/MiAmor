import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  users = [
    { email: 'admin@example.com', password: 'adminpassword', role: 'admin' },
    {
      email: 'especialista@example.com',
      password: 'especialistapassword',
      role: 'especialista',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (!this.user.email || !this.user.password) {
      // Muestra un mensaje de error si los campos están vacíos
      Swal.fire({
        title: 'Error',
        text: 'Ambos campos son obligatorios',
        icon: 'error',
        position: 'top-end', // Posición en la parte superior derecha
        toast: true, // Mostrar como toast
        showConfirmButton: false, // No mostrar botón de confirmación
        timer: 3000, // Duración en milisegundos
      });
      return; // Detén el proceso de inicio de sesión
    }

    const foundUser = this.users.find(
      (u) => u.email === this.user.email && u.password === this.user.password
    );

    if (foundUser) {
      // Usuario autenticado
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      // Redirige al usuario según su rol
      if (foundUser.role === 'admin') {
        // Redirige al panel de administración
        Swal.fire({
          title: 'Éxito',
          text: 'Has iniciado sesion como admin',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });
        this.router.navigate(['panel']);
      } else if (foundUser.role === 'especialista') {
        // Redirige al panel de bibliotecario
        Swal.fire({
          title: 'Éxito',
          text: 'Has iniciado sesion como especialista',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });
        this.router.navigate(['panel']);
      }
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      Swal.fire({
        title: 'Error',
        text: 'Tus credenciales son incorrectas',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }
}
