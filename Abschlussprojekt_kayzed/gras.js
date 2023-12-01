class Gras extends LivingCreature{
    zeile;
    spalte;
    energie = 0;
    constructor(z,s) {
        super(z, s)
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
        let umgebungGefiltert = this.umgebungFiltern(0)

        if(umgebungGefiltert.length > 0){
          let koordinate = umgebungGefiltert[randomNumber(0,umgebungGefiltert.length)];
            objekteArray.push(new Gras(koordinate[0],koordinate[1]));
            
        }
        return;
    }

};

