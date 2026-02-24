if (process.env.NODE_ENV !== "production") {
  import("./app.js").then(({ default: app }) => {
    app.listen(5000, () => {
      console.log("Local server running on port 5000");
    });
  });
}