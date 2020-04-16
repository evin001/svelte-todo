import BaseProvider from './base-provider'

class UserProvider extends BaseProvider {
  async getUsers(page, limit) {
    const [users, headers] = await this.execute(
      `users?_page=${page}&_limit=${limit}`,
      ['x-total-count']
    )
    return [users, +headers['x-total-count']]
  }

  getTodos(userId) {
    return this.execute(`todos?userId=${userId}`)
  }
}

export default new UserProvider()
