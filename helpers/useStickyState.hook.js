import React from 'react'

export default function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    return defaultValue
  })

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key)
    setValue(stickyValue !== null ? JSON.parse(stickyValue) : defaultValue)
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
