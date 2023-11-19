/* eslint-disable */

import './App.css';
import React, {useState} from 'react';
// import Modal from './modal';

// ***map 사용법***
// 1. array 자료의 갯수 만큼 함수 안의 코드를 실행해줌 
// 2. 함수의 파라미터는 array안에 있던 자료이다.
//    하나씩 꺼내서 확인이 가능함 
//    array 안의 각각의 내용을 a라고 부르겠음! 
// 3. return안에 내용을 적으면 array로 담아줌 

[1,2,3].map(function(a){
  console.log(a);
  return '1111';
})

function App() {

  let post = '강남우동 맛집';
  // let [title, setTitle] = useState('남자코트 추천');
  let [logo, setLogo] = useState('ReactBlog');

  let num = [1, 2];

  let [a, c] = [1,2];
  // let a= num[0]; 
  // let c= num[1];

  // 변수 문법이 있는데 왜 state써야하나 
  // 변수가 갑자기 변경되면? html에 자동으로 변경되지 않음 
  // state는 쓰던 html 변경 시 자동으로 랜더링이 되기 때문에 유용함 

  // 숙제 
  // 글제목 배열 형식으로 만들어 보기

  let [title , setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학'])

  let [likeCount , setLikecount ] = useState([0,0,0])
  
  // 좋아요 수 증가 시키는 함수 
  // 변수에 함수 담아서 사용하면 재사용성이 높음 
  const likeIncrease = () => {
    setLikecount(likeCount + 1);
  }

  // 모달창 띄우기 state
  let [modal , setModel] = useState(false);

  const updateTitle = () => {
    let copy = [...title];
    copy[0] = "여자 코트 추천"
    setTitle(copy);
  }

  let [index, setIndex] = useState(0)
  

  // input입력값
  let [input , setInput] = useState("");

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <h4 style={{ color: 'red', fontSize: '16px'}}>블로그임</h4> */}
        <h4>{logo}</h4>
      </div>
      {/* <div className='list'>
        <h4 onClick={()=> {setModel(!modal)}}>{title[0]} <span onClick={()=> setLikecount(likeCount + 1)}>🩷</span> {likeCount} </h4>
        <p>11월 19일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]} </h4>
        <p>11월 19일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>11월 19일 발행</p>
      </div> */}
      
      {
        // i는 반복문이 돌때 마다 1씩 증가하는 정수
        title.map(function(a, i ){
          return (
            <div className='list' key={i}>
              {/* <h4>{a} </h4> */}
              <h4 onClick={() => {
                setModel( true )
                setIndex(i)                
              }}> 
                { title[i] } 
                <span onClick={(e)=>{
                    e.stopPropagation(); 
                    // -> 상위 html로 퍼지는 이벤트 버블링을 막고 싶으면 e.stopPropagation()!!
                    let copy = [...likeCount];
                    copy[i] = copy[i] + 1;
                    setLikecount(copy)  
                }}>🩷</span> {likeCount[i]} 
                <button className="delete" onClick={(e)=>{
                  e.stopPropagation();
                  let copy= [...title];
                  copy.splice(i,1); // splice(제거할 인덱스 위치, 갯수)
                  setTitle(copy);
                }}>삭제</button>
              </h4> 
              <p>11월 19일 발행</p>
            </div>
          )
        })
        // map()함수 
        // 1. 왼쪽 array 자료만큼 내부 코드를 실행해줌 
        // 2. return 오른쪽에 있는 걸 array로 담아줌
        // 3. 유용한 파라미터 2개 사용가능 (예 - a, i)
      }


      <button onClick={()=>{
        // 깊은 복사
        let copy = [...title];
        // let copy = title;
        copy[0]='여자코드추천';
        setTitle(copy);
        console.log(copy == title)

      }}>여자 추천글로 변경하기</button>
    
      {/* 가나다순으로 정렬 */}
      <button onClick={()=>{
        let copy = [...title];
        copy.sort(); // 문자 정렬을 도와주는 함수 sort()
        setTitle(copy);
      }}>가나다순 정렬</button>
    
      <br/><br/>
      <input type='text' onChange={(e)=>{
        setInput(e.target.value);
        console.log(input);
      }}/>
      {/* 숙제 */}
      <button onClick={()=>{
        // 게시글 추가하기!
        let copy = [input,...title];
        setTitle(copy);

        //좋아요 버튼 추가하기!
        let copy2 = [...likeCount, 0];
        setLikecount(copy2)

      }}>제출</button>

      {/* 모달창 띄우기 - 삼항연산자를 사용하였다! */}
      {modal? <Modal index={index} title={title} updateTitle={updateTitle}/>: ""}
      {/* [💡 동적인 UI 만드는 step ]
          1. html css 미리 디자인 완성하기
          2. UI의 현재 상태를  state로 저장하기
          3. state에 따라 UI가 어떻게 보일지 작성
      */}
    </div>
  );
}

// 자식 컴포넌트
const Modal = (props) =>{
  // 게시글의 제목을 클릭여부에 따라 모달창 띄우기 
  return(
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.updateTitle}>글수정</button>
    </div>
  )
}
// [!!!]어떤걸 컴포넌트로 만들면 좋은가?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들 


export default App;

// [정리!] 자주 변경될 것 같은 html 부분은 state로 만들어 놓기 

// [정리!] 1. onClick 쓰는 법 
//         2. state변경하는 법 

// [정리!] 깊은 복사 사용하기 

// [state 변경함수 특징]
// 기존 state == 신규state의 경우 변경 안해줌 
