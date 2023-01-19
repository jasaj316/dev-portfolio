<script setup lang="ts">
import { reactive, onMounted } from 'vue';

// ##FORM
// v-model variables for form
let subject: string = "";
let body: string = "";

// reactive variables for button and personal data
const State: { sendButton: string, email: string, emailClickable: string } = reactive({
  sendButton: "mailto:jasaj316@gmail.com?subject=&body=",
  email: "",
  emailClickable: ""
});

// when page loads
onMounted(() => {
  // check if local email variable exists
  let localS = localStorage.getItem('email');
  // if so, display email, if not, show clickable box
  localS ?
    (State.email = localS, State.emailClickable = "")
    : (State.email = "░░░░░░░░░░░░░░", State.emailClickable = "clickable");
});

// when user types
function updateButton() {
  //update mailto with subject and body
  State.sendButton = `mailto:jasaj316@gmail.com?subject=${subject}&body=${body}`;
}

// if email has been clicked
function showEmail() {
  // create local variable so store email
  localStorage.setItem('email', `jasaj316@gmail.com`);
  // change reactive variables to show email
  State.email = `jasaj316@gmail.com`;
  State.emailClickable = "";
}
// ##FORM

</script>


<template>
  <main>
    <div>
      <h1>Contact Me</h1>
      <h3>Please send me an email</h3>
    </div>
    <form action="#" method="get">
      <fieldset>
        <label for="subject">Subject:</label>
        <input type="text" name="subject" id="subject" v-model="subject" @input="updateButton" />
        <label for="message">Write your message here:</label>
        <textarea name="body" id="body" rows="10" v-model="body" @input="updateButton"></textarea>
      </fieldset>
      <fieldset>
        <a class="form-button" :href="State.sendButton">Send</a>
        <p>
          <i>Or send an email to: &nbsp;<span @click="showEmail" :class="State.emailClickable">{{ State.email }}</span>
          </i>
        </p>
      </fieldset>
    </form>
  </main>
</template>


<style scoped>
form {
  margin: 0;
  font-size: 1.3rem;
}

fieldset {
  width: 60vw;
  border: none;
  display: flex;
  flex-direction: column;
}

fieldset>* {
  margin-bottom: 1rem;
}

input,
textarea {
  border: none;
  background-color: #f0eee9;
}

input {
  max-width: 40%;
}

textarea {
  resize: vertical;
  margin-bottom: 0.1rem;
}

.form-button {
  user-select: none;
  text-decoration: none;
  color: #040611;
  background-color: #f0eee9;
  width: 18%;
  font-weight: 600;
  text-align: center;
  padding: 0.2rem;
  border-radius: 0.1rem;
  transition: background-color 0.15s;
}

.form-button:focus,
.form-button:hover,
.form-button:active {
  background-color: #ff9a00;
}

form p>i>span {
  color: #ff9a00;
}

fieldset>p {
  height: 2rem;
}

fieldset>p span.clickable {
  cursor: pointer;
}

@media only screen and (max-width: 890px) {

  /* form */
  fieldset {
    width: 80vw;
  }

}

/* Small screens */
@media only screen and (max-width: 710px) {

  input {
    max-width: 40%;
  }
}

/* Tiny screens */
@media only screen and (max-width: 400px) {

  input {
    max-width: 60%;
  }

  .form-button {
    width: 28%;
  }

}
</style>