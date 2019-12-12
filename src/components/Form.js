import React from "react";

export default class GetStartedForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xaynkzld"
        method="POST"
      >
        {status === "SUCCESS" ? <p>Thanks!</p> : <div>
          <input type="email" name="email" placeholder="Enter email"/>
          <input type="text" name="name" placeholder="Enter full name"/>
          <input type="text" name="companyName" placeholder="Enter Company name"/>
          <textarea name="message" placeholder="Write your questions or message..."/>
          <button>Submit</button>
        </div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
