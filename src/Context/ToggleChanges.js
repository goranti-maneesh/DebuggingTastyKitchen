import React from 'react'

const ToggleChanges = React.createContext({
  activeRating: 'Lowest',
  ChangeActiveRating: () => {},
  SavedList: [],
  addToSavedList: () => {},

  onUpdatedCount: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default ToggleChanges
