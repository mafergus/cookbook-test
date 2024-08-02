import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const RecepiesContext=({title ,desc,author,img})=> {
  return (
    <Card   sx={{padding: "25px",maxWidth: "1000px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
          { Array.from(author)[0]}
          </Avatar>
        }
    
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        maxWidth="600"
        height="250"
        image={require(`../../assets/foods_images${img}`)}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
 
      
    </Card>
  );
}
export default RecepiesContext;