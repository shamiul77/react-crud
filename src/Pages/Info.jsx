import React, { useEffect, useState } from 'react'

function Info() {
    const[state, setState]= useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await data.json();
             setState(json);}
             fetchData();
    },[])
  return (
    <div className='py-5 mx-5 row g-2'>
        {
            state.map((item) =>{
                return(
                        <div className='card  list-unstyled col-3 px-5 '>
                            <li className='mt-3 fs-3' ><p>{item.id}</p></li >
                            <li ><p className='fw-bold'>{item.title}</p></li>
                            <li ><p>{item.body}</p></li>
                        </div>

                    
                )
                
        })
    }
  
    </div>
  )
}

export default Info
