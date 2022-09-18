export function useStorage (key, initialValue = false) {
  function setStorage (newValue) {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
      return newValue
    } catch (e) {
      return initialValue
    }
  }

  function getStorage () {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  }

  return { getStorage, setStorage }
}
