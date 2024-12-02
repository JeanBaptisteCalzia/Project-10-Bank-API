const apiBaseUrl = "http://localhost:3001/api/v1";

export async function loginUser(credentials) {
  const response = await fetch(`${apiBaseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  return data;
}
