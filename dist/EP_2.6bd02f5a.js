const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h2", {}, "Md Shabrez Akhtar"),
        React.createElement("h2", {}, "I am From Bihar")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h2", {}, "Btech in CSE"),
        React.createElement("h2", {}, "From AKTU University")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=EP_2.6bd02f5a.js.map
