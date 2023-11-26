import { useParams } from "react-router-dom";
// 유저가 URL파라미터에 입력한것을 가지고 오려면 useParams()사용!

const Detail = ( props ) =>{
  let {id} = useParams();
  let findProduction = props.shoes.find((x)=> x.id == id)
  console.log(id)

  return(
      
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduction.title}</h4>
          <p>{findProduction.content}</p>
          <p>{findProduction.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  ) 
}

export default Detail;