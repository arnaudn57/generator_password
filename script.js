const btn = document.getElementById('btn');
const textarea = document.getElementById('mdp');

function generate() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password_length = 12;
  let password = "";
  for (var i = 0; i <= password_length; i++) {
    let random_number = Math.floor(Math.random() * chars.length);
    password += chars.substring(random_number, random_number + 1);
  }
    document.getElementById('mdp').value = password;
};

function copy() {
  var copyText = document.getElementById('mdp');
  copyText.select();
  document.execCommand("copy");
  alert('The password has been successfully copied');
}
