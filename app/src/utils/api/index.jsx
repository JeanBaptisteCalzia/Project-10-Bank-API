const apiBaseUrl = "http://localhost:3001/api/v1";

export const login = async (userCredentials) => {
  try {
    const res = await fetch(`${apiBaseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    const response = await res.json();
    return response.body.token;
  } catch (err) {
    console.error("Erreur :", err);
  }
};
