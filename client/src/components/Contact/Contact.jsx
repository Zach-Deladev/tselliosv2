import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default form submission

    emailjs
      .sendForm("gmail", "template_vxz34p9", e.target, "jUdWXKH0qjP5YhtOn")
      .then(
        (result) => {
          console.log("Email successfully sent", result.text);
          toast.success("Email successfully sent!");
        },
        (error) => {
          console.log("Failed to send email", error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="st-dark-bg">
      <ToastContainer />
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form
              className="st-contact-form"
              id="contact-form"
              onSubmit={sendEmail}
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap2">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">athanasiostsellios@gmail.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <a
                  href="whatsapp://send?phone=306977221245"
                  className="st-icon-wrap"
                >
                  <Icon icon="fa-solid:phone-alt" />
                </a>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>Whastapp: 00306977221245</span>
                  <span>Mobile: 07902437653</span>
                </div>
              </div>

              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
