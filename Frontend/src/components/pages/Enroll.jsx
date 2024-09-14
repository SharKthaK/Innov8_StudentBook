import React from 'react'
import './Enroll.css'

function Enroll() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch('/add', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/';
        alert('Enrollment Request Successful');
      } else {
        // Handle error
        window.location.href = '/';
        alert('Enrollment Request Successful');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col-lg-6 mx-auto mt-4">
          <div className="card shadow">
            <div className="card-header bg-primary">
              <h5 className="text-light">Add Your College</h5>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} id="add-form" encType="multipart/form-data">
                <div className="mt-3">
                  <label htmlFor="roll">College ID</label>
                  <input type="text" name="roll" className="form-control form-control-lg" placeholder="Enter Roll" required/>
                </div>
                <div className="mt-3">
                  <label htmlFor="name">College Name</label>
                  <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name" required/>
                </div>
                <div className="mt-3">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name="phone" className="form-control form-control-lg" placeholder="Enter Phone" required/>
                </div>
                <div className="mt-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email" required/>
                </div>
                <div className="mt-3">
                  <label htmlFor="image" >Upload College Image</label>
                  <input type="file" name="image" className="form-control form-control-lg" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default Enroll;