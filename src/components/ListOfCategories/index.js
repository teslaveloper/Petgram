import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import {
  List, Item
} from './styles'
import { useGetCategories } from '../Hooks/useGetCategories'

export const ListOfCategories = () => {
  const { categories, loading } = useGetCategories()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    // destruimos el listener
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed = false) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>
  )

  return (
    <>
      {loading && 'loading...'}
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
