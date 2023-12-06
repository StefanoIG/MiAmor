import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public currentUser: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUser = storedUser ? JSON.parse(storedUser) : null;

    // Redirige desde panel-users a panel si el usuario no es administrador
    if (this.router.url === '/panel-users' && this.currentUser && this.currentUser.role !== 'admin') {
      this.router.navigate(['/panel']);
    }
  }

  logout() {
    // Elimina la información del usuario del localStorage u otro almacenamiento
    localStorage.removeItem('currentUser');
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/']);
  }

  delete() {
    Swal.fire({
      title: 'Éxito',
      text: 'Registro eliminado',
      icon: 'success',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
