module.exports.handler = async (event) => {
    // return new Error('test error');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world',
            input: event,
        })
    }
}
