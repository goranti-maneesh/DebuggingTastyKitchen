import {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
import OrderSuccess from './components/OrderSuccess'
import OrderLists from './components/OrderLists'
import NotFound from './components/NotFound'
import ToggleChanges from './Context/ToggleChanges'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {activeRating: '', SavedList: [], count: 0}

  changeActiveRating = activeRating => {
    this.setState({activeRating})
  }

  addToSavedList = Food => {
    const {SavedList} = this.state
    //  localStorage.setItem('cartData', JSON.stringify(Food))

    const foodObject = SavedList.find(
      eachFoodItem => eachFoodItem.id === Food.id,
    )

    if (foodObject) {
      this.setState(prevState => ({
        SavedList: prevState.SavedList.map(eachFoodItem => {
          if (foodObject.id === eachFoodItem.id) {
            const onUpdateCount = eachFoodItem.count + 1
            return {...eachFoodItem, count: onUpdateCount}
          }

          return eachFoodItem
        }),
      }))
    } else {
      const updatedFoodList = [...SavedList, Food]
      this.setState({SavedList: updatedFoodList})
    }
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      SavedList: prevState.SavedList.map(eachFoodItem => {
        if (id === eachFoodItem.id) {
          const updatedQuantity = eachFoodItem.count + 1

          return {...eachFoodItem, count: updatedQuantity}
        }
        return eachFoodItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {SavedList} = this.state
    const productObject = SavedList.find(eachFoodItem => eachFoodItem.id === id)
    if (productObject.count >= 1) {
      this.setState(prevState => ({
        SavedList: prevState.SavedList.map(eachFoodItem => {
          if (id === eachFoodItem.id) {
            const updatedQuantity = eachFoodItem.count - 1
            return {...eachFoodItem, count: updatedQuantity}
          }
          return eachFoodItem
        }),
      }))
    }
  }

  //   removeCartItem = () => {
  //     const {SavedList} = this.props
  //     const updatedList = SavedList.filter(eachCartItem => eachCartItem.id !== id)
  //     this.setState({SavedList: updatedList})
  //   }

  removeCartItem = id => {
    const {SavedList} = this.state
    const updatedCartList = SavedList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({SavedList: updatedCartList})
  }

  onUpdatedCount = count => {
    this.setState({count})
  }

  render() {
    const {activeRating, SavedList, count} = this.state
    // localStorage.setItem('cartData', JSON.stringify(SavedList))

    return (
      <ToggleChanges.Provider
        value={{
          activeRating,
          changeActiveRating: this.changeActiveRating,
          SavedList,
          addToSavedList: this.addToSavedList,
          count,
          onUpdatedCount: this.onUpdatedCount,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/order" component={OrderLists} />
            <ProtectedRoute
              exact
              path="/orderSuccess"
              component={OrderSuccess}
            />
            <ProtectedRoute exact path="/:id" component={Restaurant} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </ToggleChanges.Provider>
    )
  }
}

export default App
