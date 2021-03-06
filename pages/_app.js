import NextApp from 'next/app'
import {CacheProvider} from '@emotion/core'
import {EggheadUserProvider} from '../context/EggheadUserProvider'
import {SWRConfig} from 'swr'

// Use only { cache } from 'emotion'. Don't use { css }.
import {cache} from 'emotion'

import {globalStyles} from '../shared/styles'
import '../styles/index.css'

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props
    console.log('redraw')
    return (
      <EggheadUserProvider>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </EggheadUserProvider>
    )
  }
}
