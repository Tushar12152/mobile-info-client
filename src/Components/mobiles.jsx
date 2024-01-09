
import PropTypes from 'prop-types';
import Responsive from './../Utils/Responsive';
import Mobile from './Mobile';


const Mobiles = ({mobiles}) => {
    // console.log(mobiles);
    return (
        <div>
           <Responsive>

           <div className='flex gap-4 '>
            <div className='border-2 min-h-screen border-black w-[80%]'>
                <div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    mobiles.map(mobile=><Mobile key={mobile} mobile={mobile}/>)
                 }
                </div>
            </div>
             <div className='border-2 min-h-screen border-black w-[20%]'>
                add
            </div>
            </div>


           </Responsive>
        </div>
    );
};

Mobiles.propTypes = {
    mobiles:PropTypes.array,
};

export default Mobiles;