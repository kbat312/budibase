export const buildAuthEndpoints = API => ({
  /**
   * Performs a log in request.
   */
  logIn: async ({ email, password }) => {
    if (!email) {
      return API.error("Please enter your email")
    }
    if (!password) {
      return API.error("Please enter your password")
    }
    return await API.post({
      url: "/api/global/auth",
      body: {
        username: email,
        password,
      },
    })
  },

  /**
   * Logs the user out and invalidates their session.
   */
  logOut: async () => {
    return await API.post({
      url: "/api/global/auth/logout",
    })
  },

  /**
   * Fetches the currently logged in user object
   */
  fetchSelf: async () => {
    return await API.get({ url: "/api/self" })
  },
})
