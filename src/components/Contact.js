import React, { useState } from 'react';
import styled from 'styled-components';


const ContactSection = styled.section`
  background-color: #f2f2f2;
  padding: 4rem 0;
`;

const MaxWidthContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  font-weight: bold;
`;

const SubTitle = styled.div`
  color: #888;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Field = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonArea = styled.div`
  text-align: right;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  let name, value;
  const getUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({...user, [name]: value});
  };

  const postData = async (e) => {
    e.preventDefault();

    const {name,email,subject,message} = user;

    if(name && email && subject && message) {

      const res = await fetch("https://reactpage-ca865-default-rtdb.firebaseio.com/contactform.json",
      {
       method:"POST",
       headers: {
         "Content-Type":"application/json",
       },
       body:JSON.stringify({
         name,
         email,
         subject,
         message,
       })
      });
   
      if(res){
       setUser({
         name: "",
         email: "",
         subject: "",
         message: "",
       });
   
       alert("Thank's for contacting me")
      }

    }else{
      alert("Plz fill all the data")
    }

  
  };

  return (
    <ContactSection id="contact">
      <MaxWidthContainer>
        <Title className='text-center'><b>Contact Me</b></Title>
        <ContactContent>
          <Column>
            <Text>Get in Touch</Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
              nesciunt veritatis vitae nobis?
            </p>
            <Icons>
              <Row>
                <Icon className="fas fa-user"></Icon>
                <Info>
                  <Head>Name</Head>
                  <SubTitle>Aaqib Nakwa</SubTitle>
                </Info>
              </Row>
              <Row>
                <Icon className="fas fa-map-marker-alt"></Icon>
                <Info>
                  <Head>Address</Head>
                  <SubTitle>Mumbai, Maharashtra</SubTitle>
                </Info>
              </Row>
              <Row>
                <Icon className="fas fa-envelope"></Icon>
                <Info>
                  <Head>Email</Head>
                  <SubTitle>aaqibnakwa2121@gmail.com</SubTitle>
                </Info>
              </Row>
            </Icons>
          </Column>
          <Column>
            <Text>Message Me</Text>
            <ContactForm method='POST'>
              <Fields>
                <Field>
                  <Input type="text" name='name' placeholder="Name" value={user.name} onChange={getUserdata} autoComplete='off' required />
                </Field>
                <Field>
                  <Input type="email" name='email' placeholder="Email" value={user.email} onChange={getUserdata} required />
                </Field>
              </Fields>
              <Field>
                <Input type="text" name='subject' placeholder="Subject" value={user.subject} onChange={getUserdata} required />
              </Field>
              <Field>
                <TextArea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  name='message'
                  value={user.message} onChange={getUserdata}
                  required
                ></TextArea>
              </Field>
              <ButtonArea>
                <SubmitButton type="submit" onClick={postData}>Send Message</SubmitButton>
              </ButtonArea>
            </ContactForm>
          </Column>
        </ContactContent>
      </MaxWidthContainer>
    </ContactSection>
  );
};

export default Contact;
