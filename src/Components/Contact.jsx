import React, { useState } from 'react'
import StyledButton from './StyledButton'
import { useForm } from 'react-hook-form';
import { db } from '../firebase'
import { serverTimestamp, collection, addDoc } from "firebase/firestore"
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [disabled, setDisabled] = useState(false)
  const [msgSent, setMsgSent] = useState(false)
  const msgSentText = 'Your message was sent. Thank you :)'

  const theme = createTheme({
    palette: {
      bg: '#2f2f2f',
      font: '#cacaca',
      fontDark: '#8a8a8a',
      white: '#fff'
    }
  })

  const requiredField = 'This field is required.';

  const onSubmit = async (data) => {
    console.log(data)
    await setDisabled(true)
    await setMsgSent(true)
    const msg = {
      name: data.name,
      mail: data.email,
      msg: data.msg,
      date: serverTimestamp()
    }

    await addDoc(collection(db, 'messages'), msg)
    //await setDoc(doc(db, "messages", data.email), msg); data.email would be DOC ID

  }
  return (
    <ThemeProvider theme={theme}>
      <div className='contactContainer'>
        <div className='contactTitleContainer'>
          <span className='contactTitle'><span className='contactTitleNumber'>04.</span> Get in touch</span>
        </div>
        <div className='contactTextContainer'>
          <p className='contactText'>If you want to get in touch with me, either for work, for project ideas, or anything
            you'd like to talk about, feel free to send an email to <strong>fedemerino00@gmail.com</strong> or fill in the form below.</p>
        </div>
        <div>
          <form
            className='formContainer'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField sx={{ 'minWidth': '60vw', '&>label': { 'color': '#cacaca' }, '&>div>input': { 'color': '#cacaca' }, '&>div:hover:before': { borderBottom: '1px solid #8A8A8A !important', transition: 'all ease 1s' } }} color='font' variant={"filled"} autoComplete='off' {...register(
              "name",
              { required: requiredField }
            )} label="Name"
            />
            <p className='requiredText'>{errors.name?.message}</p>
            <TextField sx={{ 'minWidth': '60vw', '&>label': { 'color': '#cacaca' }, '&>div>input': { 'color': '#cacaca' }, '&>div:hover:before': { borderBottom: '1px solid #8A8A8A !important', transition: 'all ease 1s' } }} color='font' variant={"filled"} autoComplete='off' {...register(
              "email",
              {
                required: requiredField, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address."
                }
              },
            )} label="Email"
            />
            <p className='requiredText'>{errors.email?.message}</p>
            <TextField sx={{ 'minWidth': '60vw', '&>label': { 'color': '#cacaca' }, '&>div>input': { 'color': '#cacaca' }, '&>div:hover:before': { borderBottom: '1px solid #8A8A8A !important', transition: 'all ease 1s' } }} color='font' variant={"filled"} autoComplete='off' {...register(
              "msg",
              { required: requiredField }
            )} label="Message"
            />
            <p className='requiredText'>{errors.msg?.message}</p>
            {msgSent ? <p className='msgSent'>{msgSentText}</p> : null}
            <div className='submitContainer'>
              <StyledButton disabled={disabled} variant={"contained"} type={"submit"} innerText={"Submit"} color={"#64ffda"} bgHover={"rgba(100,255,218,0.1)"} />
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contact
