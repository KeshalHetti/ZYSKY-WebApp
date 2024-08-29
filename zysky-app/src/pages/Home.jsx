import React from 'react';

const Home = () => {
    return (
    
    <div className='content-container'>
    <h2 className='p-b-30 text-left'>Welcome to ZYSKY Partner Portal</h2>
            <form>
                <div className='fieldset homefeildset'>
                    <div className='legend'>Statistics</div>
                    <div class="statistics-item">
                      <h3>Locations</h3>
                    </div>
                    <div class="statistics-item">
                      <h3>Promos</h3>
                    </div>
                    <div class="statistics-item">
                      <h3>Clients</h3>
                    </div>
                    <div class="statistics-item">
                      <h3>Notifications</h3>
                    </div>
                </div>

                <div className='fieldset'>
                    <div className='legend'>Quick Start</div>
                </div>
            </form>
    

    </div>
    
  
  );
  };
  
  export default Home;