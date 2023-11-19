import {Component, OnInit, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioLog } from 'src/app/models/usuarioLog';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})

export class RegistroLoginComponent implements OnInit {
	// SERVICIO INJECTABLE
	usuariosService: UsuariosService = inject(UsuariosService);

	usuarioActual: usuarioRegistrado = new usuarioRegistrado; // El usuario que está registrado ahora
	usuarioRegistradoList: usuarioRegistrado[] = [];
	  
	registerForm: FormGroup;
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.usuarioRegistradoList = this.usuariosService.getUsuarioRegistradoList();
		this.usuarioActual = this.usuariosService.getUsuarioActual();
	}

  
	ngOnInit() {
		// REGISTER ---------------------------

		this.registerForm = this.fb.group( {
			nombre: ['', [
				Validators.required,
				Validators.maxLength(40),
				Validators.minLength(2),
				Validators.pattern(/^[a-z ,.'-]+$/i)
			]],
			apellido: ['', [
				Validators.required,
				Validators.maxLength(60),
				Validators.minLength(2),
				Validators.pattern(/^[a-z ,.'-]+$/i)
			]],
			username: ['', [
				Validators.required,
				Validators.maxLength(40),
				Validators.minLength(4),
				Validators.pattern("^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")
			]],
			email: ['', [
				Validators.required,
				Validators.email
			]],
			password: ['', [
				Validators.required,
				Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/)
			]],
		});

		// LOGIN --------------------

		this.loginForm = this.fb.group( {
			username_login: ['', [
				Validators.required,
				Validators.maxLength(40),
				Validators.minLength(4),
				Validators.pattern("^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")
			]],
			password_login: ['', [
				Validators.required,
				Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/)
			]],
		});
	}

	getRegisterNombre() {
		return this.registerForm.get("nombre") || this.fb.control(null);
	}

	getRegisterApellido() {
		return this.registerForm.get("apellido") || this.fb.control(null);
	}

	getRegisterUsername() {
		return this.registerForm.get("username") || this.fb.control(null);
	}

	getRegisterEmail() {
		return this.registerForm.get("email") || this.fb.control(null);
	}

	getRegisterPassword() {
		return this.registerForm.get("password") || this.fb.control(null);
	}


	onSubmitRegister(): void {
		let nuevoUsuarioRegistrado: usuarioRegistrado = new usuarioRegistrado;

		nuevoUsuarioRegistrado.nombre = this.registerForm.controls["nombre"].value;
		nuevoUsuarioRegistrado.apellido = this.registerForm.controls["apellido"].value;
		nuevoUsuarioRegistrado.username = this.registerForm.controls["username"].value;
		nuevoUsuarioRegistrado.email = this.registerForm.controls["email"].value;
		nuevoUsuarioRegistrado.password = this.registerForm.controls["password"].value;
	
		console.log(nuevoUsuarioRegistrado);

		const usuarioBuscado = this.usuariosService.getUsuarioRegistradoRegister(nuevoUsuarioRegistrado.username, nuevoUsuarioRegistrado.email)

		if (usuarioBuscado === undefined) {
			this.usuarioRegistradoList.push(nuevoUsuarioRegistrado);
			console.log("Nuevo usuario cargado con exito");
			this.usuarioActual = nuevoUsuarioRegistrado;
			this.usuariosService.setUsuarioActual(nuevoUsuarioRegistrado);
			this.usuariosService.cargarLocalStorage();
			
		}
		else {
			console.log("|X| El usuario que se intentó cargar ya existe |X|");
		}
		
		
	}

	// login getters 
	getLoginUsername() {
		return this.loginForm.get("username_login") || this.fb.control(null);
	}

	getLoginPassword() {
		return this.loginForm.get("password_login") || this.fb.control(null);
	}


	onSubmitLogin(): void {
		let nuevoUsuarioLog: usuarioLog = new usuarioLog;

		nuevoUsuarioLog.username_login = this.loginForm.controls["username_login"].value;
		nuevoUsuarioLog.password_login = this.loginForm.controls["password_login"].value;

		let usuarioBuscado = this.usuariosService.getUsuarioRegistradoLogin(nuevoUsuarioLog.username_login, nuevoUsuarioLog.password_login);

		if (usuarioBuscado !== undefined) {
			console.log("Logueo exitoso");
			this.usuarioActual = usuarioBuscado;
			this.usuariosService.setUsuarioActual(usuarioBuscado);
		}
		else {
			console.log("|X| El username o la contraseña no coinciden |X|");
		}
	}

	checkEmailExists(email_check: string): boolean {
		for (let user of this.usuarioRegistradoList) {
			if (user.email === email_check) {
				return true;
			}
		}
		return false; // no existe
	}

	checkUsernameExists(username_check: string): boolean {
		for (let user of this.usuarioRegistradoList) {
			if (user.username === username_check) {
				return true;
			}
		}
		return false;
	}

	/*
	userExistsRegister(user_add: usuarioRegistrado): boolean { // getUsuarioRegistradoRegister
		for (let user_compare of this.usuarioRegistradoList) {
			if (user_add.username === user_compare.username || user_add.email === user_compare.email) {
				return true;
			}
		}

		return false;
	}

	userExistsLogin(user_log: usuarioLog): usuarioRegistrado { // getUsuarioRegistradoLogin
		let user_devuelto = new usuarioRegistrado;
		for (let user of this.usuarioRegistradoList) {
			if (user_log.username_login === user.username && user_log.password_login === user.password) {
				return user; // lo encontró
			}
		}
		return user_devuelto;
	}*/

	/*isLogged(): boolean { // isLogged
		if (this.usuarioActual.username === "") {
			return false;
		}
		else {
			return true;
		}
	} //chequear si hay un usuario en el sistema para cargarle los puntos (usuarioActual)
  */
}
