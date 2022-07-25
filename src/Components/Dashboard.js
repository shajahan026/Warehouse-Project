
const Dashboard=props=>{
  //class=bg-image not needed,still works
    return <div class="bg-image h-100 " style={ {backgroundImage : "url('https://img.freepik.com/free-vector/cream-sprinkles-frame-background-cute-pastel-ice-cream-design-vector_53876-146725.jpg')" } }>
    <div className="container">
        <div className="container text-center">

          <h1>Welcome To the Dashboard</h1>
          <h2>#Organize,Control and Monitor your supply chain!!</h2>
          </div>
         </div>
         <br></br>

     <h3><i className="text-left">SupplyChainBrain</i></h3>
            <br></br>
            <p>Published by Keller International, 
            <a href="https://www.supplychainbrain.com/" target="blank">SupplyChainBrain</a> covers a wide selection of supply chain topics. Readers can view the latest supply chain news, listen to podcasts or watch videos. 
            Also available are white papers, case studies, webinars, daily newsletters and a digital magazine.</p>

           <br></br>
    <h3><i className="text-left">MIT SupplyChain</i></h3>
      Produced by the MIT Center for Transportation,<a href="https://medium.com/mitsupplychain" target="blank"> MIT Supply Chain</a> offers news, research and insights into supply chain technologies and ideas. 
      The center publishes several monthly blogs dealing with pressing issues such as COVID-19, E-commerce and transportation.
      <br></br>
      <br></br>
           <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault"><b>Notify me about new updates</b></label>
           </div>
       <br></br>    
       <div class="container mt-4 "> 
       <div class="text-center">
   
          <div class="card">
            <div class="card-body bg-color:primary">
                 <h5>Contact Us</h5>
                <i class="fa-solid fa-paper-plane"></i> Customercare@logistics.com<br></br>
                <i class="fa-solid fa-location-dot"></i> Logistics Inc P.O.Box 43083<br></br>Cascade BurnBay Complex HP NH/275<br></br>
                <i class="fa-solid fa-square-phone"></i> TOLL FREE: 18001027245
                
                </div>
                </div>
                </div>
                </div>

    </div>
 }
export default Dashboard;