let sharedCode = null;

exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({ code: sharedCode || null })
  };
};