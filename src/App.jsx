/**
 * 
 * @tema {DESESTRUCTURACION} 
 */

// const Hello = (props) => {
//    console.log(props)

  //  const name = props.name
  //  const age = props.age
  
  // Si el objeto que estamos desestructurando tiene los valores
  /*
  props = {
    name: 'Miguel Angel',
    age: 31
  }
  */
  // la expresión: 
  //const {name, age} = props
  // asigna los valores 'Miguel Angel'a name y 31 a age.

  //  const bornYear = () => {
  //   const yearNow = new Date().getFullYear()

  //   return yearNow - props.age
  // }

//   const bornYear = () => new Date().getFullYear() - age

//    return(
//     <div>
//       <p>!Hola¡ {name}, tú tienes {age} años de edad.</p>
//       <p>Tu año de nacimiento es: {bornYear()}</p>
//     </div>
//    )
// }


//Podemos llevar la desestructuracion un paso mas allá

// const Hello = ({name, age}) => {
//   console.log(name, age)

//   const bornYear = () => new Date().getFullYear() - age

//   return(
//     <div>
//     <p>!Hola¡ {name}, tú tienes {age} años de edad.</p>
//     <p>Tu año de nacimiento es: {bornYear()}</p>
//   </div>
//   )
// }

// const App = () => {

//   const name = 'Miguel Angel'
//   const age = 30

//   return(
//     <div>
//       <Hello name = {name} age = {age}/>
//       <Hello name = 'Elizabeth' age = {31} />
//     </div>
//   )

// }

/**
 * @tema {Re - renderizado}
 */

// se deben realizar cambios en App.jsx y en main.jsx


//En la primera fila, la aplicación importa la función useState:
import { useState } from "react"

const App = () => {

  //El cuerpo de la función que define el componente comienza con la llamada a la función:
  const [ counter,  setCounter ] = useState(0)
  /*
  La llamada a la función agrega state al componente y lo hace inicializado con el valor de cero. La función devuelve una matriz que contiene dos elementos. Asignamos los elementos a las variables counter y setCounter usando la sintaxis de asignación por desestructuración mostrada anteriormente.

  A la variable counter se le asigna el valor inicial de state que es cero. La variable setCounter se asigna a una función que se utilizará para modificar el estado.
  */

  //La aplicación llama a la función setTimeout y le pasa dos parámetros: una función para incrementar el estado del contador y un tiempo de espera de un segundo:

  //setTimeout(
     //La función pasada como primer parámetro a la función setTimeout se invoca un segundo después de llamar a la función setTimeout
    //() => setCounter(counter +1),
    //1000
    //Cuando se llama a la función de modificación de estado setCounter, React vuelve a renderizar el componente, lo que significa que el cuerpo de la función del componente se vuelve a ejecutar:
  //)

  /*
  La segunda vez que la función del componente es ejecutado, llama a la función useState y devuelve el nuevo valor del estado: 1. Al ejecutar el cuerpo de la función nuevamente, también se realiza una nueva llamada de función a setTimeout, que ejecuta el tiempo de espera de un segundo e incrementa el estado counter nuevamente. Debido a que el valor de la variable counter es 1, incrementar el valor en 1 es esencialmente lo mismo que una expresión que establece el valor de counter en 2.
  */

  /*
  Mientras tanto, el antiguo valor de counter - "1" - se muestra en la pantalla.

  Cada vez que setCounter modifica el estado, hace que el componente se vuelva a renderizar. El valor del estado se incrementará nuevamente después de un segundo y esto continuará repitiéndose mientras la aplicación esté en ejecución.
  */

  const handleClick = () =>{
    console.log('Clicked')
    console.log('Hi world...')
  }
 

  console.log(counter)
  return(
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
    </div>
  )
}

export default App

//Cambio minimo
