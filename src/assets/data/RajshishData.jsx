const RajshishData = [
    //For Card map 
  `
    const carts=[
      {
        name:'name',class:'12'
      },
      {
        name:'name',class:'12'
      }
    ]

    const cardsStruc =({name,class})=>{
      return(
        <div>
        <p>{name} </p>
        </div>
      );
    };

    //in main return div

    {
      cart.map(newX =>(
        <cardsStruc key={newX.name} {...newX}/>
      ))
    }
    
    `,
  // 2 code for copy
  `
    function ScrollTop(){
      const handleCick =() =>{
        window.scrollTo({
          top:0,
          behavior:'smooth',
        })
      }
      return(
        <button onClick={handleClick}> top</button>
      )
    }
    
    `,

  // 3 code for copy
  `
    //react
    <div className="marquee-container">
    <div className="marquee-content">Aghori Docs!</div>
  </div>

  
    //css
    .marquee-container {
      width: 100%;
      overflow: hidden;
    }
    
    .marquee-content {
      white-space: nowrap;
      animation: marquee 60s linear infinite;
    }
    
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    
    `,
];

export default RajshishData;
