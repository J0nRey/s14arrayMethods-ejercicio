/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

/*
console.log( mentorsArray[0])
console.log( mentorsArray[0].scores[2])
console.log( mentorsArray[0].scores[2].score)
console.log( mentorsArray[0].scores[2].signature)
console.log(" ")
*/

mentorsArray.forEach(mentor=>{
//    console.log(mentor) /* -> Object */
//    console.log(mentor.name) /* -> String/property */
//    console.log(mentor.scores)
})
console.log(" ")

/*
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/



//-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

const ObtenerPromedio = dequemateria => {
    let totalMateria =mentorsArray.reduce((acumulador, item)=>{
/*Extraemos de cada mentor el objeto cuya propiedad "signature" coincide con nuestro parámetro "materia"*/
//        console.log('Item Actual', item)
//        console.log('Item Actual', item.scores)
        let puntuacionMateria = item.scores.find( score => score.signature === dequemateria).score
        /*Extraemos la propiedad score del objeto encontrado*/
        // .find()-> regresael valor del primer elemento en el array que pase el test
//        console.log(puntuacionMateria)
        return acumulador+puntuacionMateria /*Acumulamos el valor de score*/
    },0)// --> iniciamos en valor cero
//    console.log(totalMateria)
    let promedio = totalMateria/mentorsArray.length
    /*obtenemos el promedio*/
    return promedio
    /*devolvemos el promedio*/
}

let HTMLpromedio = ObtenerPromedio ("HTML")
console.log("Promedio de HTML", HTMLpromedio)

let CSSpromedio = ObtenerPromedio ("CSS")
console.log("Promedio de CSS", CSSpromedio)

let JSpromedio = ObtenerPromedio ("JS")
console.log("Promedio de JS", JSpromedio)

let ReactJSpromedio = ObtenerPromedio ("ReactJS")
console.log("Promedio de ReactJS", ReactJSpromedio)

console.log(" ")

//-Obtener el promedio individual de cada mentor

const obtenerpromediomentor = (deQuementor) => {
//    let seleccionaelmentor = mentorsArray.filter( mentor => mentor.name === deQuementor)
//    console.log(seleccionaelmentor)

//    let seleccionaelmentor2 = mentorsArray.find( mentor => mentor.name === deQuementor )
//    console.log(seleccionaelmentor2)

    let seleccionaelmentor3 = mentorsArray.find( nombredelmentor => nombredelmentor.name === deQuementor ).name
    let seleccionaelmentor4 = mentorsArray.find( nombredelmentor => nombredelmentor.name === deQuementor ).scores
//          console.log(seleccionaelmentor4)
//          console.log(seleccionaelmentor3)

    let obtenerpromediomentor = seleccionaelmentor4.reduce( (acumulador,item) => {
        return acumulador + item.score
    },0) / seleccionaelmentor4.length
        console.log( "El promedio del mentor", seleccionaelmentor3,"es :", obtenerpromediomentor)

        return obtenerpromediomentor
}

obtenerpromediomentor("Israel Salinas Martinez")
obtenerpromediomentor("David Cermeño Moranchel")
obtenerpromediomentor("Charles Silva")
obtenerpromediomentor("Michael Villalba Sotelo")

console.log(" ")

const crearmatrizdeetiquetas = () => {
    let matrizdeetiquetas = mentorsArray.map( quementor =>{
        return `hola, soy ${quementor.name} y mi promedio es de ${obtenerpromediomentor(quementor.name)}`
    })
    console.log(matrizdeetiquetas)
}

crearmatrizdeetiquetas()

console.log(" ")

const obtenermejoresmentores = () => {
    let result = mentorsArray.filter( quementor => obtenerpromediomentor( quementor.name) >9 )
    console.log(result)
}

obtenermejoresmentores()