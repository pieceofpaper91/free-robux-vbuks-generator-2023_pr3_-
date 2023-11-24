class Gras {
    zeile;
    spalte;
    energie = 0;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        matrix[this.zeile][this.spalte] = 1;
    };
    spielzug() {
        if (this.energie > 5) {
            this.pflanzNeuesGrasfeld();
            this.energie = 0;
        } else {
            this.energie++;
        }
    };
    pflanzNeuesGrasfeld() {
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

            } else if (matrix[koordinate[0]][koordinate[1]] === 0) {
                umgebungGefiltert.push(koordinate);
            }
        };

        if(umgebungGefiltert.length > 0){
          let koordinate = umgebungGefiltert[randomNumber(0,umgebungGefiltert.length)];
            objekteArray.push(new Gras(koordinate[0],koordinate[1]));
            
        }
        return;
    }

};

