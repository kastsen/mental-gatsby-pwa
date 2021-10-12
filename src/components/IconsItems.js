import React from "react"

export const IconsItems = (data, className) => {
  const items = data.map((item) => {
      return (
        <div className={className} key={item.id}>
          <div className="box">
            <img src={item.img} alt={item.name} className='feature-icon'/>
            <h3>{item.name}</h3>
            <p>{item.descr}</p>
          </div>
        </div>
      )
    }
  );
  return items;
}