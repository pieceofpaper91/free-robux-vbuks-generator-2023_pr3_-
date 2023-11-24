function löschObjekt(zeile,spalte,array) {
    for(let i =0;i<array.length;i++){
      	let gras = array[i]
        if(gras.zeile === zeile && gras.spalte === spalte){
          array.splice(i,1)
          return;
        }
    
    }

}

function findeObjektIndex(zeile,spalte,array) {
    for(let i =0;i<array.length;i++){
        let gras = array[i]
      if(gras.zeile === zeile && gras.spalte === spalte){
        return i;
      }
  
  }
}


function createMatrix(length, width) {
    let matrix = [];
    for (let zeile = 0; zeile < length; zeile++) {
        matrix.push([]);
        for (let spalte = 0; spalte < width; spalte++) {
            matrix[zeile][spalte] = 0
        }
    }

    return matrix
}

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min) + min);
}


function zeichneMatrix() {
    //console.log(matrix.length,matrix[0].length)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            //console.log(j)
            quadrat(i, j, matrix[i][j])
        }
    }
}

function quadrat(zeile, spalte, sw) {
    if (sw === 1) {
        fill(34, 139, 34)
    } else if (sw === 2) {
        fill(255, 0, 0)
    } else if (sw === 3) {
        fill(0,255,0)
    } else {
        fill(209, 188, 138)
    }
    let seite = 23;
    rect( spalte * seite,zeile *seite, seite, seite)
};

