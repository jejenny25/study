import MainView from './pages/mainView';
import RoomDetail from './pages/roomDetail';
import Reserve from './pages/reserve';
import {useState, useEffect} from 'react';

function App() {

	return (
			<div>
				{/* <MainView/> */}
				<RoomDetail />
                {/* <Reserve /> */}
			</div>
		);
	}

export default App;
