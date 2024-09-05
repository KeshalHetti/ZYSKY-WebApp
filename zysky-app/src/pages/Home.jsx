import React from 'react';

const Home = () => {
  return (
<div>
<h1 className='p-b-20 text-left p-l-30'>Welcome to ZYSKY Partner Portal</h1>
    <div className='content-container'>
      <form>
        <div className='fieldset homefeildset m-b-30'>
          <div className='legend'>Statistics</div>
          <div className="container text-center">
  <div className="row row-cols-1   row-cols-lg-6 statistics gx-5">
    <div className="col"> </div>
    <div className="col col-lg-2 col-md-auto"> <h4>Locations</h4>
      <h1>2</h1></div>
    <div className="col col-lg-2 col-md-auto"><h4>Promos</h4>
                <h1>5</h1></div>
    <div className="col col-lg-2 col-md-auto"><h4>Clients</h4>
                <h1>164</h1></div>
    <div className="col col-lg-2 col-md-auto"><h4>Notifications</h4>
                <h1>567</h1></div>
    <div className="col"> </div>
  </div>
</div>
  </div>
<div className='fieldset'>
          <div className='legend'>Quick Start</div>
          
          <div className="container justify-content-md-center quick-start">
  <div className="row m-b-30 gx-5">
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
  <div className="row">
  <div className="col-lg-4 col-md-auto">
    <div className='number pos-r min-w-200'>Ads Only <span className='custom-badge'>Free</span></div>
    <p className='font-10px'>Be visible in ZYSKY app as a Partner. Just add your location with a nice description and photos and we’ll display it on the map, partner’s list and on your dedicated Partner’s Business Card.
This is FREE!</p>
    </div>
    <div className="col-lg-4  col-md-auto">
    <div className='number min-w-200'>Offer Promos</div>
    <p className='font-10px'>Attract Clients with Promos. Add a location and then create a bunch of attractive Promos. We will display them in ZYSKY app and all people using the app will see them.
This requires PROMOS plan.</p>
    </div>
    <div className="col-lg-4  col-md-auto">
    <div className='number min-w-200'>Loyality</div>
    <p className='font-10px'>Reach out and gain new Clients by using notifications. You can create a push notification campaign and target new Clients in you neighbourhood.
This requires LOYALTY plan.</p>
    </div>
  </div>
</div>
<p className='font-10px text-center link'>Get detailed information about our subscription plans.</p>

        </div>
      </form>

    </div>
    </div>

  );
};

export default Home;