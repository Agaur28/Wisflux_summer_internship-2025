document.getElementById("loadDataBtn").addEventListener("click", async function() {
  const message = document.getElementById("message");
  message.textContent = "Loading data...";

  // Simulate API call delay
  const result = await fakeApiCall();

  message.textContent = result;
});

function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
    }, 2000);
  });
}
