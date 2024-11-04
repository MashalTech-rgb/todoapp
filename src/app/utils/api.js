export function getTodo() {
    return fetch("https://dummyjson.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Ensure it returns the todos array or an empty array if not available
        return data.todos || [];
      })
      .catch((error) => {
        console.log(error.message);
        return [];
      });
  }
