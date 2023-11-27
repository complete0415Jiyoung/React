import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 유저가 URL파라미터에 입력한것을 가지고 오려면 useParams()사용!

// 컴포넌트의 Lifecycle 생명주기 
// 페이지에 장착되기도하고(mount)
// 가끔 업데이트 되기도(update)
// 필요 없으면 제거되기되(numout)
// -> 컴포넌트는 이런 인생 주기를 겪음

// 왜 배우느냐 
// 중간 중간의 컴포넌트 코드 인생 주{기에 간섭할수 있음


// 예전 방식으로 생명주기 관리
// class Detail2 extends React.Component{
  
//   // 컴포넌트가 mount시 여기 코드가 실행됨
//   componentDidMount(){
    
//   }
  
//   // 컴포넌트가 update시 여기 코드가 실행됨
//   componentDidUpdate(){
    
//   }
  
//   // 컴포넌트가 unmount시 여기 코드가 실행됨
//   componentWillUnmount(){

  //   }
  // }
  
  
  
const Detail = ( props ) =>{
  
  let {id} = useParams();
  let findProduction = props.shoes.find((x)=> x.id == id)
  // 스위치 만들기 
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [inputValue, setInputvalue] = useState('')
  useEffect(()=>{
    // mount, update될 때 아래 함수를 실행함

    // 렌더링이 다 되고 나서 마지막에 실행된다
    // 예를 들어 복잡한 반복문을 10000번 실행한다면
    // html를 먼저 보여주고 시간이 오래 걸리는 코드를 적어 효율적으로 빠른 서버관리
    
    // - 어려운 연산
    // - 서버에서 데이터 가져오는 작업
    // - 타이머 장착하는 것 

    // 왜 Effect? 함수의 핵심기능과 상관없는 부가기능
    // console.log('안녕?')

    // let a = setTimeout(()=> setAlert(false),2000)  
    // console.log(2)
    return()=>{
      // 기존 데이터를 제거하는 용도로 사용함 
      // console.log(1);
      // clearTimeout(a);
      
    
    } 
  },[inputValue])

  /*****************정리**************/ 
  /*
  useEffect(()=>{})         1. 재렌더링때마다 코드를 실행하고 싶으면
  useEffect(()=>{}, [])     2. mount시 1회 코드를 실행하고 싶으면
  useEffect(()=>{
    return() =>{

    
  }, [])                    3. numount시 1회 코드실행하고 싶으면
                            4. useEffect 실행전에 뭔가 실행하려면 
                            return () => {}
  useEffect(()=>{}, [count])5.특정 state변경시에만 실행하려면[state] 
  
                            */
  /**********************************/ 
  

  return(
      
    <div className="container">
      {alert == true?
        <div className="alert alert-warning">
          2초 이내 구매시 할인
       </div>
      : null }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduction.title}</h4>

          
          <input onChange={(e)=>{ setInputvalue(e.target.value)}}></input>
          <p>{findProduction.content}</p>
          <p>{findProduction.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <br></br>
          * 재렌더링 시에도 update시에도 useEffect실행
          <button onClick={()=>{setCount(count+1)}}>count</button> 
          <div>{count}</div>
        </div>
      </div>
    </div> 
  ) 
}

export default Detail;