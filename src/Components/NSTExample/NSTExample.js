import React from 'react';
import style from './starry.jpg';
import contents from './mountains.jpeg';
import output from './output.png';
import './NSTExample.css'

const NSTExample = () => {
  return (
    <div className='flex-wrap'>
      <div className='ma3 center dib pa3 NSTExample-div'>
        <img className='ma4 center dib pa1 NSTExample-img' src={contents} alt='' />
        <figcaption className='center pa2 NSTExample-caption' >Take your favourite picture and grab the image url.</figcaption>
      </div>
      <div className='ma3 center dib pa3 NSTExample-div' >
        <img className='ma4 center dib pa1 NSTExample-img' src={style} alt='' />
        <figcaption className='center pa2 NSTExample-caption' >Then grab a picture that reflects your favourite artists style.</figcaption>
      </div>
      <div className='ma3 center dib pa3 NSTExample-div' >
        <img className='ma4 center dib pa1 NSTExample-img' src={output} alt='' />
        <figcaption className='center pa2 NSTExample-caption' >We will run your images through a Neural Style Transfer deep learning model. Which will produce a result like this.</figcaption>
      </div>
    </div>
  );
}

export default NSTExample
