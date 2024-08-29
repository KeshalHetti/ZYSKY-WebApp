import React from 'react';

const Home = () => {
  return (

    <div className='content-container'>
      <h2 className='p-b-30 text-left'>Welcome to ZYSKY Partner Portal</h2>
      <form>
        <div className='fieldset homefeildset m-b-30'>
          <div className='legend'>Statistics</div>
          <div class="container text-center">
  <div class="row row-cols-1   row-cols-md-6">
    <div class="col"> </div>
    <div class="col"> <h4>Locations</h4>
      <h1>2</h1></div>
    <div class="col"><h4>Promos</h4>
                <h1>5</h1></div>
    <div class="col"><h4>Clients</h4>
                <h1>164</h1></div>
    <div class="col"><h4>Notifications</h4>
                <h1>567</h1></div>
    <div class="col"> </div>
  </div>
</div>
          

        </div>

        <div className='fieldset'>
          <div className='legend'>Quick Start</div>
          
          <div className="container justify-content-md-center">
  <div className="row">
  <div className="col-lg-4 col-md-auto">
    <div className='number'>1</div>
    <h4 className='yelloish-green'>Add Location</h4>
    <p>Add location of your store, restaurant, any place when you would like to offer Promos to your Clients.</p>
    </div>
    <div className="col-lg-4  col-md-auto">
    <div className='number'>2</div>
    <h4 className='yelloish-green'>Add Promo</h4>
    <p>Create a nice Promo to offer and link it to the location. Promo can be a time-offer, one-time offer, or a special offer.</p>
    </div>
    <div className="col-lg-4  col-md-auto">
    <div className='number'>3</div>
    <h4 className='yelloish-green'>Notifications</h4>
    <p>Configure Auto Notifications that will be pushed to your Clients based on their transactions.</p>
    </div>
  </div>
</div>
        </div>
      </form>


    </div>


  );
};

export default Home;