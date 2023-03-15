const form = document.querySelector("#contact-form");
const endpoint = "your-cloud-function-url";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Email sent successfully");
      // Handle success (e.g., show a success message or reset the form)
    } else {
      console.error("Error sending email");
      // Handle error (e.g., show an error message)
    }
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle error (e.g., show an error message)
  }
});
