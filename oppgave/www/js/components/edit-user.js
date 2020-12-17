import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
      <h1>firstname</h1>
      <input type="text" id="fNameInp">
      <h1>surname</h1>
      <input type="text" id="sNameInp">
      <h1>username</h1>
      <input type="text" id="uNameInp">
      <h1>old password</h1>
      <input type="text" id="oldPwdInp">
      <h1>new password</h1>
      <input type="text" id="pwdInp">
      <h1>submitt</h1>
      <button @click="${this.register}">Submitt</button>`
  }
  
  register(e){
    var uid = this.user;

    var firstName = this.shadowRoot.getElementById("fNameInp").value;
    var lastName = this.shadowRoot.getElementById("sNameInp").value;
    var uname = this.shadowRoot.getElementById("uNameInp").value;
    var oldpwd = this.shadowRoot.getElementById("oldPwdInp").value;
    var pwd = this.shadowRoot.getElementById("pwdInp").value;

    const data = {uid, firstName, lastName, uname, oldpwd, pwd};


    fetch('api/updateUser.php',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {res.json()}
    )
  }

}
customElements.define('edit-user', EditUser);
