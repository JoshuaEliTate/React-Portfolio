require('dotenv').config();

const apiKey = Process.env.APIKEY;
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
const sendEmailValidationRequest = async (email) => {
    try {
        const response = await fetch(apiURL + '&email=' + email);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        throw error;
    }
}