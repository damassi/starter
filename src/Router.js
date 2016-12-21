import App from './App'
import React from 'react';
import { BrowserRouter, Match } from 'react-router'

export default function Router() {
  return (
    <BrowserRouter>
      <Match exactly pattern='/' component={App} />
    </BrowserRouter>
  )
}
