import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGetCategories () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    geCategories()
  }, [])

  const geCategories = async () => {
    const url = 'https://raw.githubusercontent.com/teslaveloper/teslamock/main/.mocked.json'
    try {
      setLoading(true)
      const response = await axios.get(url)
      const { categories } = response.data

      if (response.data.categories && response.data.categories) {
        setLoading(false)
        setCategories(categories)
      }
    } catch (err) {
    }
  }

  return { categories, loading }
}
