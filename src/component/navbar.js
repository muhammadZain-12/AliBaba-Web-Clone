import { AppBar, Typography,TextField, Box } from '@mui/material';
import Image from '../Images.png'
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import '../App.css'


function Navbar (prop) {
  

  return (
    
      <Box>
      
      <AppBar className="navBar" sx={{backgroundColor:"white",color:"black" }}>

        <div className='upperNav'>  
          
            <Typography sx={{fontWeight:"700",borderBottom:"2px solid black"}} variant="h6">
            Products
            
            
            </Typography>

            <Typography className="para2"   variant="p">
  
            Manufacturers

            
            </Typography>
            
                    
        </div>
        
        <div className='bottomNav'>
        
        <img src={Image} width='20%' height= '80px' alt="" />
        
    <div className='search'>
        <TextField
          variant="standard"
          placeholder="What are you looking for"
          style={{
          borderRadius:'50px 0px 0px 50px',
          }}
          value = {prop.inputValue}
          onChange = {(e)=>prop.getInput(e.target.value)}

         sx={{width:"100%",border:"2px solid #ff6a00",height:"30px"}}
          
         >
          

         </TextField>

          
                    


<button className='btn'>
  <div className='btn-div'>
         <SearchIcon className = "search-Btn"/>
              Search
              </div>
        </button>
        
</div>

         <div className='icon-div'>
         <div className='icon1-div' >
        <Person2Icon className='icon1'/>
        <div className='link1-div'>
          <a href="">Sign in</a>
          <a href="">Join for free</a>
        </div>
        </div>
        <div className='icon2-div' >
        <ChatIcon/>

         Messages

        
        </div>
        <div className='icon3-div' >
        <MonetizationOnIcon/>
        Orders
        </div>
        <div className='icon4-div' >
        <ProductionQuantityLimitsIcon/>
        Cart
        </div>

        
         </div>
        
        </div>

      </AppBar>
      </Box>
  )
}

export default Navbar