


export default() => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123132456
            date: new Date().toDateString(),
            text: 'This not only documents your component, but will also warn other developers using your component in the browser console if they pass the wrong type. We will discuss more details about prop validation further down this page.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, // 123132456
            date: new Date().toDateString(),
            text: 'We declare long prop names using camelCase because this avoids having to use quotes when using them as property keys, and allows us to reference them directly in template expressions because they are valid JavaScript',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, // 123132456
            date: new Date().toDateString(),
            text: 'Technically, you can also use camelCase when passing props to a child component (except in DOM templates). However, the convention is using kebab-case in all cases to align with HTML attributes',
            picture: null,
        }
    ]

})