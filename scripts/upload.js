const webstore_upload = require('webstore-upload');
const uploadOptions = {
    accounts: {
        default: {
            publish: true,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: process.env.REFRESH_TOKEN
        }
    },
    extensions: {
        my_ext: {
            appID: process.env.APP_ID,
            zip: `${process.cwd()}/bundle.zip`
        }
    },
    uploadExtensions : ['my_ext']
};

webstore_upload(uploadOptions, 'default')
    .then(function(result) {
        console.log(result);
        // do somethings nice
        return 'yay';
    })
    .catch(function(err) {
        console.error(err);
    });
