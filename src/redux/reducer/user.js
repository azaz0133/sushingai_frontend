const initialstate = [
  {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    tel: "",
    is_admin: ""
  }
]

export default (state = initialstate , { type, user }) => {
    switch (type) {
      case 'SAVE_SESSION':
        return {
          id:user.id,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          address: user.address,
          email: user.email,
          tel: user.tel,
          is_admin: user.is_admin
        }
      case 'DELETE_SESSION':
        return initialstate

      default:
        return state
    }
  }