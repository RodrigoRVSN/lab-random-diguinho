import { Middleware } from "@reduxjs/toolkit"
import { normalize } from "normalizr"

export const api: Middleware = (store) => (next) => (action) => {
  if(action.type !== 'API') {
    return next(action)
  }

  const { url, success, schema, label } = action.payload

  store.dispatch({
    type: "START_API_REQUEST",
    payload: { label }
  })

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(schema) {
        data = normalize(data, schema)
      }
      store.dispatch(success(data))
      store.dispatch({
        type: 'FINISH_API_REQUEST',
        payload: {
          label
        }
      })
    }).catch(err => {
      store.dispatch({
        type: 'FINISH_API_REQUEST',
        payload: {
          label
        }
      })
    })
}