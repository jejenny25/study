import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainView from './pages/mainView';
import RoomDetail from './pages/roomDetail';
import Reserve from './pages/reserve';

function App() {

	return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainView/>}/>
					<Route path='/roomDetail' element={<RoomDetail/>}/>
					<Route path='/reserve' element={<Reserve/>}/>
				</Routes>
			</BrowserRouter>
			
		);
	}

export default App;
