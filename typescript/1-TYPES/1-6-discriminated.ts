{
  // function: login -> success, fail
  type SuccessState = {
    result : 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result : 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: 'success',
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // succese -> 🎉 body
  // faile -> 😭 reason
  function printLoginState2(state: LoginState){
    if(state.result === 'success'){
      console.log(`🎉 ${state.response}`);
    } else {
      console.log(`😭 ${state.reason}`)
    }
  }
}