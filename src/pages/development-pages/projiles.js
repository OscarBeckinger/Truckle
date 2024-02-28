import React from 'react'
export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                        <img src={value.imageurl} alt="" style={{ width: '100px', height: '100px' }} />

                            <div className="info">
                                <h3 className='name text-dark'>{value.title}</h3>    
                                <span>Ranking: {index + 1}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.reviewCount}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}