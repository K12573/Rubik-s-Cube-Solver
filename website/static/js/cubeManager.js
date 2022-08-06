// This class's misssion is to control all cubies of the rubik's cube

// It manage each face color and run the solver function to generate the algorithm



const cubies = document.getElementsByClassName('face');
const colors = document.getElementsByClassName('color-pallette_face');
let cubieColor = 'white';


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
        cubeFaces[i][j] = "W";
    }
}



// get the color from the color pallette
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click',  () => {
        cubieColor=colors[i].style.backgroundColor;

    });
}

// "Paint" the cubies by changing their colors and record these in the array
for(let i = 0; i < cubies.length; i++){
    cubies[i].addEventListener('click', function handler(){
        if(cubies[i].id != "4"){
            cubies[i].style.backgroundColor = cubieColor;


        }
    });


}

//Solver string format: U ==> R => F ==> D ==> L ==> B
// Dictionary
/*
    U => white => 0 -> 8
    R => red => 27 -> 35
    F => green => 18 -> 26
    D => yellow => 45 -> 53
    L => orange => 9 -> 17
    B => blue => 36 -> 44
 */

function solver() {
    let tempString1 = '';
    let tempString2 = '';
    let inputString = '';

    // Check if there is a message displayed, if yes, erase it
    var solution = document.getElementById("solutionText")

    if(solution !== null){
        solution.parentNode.removeChild(solution)
    }

    // Collect the colors of each cubie
    for (let i = 0; i < cubies.length; i++){
        tempString1 += cubies[i].style.backgroundColor.charAt(0);
    }


    //Rearrange the tempString in the format such that the Kociemba's algorithm can understand

    // Rearrangement 1: Rearrage the faces order
    // From: U ==> L ==> F ==> R ==> B ==> D
    // To: U ==> R => F ==> D ==> L ==> B
    tempString2 = tempString1.substring(0, 9) + tempString1.substring(27,36) + tempString1.substring(18,27)+tempString1.substring(45,54)+tempString1.substring(9,18) + tempString1.substring(36,45);

    // Convert colors to face characters (Ex: White = U, Orange = L, ...)
    for (let i in tempString2){
        if(tempString2[i] === 'w'){
            inputString+='U';
        }

        else if(tempString2[i] === 'r'){
            inputString+='R';
        }

        else if(tempString2[i]==='g'){
            inputString+='F';
        }

        else if(tempString2[i]==='y'){
            inputString+='D';
        }

        else if(tempString2[i] === 'b'){
            inputString+='B';
        }

        else{
            inputString+='L';
        }
    }

    // console.log(inputString);

    $.ajax({
        url: "/solvingAlgorithm",
        data:{cubeString:inputString},
        success:function (r){
            var tag = document.createElement("h2")
            tag.setAttribute("id", "solutionText")

            var text = ""
            // Classify each case to display the approriate message
            if(r === "(0f)"){
                text = document.createTextNode('The cube is solved')
            }

            else if(r.includes('Error') ){

                text = document.createTextNode('There lies a fault in the pattern of your cube, please fix it and try again')

            }

            else{
                // text = document.createTextNode(r.substring(0, r.length-5))
                r=r.substring(0, r.length-5)

                let temp = r.split(" ")
                let output = ""

                temp.forEach(e => {
                    if(e.includes("3")){
                        e=e[0]+"'"
                    }
                    output+=e+" "
                });

                text = document.createTextNode(output)

                
            }
            // var text = document.createTextNode(r)
            tag.appendChild(text)
            var element = document.getElementById("container")
            element.appendChild(tag)
        }
    })

}