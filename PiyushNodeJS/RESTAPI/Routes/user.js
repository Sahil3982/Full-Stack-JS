app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/api/user", (req, res) => {
    res.json(userData);
});

app.get("/user", (req, res) => {
    const html = `
      <ul>
        ${userData.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
    `;
    return res.send(html);
});

app.get("/api/user/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log(id);

    const user = userData.find((user) => id === user.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.post("/api/user", async (req, res) => {
    try {
        const { first_name, last_name, email, gender } = req.body;

        // Check for required fields
        if (!first_name || !last_name || !email || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create new user
        const newUser = new User({ first_name, last_name, email, gender });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message, errors: error.errors });
        }
        // Handle other errors
        res.status(500).json({ message: 'Internal Server Error' });
    }
});