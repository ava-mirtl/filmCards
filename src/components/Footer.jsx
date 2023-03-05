import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { sort } from '../redux/actions';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {

const [like, setLike] = useState(false);
const dispatch = useDispatch();

useEffect(() => { dispatch(sort(like)) }, [like]); //кладем в стор логическое значение - зажата кнопка филтра или нет

const handleSort = ()=>
{setLike(!like);
}

  return (
    <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction icon={<FavoriteIcon color={like?"error":"disabled"} onClick={()=>handleSort()}/>} />
      </BottomNavigation>
    </Paper>
  )
}
