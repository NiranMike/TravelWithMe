import React,{useState} from 'react';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData = [
    {
        url: 'https://www.planetware.com/wpimages/2021/01/africa-best-cities-cape-town-south-africa.jpg'
    },

    {
        url: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/Cover-Places-To-Visit-South-Africaepb0310.jpg"
    },

    {
        url: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Cover-for-Places-To-Visit-In-South-Africa-In-April_27th-jan.jpg"
    },

    {
        url: "https://cdn.thecoolist.com/wp-content/uploads/2021/03/Sphinx-of-Giza-next-to-the-Pyramids.jpg"
    },

    {
        url: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-for-best-places-to-visit-in-July-in-the-world.jpg"
    }
]


const Carousel = () => {

    const [slide, setSlide] = useState(0);
    const numData = Object.keys(sliderData).length

    const prevSlide = () => {
        setSlide(slide === 0 ? numData - 1 : slide - 1);

    }
    const nextSlide = () => {

        setSlide(slide === numData - 1 ? slide - (numData - 1) : slide + 1 );
        console.log('numData is' + sliderData.lenght);
    }

  return (
    
    <div className=' max-w-[150vh]  justify-center flex items-center mx-auto px-4 py-16 relative '>
        {<BsArrowLeftSquareFill onClick={prevSlide} className={slide === 0 ? 'hidden':'absolute text-3xl text-[#000000] left-8 md:left-[100px] cursor-pointer'} />}
        <BsArrowRightSquareFill onClick={nextSlide} className={slide === numData - 1 ? 'hidden' : 'absolute  text-3xl text-[#000000] right-8 md:right-[100px] cursor-pointer'} />
        {sliderData.map((data, index)=>{
            return(
                    <div className={index === slide ? 'block' : 'hidden'}>
                        {index === slide && (<img className='w-full h-full object-contain rounded-md' src={data.url} alt="/" />)}
                    </div>
            )
        })}
    </div>
  );
}

export default Carousel;