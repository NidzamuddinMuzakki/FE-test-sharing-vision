import React from "react"
import "./style.css"
const Card = (props:any) => {
   
    const {data} = props
    console.log(data?.data?"a":"b")
    return (
        <div>
            {/* <h1>Ordered List Cards</h1> */}
            <ol className="olcards">
            {data?.length && data?.map((datas:any,inde:number)=>{
                return(
                <li key={inde}>
                    <div className="content">
                        {/* <div className="icon">😀</div> */}
                        <div className="title"> {datas?.title}</div>
                        <div className="sub-title">{datas?.category}</div>

                        <div className="text">{datas?.content}</div>
                    </div>
                </li>
                )
            } )}   
		
		
	</ol>
        </div>
    );
};
  
export default Card;