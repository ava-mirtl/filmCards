import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CardActionArea, CardActions } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import dayjs  from 'dayjs';


export default function MuiCard(props) {
  const { posterUrl, nameRu, genres, premiereRu, countries, id, arr, methodSetState } = props;
  const [like, setLike] = useState(false);
  const [del, setDel] = useState(false)


  useEffect(()=>{
    methodSetState( arr.map((item)=>{
      if(item.id===id){
        return (
        {...item,
        like: like
    })}
      else{
      return {
        ...item
      }
    ;}}))}, [like])


  const handleLike = () =>{
  setLike((state)=>{return !state});
}
  
  const handleDelete = (id) =>{
    setDel(true);
    methodSetState(arr.filter((item)=>item.id!==id))
  }


  if (del) {
    return
  }
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={posterUrl}
          alt="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
{nameRu}</Typography>
<Typography variant="body2" color="text.secondary">
Жанр: {genres[0].genre}{genres[1]&&`, ${genres[1].genre}`} 
          </Typography>
<Typography variant="body2" color="text.secondary">
Дата выхода на экран: {dayjs(premiereRu, "MM-DD-YYYY").format("DD.MM.YYYY")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
Страна: {countries[0].country}{countries[1]&&`, ${countries[1].country}`} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites" onClick={()=>handleLike()}>
          <FavoriteSharpIcon 
         color={like? "error":'disabled'} />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>handleDelete(id)}><DeleteOutlineIcon/>
</IconButton>
      </CardActions>
    </Card>
  );
}