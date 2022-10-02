import React, { memo } from 'react';
import { Category } from 'components/ListOfCategories/Category';
import {
  List, Item
} from './styles';
import { useGetCategories } from 'components/Hooks/useGetCategories';
import { useHideOnScroll } from 'components/Hooks/useHideOnScroll';

const ListOfCategoriesComponet = () => {
  const { loading, data, error } = useGetCategories()
  const { show } = useHideOnScroll();

  if (loading) return <p>Loading Categories...</p>;
  if (error) return <p>Error</p>;
  if (!data?.categories) return null;

  const { categories } = data

  const renderList = (fixed = false) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/category/${category.id}`} />
          </Item>
        )
      }
    </List>
  );

  return (
    <>
      {loading && 'loading cats...'}
      {renderList()}
      {show && renderList(true)}
    </>
  );
}

export const ListOfCategories = memo(ListOfCategoriesComponet)
