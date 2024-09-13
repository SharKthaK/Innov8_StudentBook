import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../../../Dept.json'
import './BBIT.css'

function BBIT() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div className='templateContainerBBIT' style={{ backgroundImage: 'url(https://images.static-collegedunia.com/public/college_data/images/campusimage/1417179070bbit4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='searchInput_Container'>
        <input type='text' placeholder='Search departments...' onChange={(event)=>{
          setSearchTerm(event.target.value)
        }}></input>
      </div>
      <div className='heading'>B.TECH DEPARTMENTS</div>
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
                  <img src={val.img} style={{ border: '3px solid grey', borderRadius: '20px', transition: 'transform 0.3s' }} onMouseOver={(event) => {
                    event.target.style.transform = 'scale(1.1)';
                  }} onMouseOut={(event) => {
                    event.target.style.transform = 'scale(1)';
                  }}/>
                  <br />
                  <h3>{val.name}</h3>
                </div>
              );
            })
          }
        
      </div>
    </div>
  )
}

export default BBIT