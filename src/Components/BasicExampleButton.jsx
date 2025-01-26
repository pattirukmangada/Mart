import Form from 'react-bootstrap/Form';
import React from 'react';
import '../App.css'

function BasicExampleButton({ setSelectedCategory }) {
  return (
    <div className='filter-container'>
      <div className='filter'>
        <Form.Select
          aria-label="Default select example"
          className='filter-tab'
          onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category on change
        >
          <option value="all">Filter By Category</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
        </Form.Select>
      </div>
      <div className='input'>
        <Form.Control
          type="text"
          className='input-search'
          id="search"
          placeholder='Search.. 🔍'
          aria-describedby="Search"
        />
      </div>
    </div>
  );
}

export default BasicExampleButton;
