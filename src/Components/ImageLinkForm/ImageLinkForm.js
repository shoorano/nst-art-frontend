import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({name, description, onInputChange1, onInputChange2, onSubmit }) => {
  return (
    <div className='ma4 mt0'>
      <p className='f3'>
        {description}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' placeholder='Content Url' type='tex' onChange={onInputChange1} />
          <input className='f4 pa2 w-70 center' placeholder='Style Url' type='tex' onChange={onInputChange2} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>{name}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
