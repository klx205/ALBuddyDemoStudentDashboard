//PascalCasing
function Message() {

    const name = 'Kevin';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello</h1>;
}

export default Message;