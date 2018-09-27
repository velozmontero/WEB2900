import React from 'react';

const Form = (props) => {
  const { 
    from, 
    email, 
    subject, 
    message,
    onFormChange,
    onSubmit 
  } = props;

  return (
    <div>
      <input 
        placeholder="from"
        type="text" 
        value={from} 
        onChange={(e) => onFormChange(e.target.value, email, subject, message)}
      />

      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => onFormChange(from, e.target.value, subject, message)}
      />

      <input
        placeholder="subject"
        type="text"
        value={subject}
        onChange={(e) => onFormChange(from, email, e.target.value, message)}
      />

      <input
        placeholder="message"
        type="text"
        value={message}
        onChange={(e) => onFormChange(from, email, subject, e.target.value)}
      />

      <button onClick={onSubmit}>Send Email</button>
    </div>
  )
}

export default Form;