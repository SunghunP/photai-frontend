import styled from "styled-components"
import emailjs from '@emailjs/browser';
import { useState } from "react";

const StyledContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Fredoka One', cursive;
  background: url(${props => props.bg});
  background-size: cover;
  height: 65%;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Arial';
  label {
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 25px;
  }
  input, textarea, button{
    width: 500px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    font-family: 'serif';
    font-Size: 20px;
    border: 2px solid black;
  }
  button {
    width: 100%;
    font-family: 'Fredoka One', cursive;
  }
  .msg {
    height: 300px;
  }
`

export default function Contact({ bambooBg }) {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    msg: ''
  });

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send('service_p1iyac8', 'template_5bjuhsj', form, '6R44V0oeTGUcmR2Kc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setForm({
      email:'',
      subject: '',
      msg: ''
    })
    alert("You're email has been sent!");
  };

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

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
}