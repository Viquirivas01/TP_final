import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioLog } from 'src/app/models/usuarioLog';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';


@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})

export class RegistroLoginComponent implements OnInit {
	usuariosRegistrados: usuarioRegistrado[] = [];
	  
	registerForm: FormGroup;
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {}

  
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

	
		if (!this.userExistsRegister(nuevoUsuarioRegistrado)) {
			this.usuariosRegistrados.push(nuevoUsuarioRegistrado);
			console.log("Nuevo usuario cargado con exito");
			console.log(this.usuariosRegistrados);
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

		
		if (this.userExistsLogin(nuevoUsuarioLog)) {
			console.log("Logueo exitoso");
		}
		else {
			console.log("|X| El username o la contraseña no coinciden |X|");
		}
	}

	userExistsRegister(user_add: usuarioRegistrado): boolean {
		for (let user_compare of this.usuariosRegistrados) {
			if (user_add.username === user_compare.username || user_add.email === user_compare.email) {
				return true;
			}
		}

		return false;
	}

	userExistsLogin(user_log: usuarioLog): boolean {
		for (let user of this.usuariosRegistrados) {
			if (user_log.username_login === user.username && user_log.password_login === user.password) {
				return true; // lo encontró
			}
		}
		return false;
	}
  
}
