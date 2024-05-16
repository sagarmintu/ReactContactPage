import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onViaCallSubmit = () => {
        alert("If you need help, feel free to call ...");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdOutlineEmail fontSize="24px" />}
          />

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="Text">Text</label>
              <textarea name="text" rows="8" />
            </div>

            <div style={{ display:'flex', justifyContent:'end' }}>
                <Button text="Submit"/>
            </div>

            <div>{name}</div>
            <div>{email}</div>
            <div>{text}</div>

          </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/Service 24_7-pana 1.svg" alt="all time service" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
