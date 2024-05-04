import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from '../components/Viewer';


const Diary = () => {
    // useParmas : 사용자가 전달한 url 파라미터를 가져온다. 
 
    const params = useParams(); 

    return (
    <div>
        <Header 
        title={'yyyy-mm-dd 기록'}
          leftChild={<Button text={'< 뒤로가기'} />}
          rightChild={<Button text={'수정하기'} /> }
        />
        <Viewer />
    </div>
    )
};   

export default Diary;