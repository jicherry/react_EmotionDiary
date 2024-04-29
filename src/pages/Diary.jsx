import { useParams } from "react-router-dom";

const Diary = () => {
    // useParmas : 사용자가 전달한 url 파라미터를 가져온다. 
 
    const params = useParams(); 

    return <div>{params.id}번 일기입니다.</div>
};   

export default Diary;