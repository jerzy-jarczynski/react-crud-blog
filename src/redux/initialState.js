const initialState = {

  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      selectedCategory: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      selectedCategory: 'Movies',
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      selectedCategory: 'News',
      author: 'John Doe'
    }        
  ],

  categories: [
    {
      id: '1',
      name: 'Sport',
    },
    {
      id: '2',
      name: 'Movies',
    },
    {
      id: '3',
      name: 'News',
    },
  ],

};

export default initialState;