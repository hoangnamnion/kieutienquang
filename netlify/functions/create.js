let sharedCode = null;

exports.handler = async function(event) {
  const body = JSON.parse(event.body || '{}');
  sharedCode = body.code;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Đã lưu mã", code: sharedCode })
  };
};