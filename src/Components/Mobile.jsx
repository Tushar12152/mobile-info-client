
import PropTypes from 'prop-types';

const Mobile = ({mobile}) => {
    console.log(mobile);
    return (
        <div >
             <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img className='h-60' src={mobile?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{mobile?.name}</h2>
    <p>{mobile.brand}</p>
    
  </div>
</div>
        </div>
    );
};

Mobile.propTypes = {
    mobile:PropTypes.object
};

export default Mobile;