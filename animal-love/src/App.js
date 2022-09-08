import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main'
import Mapview from './pages/Mapview'
import KakaoRedirectHandler from './component/KakaoRedirectHandler'

function App() {


return (
    <div className='container'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/map' element={<Mapview />}/>

                <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
            </Routes>
		</BrowserRouter>
    </div>
    );
}

export default App;
