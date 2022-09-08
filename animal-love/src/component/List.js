import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const List = () => {
    const [sido_list, setSidoList] = useState([]);
    const [sido, setSido] = useState("6110000");
    const [sigungu_list, setSigunguList] = useState([]);
    const [sigungu, setSigungu] = useState("");
    const [up_kind, setUpkind] = useState("");
    const [animal_list, setAnimalList] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalCount, setTotalCount] = useState(1);
    const [numOfRows, setNumOfRows] = useState(10);
    const _type = "json";
    const API_KEY = "5UMBP8yx8Z%2FiHz7q7cf4OxT7fOokfWBC1qTPS6BWbC7z8dvHGl6jYPJJ8a6ogDOMHuKTre%2BHA7trLAd7QGF6Tg%3D%3D";
    const url_sido = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${API_KEY}&numOfRows=17&pageNo=1&_type=${_type}`;
    const url_sigungu =`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${API_KEY}&upr_cd=${sido}&_type=${_type}`;
    const url_animals =`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${API_KEY}&upkind=${up_kind}&upr_cd=${sido}&org_cd=${sigungu}&pageNo=${pageNo}&numOfRows=${numOfRows}&_type=${_type}`;


    const getSido = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url_sido,
            })
            setSidoList(getData.data.response.body.items.item);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => { 
        getSigungu();
    }, [sido]);

    const getSigungu = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url_sigungu,
            })
            //console.log(getData.data);
            setSigunguList(getData.data.response.body.items.item);
        }
        catch(err){
            console.log(err);
        }
    }

    const getAnimals = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url_animals,
            })
            //console.log(getData.data.response.body.items.item);
            setAnimalList(getData.data.response.body.items.item);
            setTotalCount(getData.data.response.body.totalCount);
            setNumOfRows(getData.data.response.body.numOfRows);
        }
        catch(err){
            console.log(err);
            setAnimalList([]);
        }
    }

    const setPaging = () => {
        var paging = [];
        var paginCnt = Math.ceil(totalCount/numOfRows);
        for(var i=1; i<=paginCnt; i++){
            if(pageNo == i){
                paging.push(<button type="botton" className="page-item current">{i}</button>);
            }else {
                paging.push(<button type="botton" className="page-item" onClick={goPage} value={i}>{i}</button>);
            }
        }
        return paging;
    }
    
    const goPage = (e) => {
        setPageNo(e.target.value);
    }

    useEffect(() => { 
        getSido();
    }, []);

    useEffect(() => { 
        getAnimals();
        // setPaging();
    }, [pageNo]);


    // 네비게이트
    const navigate = useNavigate();

    const goToMap = (_address, _careNm) =>{
        //alert(_careNm);
        navigate('/map' , { state: { address: _address, careNm : _careNm } } );
    }


  return (
    <div>
        <div className="sch-wrap">
            <div className="item">
                <select onChange={(e) =>{setSido(e.target.value);}} className="sel-item">
                    <option>시도 선택하기</option>
                {sido_list.map((item) => (
                    <option key={item.orgCd} value={item.orgCd} >
                        {item.orgdownNm}
                    </option>
                ))}
                </select>
            </div>

            <div className="item">
                {/* <select id='sigungu' onChange={(e) =>{setSigungu(e.target.value);}} className="sel-item"> */}
                <select id='sigungu' className="sel-item">
                    <option>시군구 선택하기</option>
                {sigungu_list.map((item) => (
                    <option key={item.orgCd} value={item.orgCd} >
                        {item.orgdownNm}
                    </option>
                ))}
                </select>
            </div>

            <div className="item">
                <select id='upKind' onChange={(e) =>{setUpkind(e.target.value);}} className="sel-item">
                    <option>축종코드 선택</option>
                    <option value="417000">개</option>
                    <option value="422400">고양이</option>
                    <option value="429900">기타</option>
                </select>
            </div>
            <div className="item btn-wrap">
                <button onClick={getAnimals} className="btn-sch"><span>유기동물 조회</span></button>
            </div>
        </div>
        {animal_list === undefined || animal_list.length === 0 ? 
            <div className='no-result'>
                <p>내용이 없습니다.</p>
            </div>
            :
            <ul className="animal-list">
                {animal_list.map((item) => (
                    <li key={item.desertionNo} className="item" onClick={ () => {goToMap(item.careAddr , item.careNm)}}>
                        <div className="img"><img src={item.popfile} alt="" /></div>
                        <div className="txt-wrap">
                            <ul className="detail-wrap">
                                <li>
                                    <span className="detail-tit">품종</span>
                                    <span>{item.kindCd}</span>
                                </li>
                                <li>
                                    <span className="detail-tit">성별</span>
                                    <span>{item.sexCd}</span>
                                </li>
                                <li>
                                    <span className="detail-tit">나이</span>
                                    <span>{item.age}</span>
                                </li>
                                <li>
                                    <span className="detail-tit">상태</span>
                                    <span>{item.processState}</span>
                                </li>
                                <li>
                                    <span className="detail-tit">특징</span>
                                    <span>{item.specialMark}</span>
                                </li>
                                <li>
                                    <span className="detail-tit">연락처</span>
                                    <span>{item.careTel}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        }
        
        <div className="pagenagtion-wrap">
            <div className="pagenagtion">
                {setPaging()}
            </div>
        </div>
    </div>
  )
}

export default List