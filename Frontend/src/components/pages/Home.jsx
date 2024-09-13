import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../../TestData.json'
import { BsSearch } from 'react-icons/bs'
import './Home.css'

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div className='templateContainer' style={{ backgroundImage: 'url(https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-21.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='searchInput_Container'>
        <input type='text' placeholder='Search colleges...' onChange={(event)=>{
            setSearchTerm(event.target.value)
          }}></input>
          </div>
          <div className='heading'>Search College Name <BsSearch style={{paddingTop:'4px'}}/></div>
          <div className='template_Container'>
            {
            data.filter((val)=>{
              if(searchTerm === ""){
                return val
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            })
            .map((val)=>{
              return (
                <div className="template" key={val.id} style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={()=>{
                  navigate(`/${val.id}/${val.name}`)
          
                }}>
                  <img src={val.img} style={{ border: '3px solid grey', borderRadius: '20px', transition: 'transform 0.3s' ,width: '200px'}} onMouseOver={(event) => {
                    event.target.style.transform = 'scale(1.1)';
                  }} onMouseOut={(event) => {
                    event.target.style.transform = 'scale(1)';
                  }}/>
                  <br />
                  <h3 style={{ textAlign:'center'}}>{val.name}</h3>
                </div>
              );
            })
          }
        
      </div>
    </div>
  )
}

export default Home