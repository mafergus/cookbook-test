import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RecepiesContext from "../../components/reecpies/RecepiesContext"
import recipesData from "../../components/reecpies/data.json"

function Topics(props) { 
    const { children, value, index, ...other } = props;
    return (
      <div
        role="Topics"
        hidden={value !== index}
        id={`vertical-Topics-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-Topics-${index}`,
    };
  }
const  Recepies = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {  
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ bgcolor: 'background.paper', display: 'flex', width:  "85% ", margin: "50px auto" }}
       >
          <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 5, borderColor: '#ffa500' }}
        >
            {
                recipesData.recepies.map((item)=>
                
                <Tab sx={[
                {
                    '&:hover': {
                      color: '#ffa500   '}
                },
                {
                    '&.Mui-selected': {
                      color:'#ed9121',
                      borderRight: "3px solid #e56717"
                    }
                },
                    ]}  key={item.id} label={item.name} {...a11yProps(0)}/>
                )}
        </Tabs>
   {
     recipesData.recepies.filter((detail) => +detail.id === value).map((item) => 
        <Topics value={ value} index={+item.id} key={item.id}>
            <RecepiesContext
                title={item?.name}
                desc={item?.description}
                img={item?.image}
                author={item?.author}
            />
        </Topics>
    )
   }
     
      </Box>
    );
}

export default Recepies;
