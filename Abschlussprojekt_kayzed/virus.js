
class virus {
    zeile;
    spalte;

    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {
      this.stecke_an()
      this.machSchritt()

    };
    machSchritt() {
        let umgebung = [
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1]
        ];
        let umgebungGefiltert = [];
        for (let i = 0; i < 4; i++) {
            let koordinate = umgebung[i]
            // hier, überprüfe ob die koordinate außerhalb der Matrix liegt
            if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix[0].length) {
    
            } else if(matrix[koordinate[0]][koordinate[1]] === 1 || matrix[koordinate[0]][koordinate[1]] == 0) {
                umgebungGefiltert.push(koordinate);
            }
        };
        if(umgebungGefiltert.length > 0){
          let koordinate = umgebungGefiltert[randomNumber(0,umgebungGefiltert.length)];
          matrix[this.zeile][this.spalte] = 0;
            löschObjekt(koordinate[0],koordinate[1],objekteArray);
          this.zeile = koordinate[0];
          this.spalte = koordinate[1];
          matrix[this.zeile][this.spalte] = 3;
          this.energie++
        }
          else{
          this.energie--
        }
        return;
    };
    stecke_an(){
    	let gefaerdeteUmgebung = [
    	    [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile+ 1, this.spalte - 1],
            [this.zeile + 2, this.spalte],
            [this.zeile + 2, this.spalte - 1],
            [this.zeile + 2, this.spalte - 2],
            [this.zeile + 2, this.spalte + 1],
            [this.zeile + 2, this.spalte + 2],
            [this.zeile - 2, this.spalte],
            [this.zeile - 2, this.spalte - 1],
            [this.zeile - 2, this.spalte - 2],
            [this.zeile - 2, this.spalte + 1],
            [this.zeile - 2, this.spalte + 2],
            [this.zeile - 1, this.spalte - 2],
            [this.zeile - 1, this.spalte + 2],
            [this.zeile + 1, this.spalte - 2],
            [this.zeile + 1, this.spalte + 2],
            [this.zeile, this.spalte - 2],
            [this.zeile, this.spalte + 2]
        ]
        let gefaerdeteUmgebungGefiltert = [];
        for (let i = 0; i < 24; i++) {
          //console.log(i)
            let koordinate = gefaerdeteUmgebung[i]
            
            // hier, überprüfe ob die koordinate außerhalb der Matrix liegt
            if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix[0].length ) {
            }
             else if (matrix[koordinate[0]][koordinate[1]] === 2) {
              gefaerdeteUmgebungGefiltert.push(koordinate);
            }
        };
        //console.log(gefaerdeteUmgebungGefiltert.length)
        for (let i = 0; i < gefaerdeteUmgebungGefiltert.length; i++){
          let koordinate = gefaerdeteUmgebungGefiltert[i]
          löschObjekt(koordinate[0],koordinate[1],objekteArray);
          objekteArray.push(new virus(koordinate[0],koordinate[1]));
        }
        // let i = findeObjektIndex(zeile,spalte,objektArray);
        // let objekt = objekteArray[i];
        // objekt.state = 1;

    }

    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    }
  }