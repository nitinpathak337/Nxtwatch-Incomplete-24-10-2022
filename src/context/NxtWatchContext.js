import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: null,
  onToggleTheme: () => {},
})

export default NxtWatchContext
