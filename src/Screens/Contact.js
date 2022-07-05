import React, { useState } from "react";
import swal from "sweetalert";

const Contact = ({data}) => {
  const cardBox = [
    {
      h2: "phone",
      p1: "+1-202-555-0137",
      p2: "+1-202-555-0189",
      class: "fa fa-phone",
    },
    {
      h2: "address",
      p1: "514 S. Magnolia St.",
      p2: "Orlando , US",
      class: "fa fa-home",
    },
    {
      h2: "E - mail",
      p1: "dummymail@mail.com",
      p2: "yourmail@mail.com",
      class: "fa fa-envelope",
    },
  ];
  
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName,surName, email, subject, message } = e.target.elements;
    let details = {
      name: firstName.value,
      surname : surName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    
    let response = await fetch("http://localhost:5000/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details)
  });
  setStatus("Submit");
    let result = await response.json();
    swal("Success",result.message,"success");
    // alert(result.message);
};
  return (
    <>
      <div className="impl_bread_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>contact</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_contact_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 offset-lg-1">
              <div className="impl_con_form">
                <div className="contact_map">
                  <div id="contact_map"></div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <h1>get in touch</h1>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control require"
                        placeholder="YOUR FIRST NAME"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="surName"
                        className="form-control require"
                        placeholder="YOUR LAST NAME"  
                        required                      
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control require"
                        placeholder="YOUR EMAIL"
                        data-valid="email"
                        data-error="Email should be valid."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="SUBJECT"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="YOUR MESSAGE"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="response"></div>

                  <div className="col-lg-12 col-md-12">
                    <input type="hidden" name="form_type" value="contact" />
                    <button type="submit" className="impl_btn submitForm">
                      {status}
                    </button> 
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="impl_contact_info">
                <div className="row">
                  {cardBox.map((cb) => (
                    <div className="col-lg-4 col-md-4">
                      <div className="impl_contact_box">
                        <div className="impl_con_data">
                          <i className={cb.class} aria-hidden="true"></i>
                          <h2>{cb.h2}</h2>
                          <p>{cb.p1}</p>
                          <p>{cb.p2}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
