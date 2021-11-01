export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vitae aspernatur dicta mollitia, necessitatibus quae? Quibusdam, eos labore. Sequi vitae magni ratione veritatis repudiandae ex necessitatibus, animi vel? Consectetur, deserunt.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti vitae necessitatibus ullam corrupti aliquam nam eum molestiae corporis laboriosam doloribus numquam, temporibus asperiores cumque sapiente placeat velit facilis. Blanditiis.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum nihil in aperiam? Ut dicta quasi excepturi officiis fuga sit temporibus suscipit! Cupiditate fugit officiis voluptatem quod, minus vero molestias!',
            picture: null,
        },
    ]
})