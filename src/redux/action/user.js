export const saveSession = ( user ) => {
    return {
      type: 'SAVE_SESSION',
      user
    }
  }
  
  export const deleteSession = () => {
    return {
      type: 'DELETE_SESSION'
    }
  }
  