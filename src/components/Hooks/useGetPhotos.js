import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGetPhotos () {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    geCategories()
  }, [])

  const geCategories = async () => {
    const url = 'https://raw.githubusercontent.com/teslaveloper/teslamock/main/.mocked.json'
    try {
      setLoading(true)
      const response = await axios.get(url)
      const { photos } = response.data

      if (response.data.categories && response.data.categories) {
        setLoading(false)
        setPhotos(photos)
      }
    } catch (err) {
    }
  }

  return { photos, loading }
}
