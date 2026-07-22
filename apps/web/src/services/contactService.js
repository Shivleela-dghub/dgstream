const API_URL = import.meta.env.VITE_API_URL;

export async function submitContactForm(formData) {
  const res = await fetch(`${API_URL}/api/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return res.json();
}