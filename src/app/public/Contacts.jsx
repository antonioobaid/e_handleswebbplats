import { useState } from "react";
import { Forminput } from "../../components/Forminput";
import axios from 'axios'

function Contacts() {
    
    const basestate = {
        name: "",
        email: "",
        message: "",
      };
    
      const [formData, setFormData] = useState(basestate);
      const [formError, setFormError] = useState(basestate);
      const [formSubmitted, setFormSubmitted] = useState(false);

      const handelChange = (e) => {
        setFormData((data) => {
          return {
            ...data,
            [e.target.name]: e.target.value,
          };
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!validate()) return;     
          try {
            console.log('Form Data:', formData)
            const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', formData)
            console.log('Axios Request:', res);
    
          if (res.status === 200) {
            setFormSubmitted(true);
          } else {
            console.error('Error submitting form. Unexpected status:', res.status);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
        console.log(formData)     
        setFormData(basestate);
        setFormError(basestate);
      };

      const validate = () => {
        const err = {};    
        if (formData.name.trim() === "") {
          err.name = "You need to enter a first name";
        } else if (formData.name.trim().length < 2) {
          err.name = "Your name must be atleast 2 chars long";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.email.trim() === "") {
          err.email = "You need to enter an email address";
        } else if (!emailRegex.test(formData.email)) {
          err.email = "Email not valid!";
        }   
        if (formData.message.trim() === "") {
          err.message = "You need to enter one message";
        }
        setFormError(err);    
        return Object.keys(err).length < 1;
      };
    
    return (
        <div>
      <main className="main-contacts">
        <section>
          <div className="backgroundsbild">
            <img src="\src\assets\images\backgroundbild1.webp" alt="backgroundbild" />
          </div>
        </section>
        <form className="form-contacts" onSubmit={handleSubmit}>
          <div className="form-align">
            <div className=" form-info-">
              <p className="rubrik"> write Something </p>
              <Forminput
                label="name :"
                onChange={handelChange}               
                value={formData.name}
                errormsg={formError.name}
                className="name"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              />
              <Forminput
                label="E-mail :"
                onChange={handelChange}
                value={formData.email}
                errormsg={formError.email}
                className="email"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />

              <label htmlFor="message" className="form-label">
                Message :
              </label>
              <textarea
                name="message"
                onChange={handelChange}
                value={formData.message}
                errormsg={formError.message} 
                id="message"
                className="form-textarea"
                required
              ></textarea>
              {formError.message && <p className="Invalid-input">{formError.message}</p>}
              <button type="submit" className="submit-btn">
                Skicka meddelande
              </button>
              {formSubmitted && <p className="form-submitted">Message sent successfully</p>}
            </div>
          </div>
        </form>        
      </main>
    </div>      
    )
}
export default Contacts