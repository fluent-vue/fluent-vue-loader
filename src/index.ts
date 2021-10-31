import type { LoaderDefinitionFunction } from 'webpack/types'

function generateCode (rawData: string, query: URLSearchParams, hot = false): string {
  // vue-loader pads SFC file sections with newlines - trim those
  const data = rawData.replace(/^(\n|\r\n)+|(\n|\r\n)+$/g, '')

  const locale = query.get('locale')
  if (typeof locale !== 'string') {
    throw new Error('Custom block does not have locale attribute')
  }

  const hotCode = hot
    ? `if (module.hot) {
    delete target._fluent
    if (typeof __VUE_HMR_RUNTIME__ !== 'undefined') {
      // Vue 3
      const id = target.__hmrId
      const api = __VUE_HMR_RUNTIME__
      api.reload(id, target)
    } else {
      // Vue 2
      // There is no proper api to access HMR for component from custom block
      // so use this magic
      delete target._Ctor
    }
  }`
    : ''

  return `
import { FluentResource } from '@fluent/bundle'

export default function (Component) {
  const target = Component.options || Component
  target.fluent = target.fluent || {}
  target.fluent['${locale}'] = new FluentResource(\`${data}\`)
  ${hotCode}
}\n`
}

const loader: LoaderDefinitionFunction = function (this, source, sourceMap) {
  try {
    const options = new URLSearchParams(this.resourceQuery.slice(1))
    this.callback(null, generateCode(source, options, this.hot), sourceMap)
  } catch (err) {
    this.emitError(err as Error)
    this.callback(err as Error)
  }
}

export default loader
