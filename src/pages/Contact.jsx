import styled from "styled-components"
import { useState } from "react";

export default function Contact({ bambooBg }) {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    msg: ''
  })
  
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  return <StyledContactPage className="contact" bg={bambooBg}>
    <h1>Have any questions or concerns?</h1>
    <StyledForm onChange={handleChange} onSubmit={sendEmail} >
      <label for='email'><strong>Email</strong></label>
      <input className="email" placeholder="Your Email" type='email' name="email" required="true" value={form.email} />

      <label for='Subject'><strong>Subject</strong></label>
      <input className="subject" placeholder="Subject" name="subject" required="true" value={form.subject} />

      <label for='msg'><strong>Message</strong></label>
      <textarea className="msg" placeholder="Please type in your message here" name="msg" required="true" value={form.msg}></textarea>

      <button type="submit" value="Send">Submit</button>
    </StyledForm>
  </StyledContactPage>
  // hi
}