import { useState, useCallback } from "react"

// TODO: Polyfill for URLSearchParams for IE11
// LINK: https://caniuse.com/urlsearchparams

export default (key: string, defaultValue = "", options?: string[]) => {
  const urlParams = new URLSearchParams(window.location.search)
  const p = (urlParams.get(key) ?? defaultValue).trim()
  const param = options !== undefined && !options.includes(p) ? defaultValue : p
  const [value, setValue] = useState(param)
  const set = useCallback((value: string) => {
    const v = value.trim()
    setValue(v)
    if (v === "") {
      urlParams.delete(key)
    } else {
      urlParams.set(key, v)
    }
    const s = urlParams.toString()
    const queryString = s !== "" ? `?${ s }` : ""
    const url = `${ window.location.pathname }${ queryString }`
    window.history.pushState({}, "", url)
  }, [key, urlParams])
  return [value, set] as const
}