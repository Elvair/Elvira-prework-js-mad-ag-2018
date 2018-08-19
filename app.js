// Rover Object Goes Here
// ======================

var rover = {
  direction: "N", //Los valores de direction pueden ser ["N","E","S" y "W"]
  x: "0",
  y: "0",
  travelLog:[],
  //position:[0,0] //Hay hasta 100 posiciones distintas
};




// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called");
}

function moveBackward(rover){
  console.log("moveBackward was called");
}
//========================

  

  var margenes = [          // 10x10
    [0,1,2,3,4,5,6,7,8,9],  // Valores posibles de x
    [0,1,2,3,4,5,6,7,8,9]   // Valores posibles de y
  ];


  //GIRO A LA IZQUIERDA
  function turnLeft () {
    console.log("turnLeft was called!");
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "W":
        rover.direction = "S";
        break;
        }
    console.log("Left! New position is " + rover.direction);    
  }
  
    
  //GIRO A LA DERECHA
  function turnRight() {
    console.log('turnRight was called!');
    switch (rover.direction) { 
      case "N":
        rover.direction = "E";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "W":
        rover.direction = "N";
        break;
        }
    console.log("Right! New position is " + rover.direction);
  }
  
  
  //Para que el rover no se salga de los márgenes, se tiene que dar la condición:  
  // && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9
  
  //MOVIMIENTO HACIA DELANTE
  function moveForward() {
    console.log("moveForward was called");  
  if (rover.direction === "N" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
      rover.y += -1;
      console.log("Forward! New position is " + rover.direction);
    } else if (rover.direction === "S" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.y += 1;
        console.log("Forward! New position is " + rover.direction);
    } else if (rover.direction === "E" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.x += 1;
        console.log("Forward! New position is " + rover.direction);
    } else if (rover.direction === "W" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.x += -1; 
        console.log("Forward! New position is " + rover.direction);
    } else {
        console.log("You have reached a limit, move in another direction!");
    }
  }
  
  //MOVIMIENTO HACIA ATRÁS
  function moveBackward(){
    console.log("moveBackward was called");
    
    if (rover.direction === "N" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
      rover.y += -1;
      console.log("Backward! New position is " + rover.direction);
    } else if (rover.direction === "S" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.y += 1;
        console.log("Backward! New position is " + rover.direction);
    } else if (rover.direction === "E" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.x += 1;
        console.log("Backward! New position is " + rover.direction);
    } else if (rover.direction === "W" && rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        rover.x += -1;
        console.log("Backward! New position is " + rover.direction); 
    } else {
        console.log("You have reached a limit, move in another direction!");
    }
  }

  //FUNCION PARA COMANDOS
  function comandos(intro){
    for (var i=0; i < intro.length; i++) {
      switch [intro[i]] {
        case "f":
          function moveForward();
          break;
        case "b":
          function moveBackward();
          break;
        case "r":
          function turnRight();
          break;
        case "l":  
          function turnLeft();
      }
    }
  }

  //USAR TRAVELLOG PARA DAR LAS COORDENADAS DE CADA MOVIMIENTO.Aún trabajando en ello
  rover.travelLog[rover.x , rover.y].push
  console.log ("The log of the rover's travel are the coordenates " + travelLog);