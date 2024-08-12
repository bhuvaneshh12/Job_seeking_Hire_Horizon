import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseForm.css'; 

const CourseForm = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:9001/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/courses/add', newCourse);
      if (response.status === 200) {
        setCourses([...courses, response.data]);
        setNewCourse({
          courseName: '',
          description: '',
          imageUrl: '',
        });
        setShowForm(false);
      } else {
        console.error('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/courses/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUpdate = async (id, updatedCourse) => {
    try {
      await axios.put(`http://localhost:9001/courses/${id}`, updatedCourse);
      setCourses(
        courses.map((course) => (course.id === id ? { ...course, ...updatedCourse } : course))
      );
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-cards">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <img src={course.imageUrl} alt={course.courseName} />
            <h3>{course.courseName}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
            <button onClick={() => handleUpdate(course.id, newCourse)}>Update</button>
          </div>
        ))}

        <div className="card add-card" onClick={() => setShowForm(true)}>
          <h3>+</h3>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit} className="course-form">
              <h2>Add a New Course</h2>
              <input
                type="text"
                name="courseName"
                placeholder="Course Name"
                value={newCourse.courseName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newCourse.description}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={newCourse.imageUrl}
                onChange={handleChange}
                required
              />
              <button type="submit">Add Course</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseForm;
