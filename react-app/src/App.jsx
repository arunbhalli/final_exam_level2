import React from 'react';
import courses  from './data/courses';
const App = () => {
  return (
    <div>
      <h1> COURSE LIST</h1>
      <div>
        {courses.map((course) => (
          <div>
            <h3 data-cy='name'>{course.title}</h3>
            <p data-cy='location'>{course.description}</p>
            <p data-cy='car'><span className='bold'>Category: </span>{course.category}</p>
            <p data-cy='age'><span className='bold'>Instructors: </span>{course.instructors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
