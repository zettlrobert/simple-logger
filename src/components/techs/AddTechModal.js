import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';


function AddTechModal({ addTech }) {
  //State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [tech, setTech] = useState('');



  const onSubmit = () => {
    //Error Checking Modal Input
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last name' });
    } else {
      addTech({
        firstName,
        lastName
      })

      M.toast({ html: `Tech: ${firstName} ${lastName} added!` })
      // Clear all Fields
      setFirstName('');
      setLastName('');
    }
  }

  return (
    // div needs id from link to open as modal + material className modal
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-teal btn"
          style={modalFooterStyle}>
          Enter
        </a>
      </div>
    </div>
  )
}

const modalFooterStyle = {
  margin: '0 24px'
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
