import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SubHeader, Title, SubTitle } from './styles';

export const Layout = ({children, title, subtitle}) => {
  return (
    <>
      <Helmet>
        {title && <title> {title} | Petgram </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <SubHeader>
        {title && <Title> {title}</Title>}
        {subtitle && <SubTitle> {subtitle}</SubTitle>}
        {children}
      </SubHeader>
    </>
  )
}
