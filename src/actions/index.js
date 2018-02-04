export function selectBook(book) {
    // selectBook is an ActionCreator, it ned to return an action, an objeect with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}