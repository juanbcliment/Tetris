        /* Todos los parametrso del tablero, color y tamaño */
        class Tablero {
            constructor(){
                this.columnas = 10;
                this.filas = 20,
                this.ladoCelda = 25;
                this.ancho = this.columnas*this.ladoCelda;
                this.alto = this.filas*this.ladoCelda;
                                                     /* () (width-this.ancho)/2,(height-this.alto)/2*/
                this.posicion = createVector(MARGEN_TABLERO,MARGEN_TABLERO);

            }
        
          /* transforma las posiciones locales en posiciones de canva */
         coordenada(x,y){
            return createVector(x,y).mult(this.ladoCelda).add(this.posicion)
             
        }

        /* Procesamiento logico del tablero */
        dibujar(){
            push()
            noStroke()
            for (let columna = 0; columna < this.columnas; columna++) {
                for (let fila = 0; fila < this.filas; fila++) {
                    if((columna+fila)%2 == 0){
                        fill("black")/* color tablero de fondo */
                    }else{
                        fill("#005")/* color tablero de fondo */
                    }
                    let c = this.coordenada(columna, fila)
                    rect(c.x, c.y, this.ladoCelda)
                    
                }
                
            }
            pop()
        }
    }
