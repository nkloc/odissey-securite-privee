<template>
<form class="vue-form" @submit.prevent="submit">
    <fieldset>
      <div class="mb-20">
            <label class="label" for="prename">Prénom</label>
            <input type="text" name="prename" id="prename" required="true" v-model="prename" placeholder="Votre prénom">
      </div>

      <div class="mb-20">
            <label class="label" for="name">Nom</label>
            <input type="text" name="name" id="name" required="true" v-model="name" placeholder="Votre nom">
      </div>

      <div class="mb-20">
            <label class="label" for="email">Email</label>
            <input type="email" name="email" id="email" required="true" placeholder="votreemail@gmail.com"
                :class="{ email , error: !email.valid }"
                v-model="email.value">
            <div v-show="!email.valid" class="error-message">
                <p v-show="email.value.length">L'adresse email n'est pas valide.</p>
            </div>
      </div>

      <div class="mb-20">
            <div class="counter-container">
                <label class="label" for="textarea">Votre message</label>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }} caractères maximum</span>
            </div>
            <textarea class="message" name="textarea" id="textarea" required="true" placeholder="Un événement à sécuriser ? Une candidature spontanée ? Décrivez-nous votre besoin." 
                    v-model="message.text" 
                    :maxlength="message.maxlength"></textarea>
      </div>
      <div v-if="!submitted && !sending" class="mb-20 send">
            <input type="submit" value="Envoyer ma demande">
      </div>
      <div v-if="submitted" class="submitted">
            <img src="@/assets/svg/bluecheck.svg" alt="check">
            <p>Votre demande a bien été envoyée.</p>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
    data() {
        return {
            // eslint-disable-next-line no-useless-escape
            emailRegExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            name: '',
            prename: '',
            email: {
                value: '',
                valid: false
            },
            message: {
                text: '',
                maxlength: 500
            },
            sending: false,
            submitted: false,
            airtableApiKey: process.env.VUE_APP_AIRTABLE_API_KEY
        }
    },
    methods: {
        // submit form handler
        submit: function() {
            this.sending = true;
            if (this.email.valid) {
                const formData = {
                        "Nom": this.name,
                        "Prénom": this.prename,
                        "Email": this.email.value,
                        "Message": this.message.text
                }
                const Airtable = require('airtable');
                const base = new Airtable({apiKey: this.airtableApiKey}).base('appEXsFOIcOc7sEoW');

                base('Demandes Clients').create(formData, function(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            }
            this.sending = false;
            this.submitted = true;

        },
        // validate by type and value
        validate: function(type, value) {
            if (type === "email") {
                this.email.valid = this.isEmail(value) ? true : false;
            }
        },
        // check for valid email adress
        isEmail: function(value) {
            return this.emailRegExp.test(value);
        },  
    },
    watch: {
        // watching nested property
        "email.value": function(value) {
            this.validate("email", value);
        }
    }
}
</script>

<style lang="stylus" scoped>
.vue-form {
  margin: 0 auto;
  width: 500px;
  text-align: left;
  @media tablet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
}
.vue-form .error-message {
  margin-top: 4px;
  color: #F29387;
}
.vue-form .error-message p {
  margin: 0;
}
.vue-form fieldset {
  padding: 0 10px;
  @media tablet {
    width: 93%;
  }
  @media (min-width: 375px) {
    width: 80%;
  }
}

.vue-form label {
  display: block;
  margin-bottom: 5px;
  font-weight bold;
}

.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #fff;
    outline: none;
    margin-bottom: 5px;
    background: transparent;
    color: $gray-color;
}

input::placeholder,
textarea::placeholder {
    color #838383;
}

.vue-form textarea{
    height: 100px;
}

.vue-form input[type="submit"] {
    outline none;
    border: none;
    background: $gray-color;
    color: $black-color;
    font-size: 16px;
    font-weight bold;
    cursor: pointer;
    border-radius: 10px;
    font-size 17px;
    width: 247px;
    height: 66px;
    text-transform: uppercase;
    letter-spacing: 2%;
}

.vue-form .counter {
  font-size 13px;
  margin-top: 3px;
  white-space: nowrap;
}

.mb-20{
    margin-bottom: 20px;
    width: 100%;
}

.counter-container{
    display: flex;
    justify-content: space-between;
}
.send{
    display: flex;
    @media tablet {
        justify-content: center;
        margin-top: 10px;
    }
}
.submitted{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background: $green-color;
    border-radius: 4px;
    height: 66px;
    width: 325px;
    img {
        width: 30px;
        height: auto;
        margin-right 12px;
    }
    p {
        font-size: 16px;
        font-weight bold;
        color: $white-color;
    }
    @media tablet {
        margin: 0 auto;
    }
}
</style>