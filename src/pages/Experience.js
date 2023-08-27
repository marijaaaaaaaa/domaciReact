// react imports
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// styles
import './Experience.css';

// utils
import { studije } from '../data/experience';

const Experience = () => {
  const [value, setValue] = useState(0);

  const { fakultet, dates, duties, title } = studije[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Fakultet organizacionih nauka</h2>
        <div className='underline'></div>
      </div>
      <div className='studije-center'>
        <div className='btn-container'>
          {studije.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`studije-btn ${index === value && 'active-btn'}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className='studije-info'>
          <h3>{title}</h3>
          <h4>at {fakultet}</h4>
          <p className='studije-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='studije-desc'>
                <FaAngleDoubleRight className='studije-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Experience;
