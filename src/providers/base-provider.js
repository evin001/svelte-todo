class BaseProvider {
  async execute(url, headers = []) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
      if (!res.ok) {
        throw new Error(`${res.statusText} (${res.status})`)
      }
      const json = await res.json()
      if (headers.length) {
        return [json, Object.fromEntries(new Map(
          headers.map(header => [header, res.headers.get(header)])
        ))]
      }
      return json
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default BaseProvider
