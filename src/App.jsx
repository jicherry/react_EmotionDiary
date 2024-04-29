import './App.css';
import { useReducer , useRef , createContext } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';


const mockData = [
  {
    id: 1, 
    createdDate: new Date('2024-04-29').getTime(),
    emotionId:1,
    content: '1번의 일기 내용',
  },
  {
    id: 2, 
    createdDate: new Date('2024-04-28').getTime(),
    emotionId:2,
    content: '2번의 일기 내용',
  },
  {
    id: 3, 
    createdDate: new Date('2024-03-25').getTime(),
    emotionId:3,
    content: '3번의 일기 내용',
  },
];

function reducer(state , action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) 
        ? action.data 
        : item 
    );
    case 'DELETE':
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();

export const DiaryDispatchContext = createContext();


function App() {

  const [date , dispatch] = useReducer(reducer , mockData);
  const idRef = useRef(3)

  //새로운 일기 추가
  const onCreate = (createdDate , emotionId , content) => {
    dispatch({
      type:'CREATE',
      data : {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  //기존 일기 수정
  const onUpdate = (id ,createdDate, emotionId, content)=> {
    dispatch(
      {
        type: 'UPDATE',
        data: {
          id,
          createdDate,
          emotionId,
          content,
        },
      });
  };

  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={date}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
