// import {Component} from 'react'

// import './index.css'
// import ToggleChanges from '../../Context/ToggleChanges'

// class Counter extends Component {
//   state = {count: 1}

//   render() {
//     return (
//       <ToggleChanges.Consumer>
//         {value => {
//           const {onUpdateCount} = value
//           const {count} = this.state
//           const onIncrement = () => {
//             this.setState(prevState => ({
//               count: prevState.count + 1,
//             }))
//             onUpdateCount(count)
//           }

//           const onDecrement = () => {
//             if (count > 1) {
//               this.setState(prevState => ({
//                 count: prevState.count - 1,
//               }))
//             }
//             onUpdateCount(count)
//           }
//           return (
//             <div className="bg-container">
//               <button className="buttons" type="button" onClick={onDecrement}>
//                 -
//               </button>
//               <h1 className="number">{count}</h1>
//               <button className="buttons" type="button" onClick={onIncrement}>
//                 +
//               </button>
//             </div>
//           )
//         }}
//       </ToggleChanges.Consumer>
//     )
//   }
// }

// export default Counter
