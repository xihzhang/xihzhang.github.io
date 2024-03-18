document.getElementById('loadData').addEventListener('click', function() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('apiResult').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
});
