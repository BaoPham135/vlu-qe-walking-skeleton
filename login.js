/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username - Tên đăng nhập nhập vào
 * @param {string} password - Mật khẩu nhập vào
 * @returns {boolean} true nếu username === 'admin' và password === '123', ngược lại false
 */
function checkLogin(username, password) {
  return username === 'admin' && password === '123';
}
 
// Hỗ trợ cả môi trường trình duyệt (script tag) và Node.js (CommonJS, dùng cho Jest/Mocha)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkLogin;
}
 
