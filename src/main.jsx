import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  )

// let counter = 1

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App counter={counter}/>
//   )
// }

// refresh()
// counter += 1
// refresh()
// counter +=1
// refresh()

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

/*
Hacer llamadas repetidas al método ReactDOM.render no es la forma recomendada de volver a renderizar componentes. A continuación, presentaremos una mejor forma de lograr este efecto.
*/