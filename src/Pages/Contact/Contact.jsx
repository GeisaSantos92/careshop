import React, {useState, useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Contact = () => {

    const [validated, setValidated] = useState(false);
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false);
    const inputRefs = {
        firstName: useRef(null),
        lastName: useRef(null),
        email: useRef(null),
        message: useRef(null),
        phone: useRef(null),

    }
   

     function functionOne(){
            emailjs.sendForm('service_r6ek2j4', 'template_57qpqv3', form.current, 'qdvKZZ-KflbS-qgSK')
                .then((result) => {
                    setSuccessMessage(true);
                    
                    setTimeout(() =>{
                        setSuccessMessage(false)
                        Object.values(inputRefs).forEach((input) => {
                            input.current.value = '';
                        });
                    }, 5000);
                }, (error) => {
                    console.log(error.text);
                });
            }
    
           
        function handleSubmit (e){
            e.preventDefault();             
            
            const form = e.currentTarget;
                if (form.checkValidity() === false) {
                  e.preventDefault();
                  e.stopPropagation();
                
                } else{
                    functionOne();
                    setTimeout(() =>{
                      setValidated(false)
                    }, 5000);             
            
                }  
                
                setValidated(true); 
            
        }

       
  return (
    <section className="containerMax ">
        <div className="containers contact">
            <div className="banner-contact">
                <h1>THE MOST SIGNIFICANT </h1>
                <h1>INOVATIONS</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti consectetur conse <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti 
                </p>
            </div>           
            <h1>Contact Information</h1>          

            <div className="form-contact">
                <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}   >
                    <Form.Group className="mb-3 form-flex" controlId="validationCustom01">                            
                    <Form.Control required defaultValue="" type="text" name='user_firstName' placeholder="first name"  ref={inputRefs.firstName}/>                            
                    <Form.Control required defaultValue="" type="text" name='user_lastName' placeholder="last name"  ref={inputRefs.lastName}/>
                    </Form.Group>
                    <Form.Group className="mb-3 form-flex" controlId="validationCustom01">                   
                        <Form.Control required defaultValue="" type="number" name='user_phone' placeholder="phone"  ref={inputRefs.phone}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required defaultValue="" name="user_email" type="email" placeholder="email adress"ref={inputRefs.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" required defaultValue="" as="textarea" type="text" placeholder="message" ref={inputRefs.message} />
                    </Form.Group>
    
                    <div className="btn-form">
                        <Button className='addToCartBttn' value="Send" type="submit">
                            SUBMIT
                        </Button>
                    </div>
                </Form>
                { successMessage && (
                <div className='ok' >
                    Email sent successfully!
                </div>
            )}
            </div>
        </div>
    </section>
  )
}
