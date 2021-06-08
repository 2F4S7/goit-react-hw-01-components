const colorPicker = [
    { type: 'payment', color: 'rgba(255, 111, 105, 0.755)' },
    { type: 'invoice', color: 'rgba(109, 143, 194, 0.627)' },
    { type: 'withdrawal', color: 'rgba(112, 194, 137, 0.527)' },
    { type: 'deposit', color: 'rgba(255, 204, 92, 0.727)' },
];

function colors(typeName) {
    let color;
    colorPicker.find(el => {
        if (typeName === el.type) {
            color = el.color;
        }
        return color;
    });
    return color;
}

export default colors;
