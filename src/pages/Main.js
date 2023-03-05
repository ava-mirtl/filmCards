import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filmsLoad } from '../redux/actions';
import Typography from '@mui/material/Typography';
import MuiCard from '../components/MuiCard';
import './Main.scss';



export default function Main () {

const dispatch = useDispatch();

const [data, setData] = useState([]); //основной массив данных, которыми оперирую внутри компонента, больше не обращаясь к бэку
const [favor, setFavor] = useState([]); //массив из залайканных item

const sort = useSelector(state=>state.sort);//кнопка фильтра в футере кладет в стор логическое значение, от которого зависит верстка в данном компоненте
const films= useSelector(state=>{return state.films;}) //массив данных из стора
    
    
    useEffect(()=>{dispatch(filmsLoad())}, []) //данные из бэка
    
    useEffect(() => {if (films && films.length) {setData(films)}}, [films]) //кладем в стейт массив из бэка

    useEffect(() => {
          setFavor(data.filter((item)=>{return item.like===true}))}, [data]) //массив отлайканных айтемов следит за изменейнием основного массива

    useEffect(() => {}, [favor]) //синхронизация массива, т.к. через setState запаздываало на один пункт



    return(
    <div className='main'>
          <div className='main__container'>
            <Typography gutterBottom variant="h2" component="div">Премьеры этого года</Typography>
          </div>
      <div className='main__cards'>
        {(sort===false?data:favor).map(item=>{//в зависимости от того, зажата ли кнопка фильтра в футере, показывается либо основной массив, либо отлайканный 
          return <MuiCard 
            {...item} 
            arr = {data}
            methodSetState = {setData}//передаем в карточку массив и метод, чтобы изменять массив, следя за лайком.
            key={item.kinopoiskId}/>})}
      </div>
  </div>)
}
