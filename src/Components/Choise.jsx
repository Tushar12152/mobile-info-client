import apple from './../assets/apple.png'
const Choise = () => {
    return (
        <div className="lg:flex gap-6 items-center py-10">
            <div className="lg:w-[50%] mb-6 lg:mb-0">
                <h1 direction="left" className="font-bold text-4xl mb-4  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Choise Your Own Mobile Phone From Here And bought from your nearest showroom</h1>
                <marquee direction="right" className="font-bold text-2xl mb-4  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Thank you for join with us</marquee>
                <p>
                     This web site is made for mobile phone choise!! You can choose your personal mobile from here .You can know about your personal mobile phone from this website. Thank You for Join with us!!!!.
                </p>
            </div>
            <div className="lg:w-[50%]">
                 <img className='rounded-xl w-full' src={apple} alt="" />
            </div>
        </div>
    );
};

export default Choise;