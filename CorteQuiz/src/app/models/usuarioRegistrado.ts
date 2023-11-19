export class usuarioRegistrado {
    nombre: string = "";
	apellido: string = "";
	username: string = "";
	email: string = "";
	password: string = "";

    // Modo contrarreloj
    partidas_jugadas_cr: number;
    preguntas_correctas_cr: number;
    preguntas_incorrectas_cr: number;
    preguntas_correctas_high_score_cr: number;

    // Modo Vidas
    partidas_jugadas_v: number;
    preguntas_correctas_v: number;
    preguntas_correctas_high_score_v: number;

    // Modo categorias
    partidas_jugadas_cat: number;
    preguntas_correctas_cat: number;
    preguntas_incorrectas_cat: number;
    preguntas_correctas_high_score_cat: number;

    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.username = "";
        this.email = "";
        this.password = "";

        this.partidas_jugadas_cr = 0;
        this.preguntas_correctas_cr = 0;
        this.preguntas_incorrectas_cr = 0;
        this.preguntas_correctas_high_score_cr = 0;

        this.partidas_jugadas_v = 0;
        this.preguntas_correctas_v = 0;
        this.preguntas_correctas_high_score_v = 0;

        this.partidas_jugadas_cat = 0;
        this.preguntas_correctas_cat = 0;
        this.preguntas_incorrectas_cat = 0;
        this.preguntas_correctas_high_score_cat = 0;
    }

    
}