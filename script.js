document.getElementById('loadData').addEventListener('click', function() {
  
const url = 'https://login.usw2.pure.cloud/oauth/token';
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ZTVkODk3ZGMtNzE3Yi00MWU5LTliMDgtMWQ1NDkzNDYyOGEyOnlvdm1XR21YdWJCVEpMQ2JCUkMydklfV053UFNUSm5EcTJUOV9qV2dqSTA='
};
const body = new URLSearchParams({
  'grant_type': 'client_credentials'
});

fetch(url, {
  method: 'POST',
  headers: headers,
  body: body
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
