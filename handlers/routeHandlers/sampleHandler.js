/*
 * Title: Sample Handler
 * Description: Sample Handler
 *
 */


// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url test',
    });
};

module.exports = handler;