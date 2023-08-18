let eventBatch = []

const sendBatchToServer = () => {
  if (eventBatch.length > 0) {
    fetch('http://localhost:3000/analytics/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventBatch)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Batch sent successfully:', data)
      })
      .catch(error => {
        console.error('Error sending batch:', error)
      })

    eventBatch = []
  }
}
self.addEventListener('message', event => {
  console.log('Received event in worker:')
  eventBatch.push(event.data)

  if (eventBatch.length >= 5) {
    sendBatchToServer()
    eventBatch = []
  }
}, false)
