document.addEventListener('DOMContentLoaded', function() {
  const fetchButton = document.getElementById('fetchButton');

  fetchButton.addEventListener('click', function() {

    fetch('https://login.usw2.pure.cloud/oauth/token', {
      
      method: 'POST', // cURL --location implies a GET by default, but --data-urlencode implies a POST
      mode: 'no-cors', // can be 'cors', 'no-cors', or 'same-origin'
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic Token Here'
        },
          body: 'grant_type=client_credentials' // Data from --data-urlencode
        })
      
    .then(response => {
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Assuming JSON response
      })

    .then(data => {
      console.log(data); // Process the response data
      })

    .catch(error => {
      console.error('Error:', error); // Handle any errors
    });

  });
});

