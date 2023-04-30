// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
// const cloudinary = require('cloudinary').v2;
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dfqcoexkc',
    api_key: '572658578589727',
    api_secret: 'o7wlv4D8ExFpc7dQuYzRMeEkeyM'
});

// module.exports = { cloudinary };
module.exports = cloudinary;