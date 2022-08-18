import MainView from './pages/mainView';
import RoomDetail from './pages/roomDetail';
import {useState, useEffect} from 'react';

function App() {

    // useEffect(() => {
    //         window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
    //             return () => {
    //         window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
    //     };
    // }, []);

    // const handleScroll = () => {
    //     const scrollTop = document.getElementById('root')?.scrollTop;
    //     console.log(scrollTop);
    // }

	return (
			<div>
				{/* <MainView/> */}
				<RoomDetail />
			</div>
		);
	}

export default App;
