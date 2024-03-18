document.getElementById('loadData').addEventListener('click', function() {
  const username = 'e5d897dc-717b-41e9-9b08-1d54934628a2';
  const password = 'yovmWGmXubBTJLCbBRC2vI_WNwPSTJnDq2T9_jWgjI0';
  const base64 = 'ZTVkODk3ZGMtNzE3Yi00MWU5LTliMDgtMWQ1NDkzNDYyOGEyOnlvdm1XR21YdWJCVEpMQ2JCUkMydklfV053UFNUSm5EcTJUOV9qV2dqSTA=';
  const apiUrl = 'https://login.usw2.pure.cloud/oauth/token';
  const data = {
    key1: 'value1',
    key2: 'value2'
  };

  fetch(apiUrl, {
  method: 'POST', // or 'PUT'
  headers: {
    'Authorization': `Basic ${base64}`
    'Content-Type': 'application/x-www-form-urlencoded',
    'grant_type': 'client_credentials'
    
  },
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
  });
