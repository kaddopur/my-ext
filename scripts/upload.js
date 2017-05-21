const webstore_upload = require('webstore-upload');
const uploadOptions = {
    accounts: {
        default: {
            publish: true,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            refresh_token: REFRESH_TOKEN
        }
    },
    extensions: {
        my_ext: {
            appID: APP_ID,
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
