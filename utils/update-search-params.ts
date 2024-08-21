import { NextRouter } from 'next/router'

const updateSearchParams = (params: {
  router: NextRouter
  type?: 'replace' | 'push'
  addSearchParams?: Record<string, string | number>
  removeSearchParamsKey?: string[]
}) => {
  const { router, type, addSearchParams, removeSearchParamsKey } = params

  const queryParams = router.asPath.split('?')
  const newURLSearchParams = new URLSearchParams(queryParams[1])
  const paramsObject: Record<string, string | string[] | undefined> = { ...router.query }
  newURLSearchParams.forEach((value, key) => {
    paramsObject[key] = value
  })

  if (addSearchParams) {
    Object.entries(addSearchParams).forEach(([key, value]) => {
      paramsObject[key] = String(value)
    })
  }

  if (removeSearchParamsKey) {
    removeSearchParamsKey.forEach(key => {
      delete paramsObject[key]
    })
  }

  if (type && type === 'push') {
    router.push(
      {
        pathname: router.pathname,
        query: paramsObject
      },
      undefined,
      { shallow: true }
    )

    return
  }

  router.replace(
    {
      pathname: router.pathname,
      query: paramsObject
    },
    undefined,
    { shallow: true }
  )
}

export default updateSearchParams
