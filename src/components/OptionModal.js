import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (

    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Decision Modal"
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">You should:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Close</button>
    </Modal>


);

export default OptionModal;