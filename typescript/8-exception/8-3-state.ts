{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout'; // 내가 코드를 짜면서 예상되는 상태에 따라 타입을 정의해서 하면 좋음
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error(`no network!`);
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // login........
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // 여기에 전달되는 error는 any type임
        //show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
