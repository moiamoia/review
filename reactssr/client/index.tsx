/**
 * csr
 */
import * as React from 'react'
import * as ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '../src'

//注水
ReactDom.hydrate(<BrowserRouter>
    {App}
</BrowserRouter>,document.getElementById('app'))
