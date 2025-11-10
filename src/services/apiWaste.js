const API_URL = " http://localhost:5285/api";

export async function getWastebins() {
  const res = await fetch(`${API_URL}/wastebins/`);
  if (!res.ok) throw Error("Failed getting wastebins");

  const data = await res.json(); // ✅ This is the array
  return Array.isArray(data) ? data : [];
}

export async function getUser(id) {
  const res = await fetch(`${API_URL}/users/${id}`);
  if (!res.ok) throw Error(`Couldn't find user #${id}`);

  const { data } = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
