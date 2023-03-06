## Features

- Vue 3

- Vue Router

- Pinia

- TypeScript

- Vite

- Axios

- Quasar 2

- Tailwind CSS

## Pre-packed

- alias(@ -> src)

- notift

  ```js
  import { notify } from '@/utils'

  notify.create('foo')
  notify.create({
    message: 'foo',
    /** 
      * other options: 
      * http://www.quasarchs.com/quasar-plugins/notify#notify-api 
      */
  })
  ```

- loading

  ```js
  import { loading } from '@/utils'

  loading.show()
  loading.show({
    message: 'foo',
    /** 
      * other options: 
      * http://www.quasarchs.com/quasar-plugins/loading#loading-api
      */
  })
  loading.hide()
  ```

- axios 

  All requests will show loading by default.

  ```js
  request.get('https://foo.com/api/', { a: 1, b: 2 })
  request.get('https://foo.com/api/?a=1', { b: 2 })
  request.get('https://foo.com/api/?a=1&b=2', {})
  // or you wanna write an object
  request.get({
    url: 'https://some-domain.com/api/',
    params: { a: 1, b: 2 },
  })

  // If you wanna hide loading.
  request.get('https://foo.com/api/', { a: 1, b: 2 }, { showLoading: false }) 
  request.get('https://foo.com/api/?a=1&b=2', {}, { showLoading: false })
  request.get({
    url: 'https://some-domain.com/api/',
    params: { a: 1, b: 2 },
    showLoading: false
  })
  ```

  ```js
  request.post('https://foo.com/api/', { a: 1, b: 2 })
  // or you wanna write an object
  request.post({
    url: 'https://some-domain.com/api/',
    data: { a: 1, b: 2 },
  })

  // If you wanna hide loading.
  request.post('https://foo.com/api/', { a: 1, b: 2 }, { showLoading: false })
  request.post({
    url: 'https://some-domain.com/api/',
    data: { a: 1, b: 2 },
    showLoading: false
  })
  ```

  Hide loading to all requests.

  ```js
  // starter.config.ts
  const starterConfig = {
    request: {
      loading: {
        hide: true
      }
    }
  }
  ```

- icons

  https://fonts.google.com/icons?selected=Material+Icons

  ```html
  <q-icon name="search"></q-icon>
  ```
