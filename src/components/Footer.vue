<template>
    <footer>
        <div class="left">
            <h2>
                Odissey Sécurité Privée
            </h2>
            <p>
                <b>Un évènement ou un besoin en sécurité ?</b>
                <br>
                <br>
                Remplissez le formulaire disponible sur cette page, nous reviendrons vers vous dans les meilleurs délais avec une solution adaptée à votre demande.
                <br>
                <br>
                Pour plus de précisions, n’hésitez pas à nous contacter aux coordonnées ci-dessous.
            </p>
            <br>
            <br>
            <b>NOTRE CONTACT</b>
            <br>
            <div class="contact">
                <img src="@/assets/svg/phone.svg" alt="icône de téléphone">
                <a href="tel:+33967059215"> 09 67 05 92 15</a>
            </div>
            <div class="contact">
                <img src="@/assets/svg/mail.svg" alt="icône d'email">
                <a href="mailto:contact@odissey.fr">contact@odissey.fr</a>
            </div>
        </div>
        <div class="right">
            <Form />
        </div>
    </footer>
</template>

<script>
    import Form from './Form.vue'
    export default {
        components: {
            Form
        }   
    }
</script>

<style lang="stylus" scoped>
footer{
    display: flex;
    padding: 80px 20px;
    align-items: space-around;
    justify-content: space-around;
    background: $black-color;
    border-radius: 0px 158px 0px 0px;
    color: $gray-color;
    @media tablet {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media mobile {
        border-radius: 0px;
    }
    .left{
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        @media tablet {
            margin-bottom: 30px;
            max-width 66%;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
        @media mobile {
            max-width: 100%;
        }
        h2 {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 0.01em;
            font-family: $font2;
            margin-bottom: 20px;
        }
    }
}
.contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    img {
        margin-right: 10px;
    }
    a {
        color: $white-color;
        text-decoration: none;
        &:hover {
            text-decoration underline;
        }
    }
}
</style>