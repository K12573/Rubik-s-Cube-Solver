// This class's misssion is to control all cubies of the rubik's cube

// It manage each face color and run the solver function to generate the algorithm

const cubies = document.getElementsByClassName('face');
const colors = document.getElementsByClassName('color-pallette_face');
let cubieColor = '';

// initialize the 2D array

// creating the 1D array
var cubeFaces = new Array(6);

// loop through cubeFaces and create a 2D array
for(let i = 0; i< cubeFaces.length;i++ ){
    cubeFaces[i] = new Array(9);
}

// initializing the 2D array
for(let i = 0; i < cubeFaces.length; i++){
    for(var j = 0; j < cubeFaces[i].length; j++){
        cubeFaces[i][j] = "U";
    }
}


// get the color from the color pallette
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', colorChanger = () => {
        cubieColor=colors[i].style.backgroundColor;

    });
}

// "Paint" the cubies by changing their colors and record these in the array
for(let i = 0; i < cubies.length; i++){
    cubies[i].addEventListener('click', function handler(){
        if(cubies[i].id != "U5" && cubies[i].id != "L5" && cubies[i].id != "R5" && cubies[i].id != "B5" && cubies[i].id != "D5" && cubies[i].id != "F5"){
            cubies[i].style.backgroundColor = cubieColor;

        }
    });


}

//Solver string format: U ==> R => F ==> D ==> L ==> B
// Dictionary
/*
    U => white
    R => red
    F => green
    D => yellow
    L => orange
    B => blue
 */