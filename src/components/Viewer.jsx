import './Viewer.css';
import { getEmotionImage } from '../util/get-emotion-image';


const Viewer = () => {
    const emotionId = 1;

    return(
        <div className='Viewer'>
            <section className='img_section'>
                <h4>오늘의 감정</h4>
                <div>
                    <img src={getEmotionImage(emotionId)} />
                </div>

            </section>
            <section className='content_section'>

            </section>
        </div>
    );
};  


export default Viewer;
