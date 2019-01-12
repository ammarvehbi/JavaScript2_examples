'use strict';

{
  // Favourite books of Utku Kopuz, class 19
  const bookDetails = [
    {
      title: 'The Old Man and The Sea',
      language: 'English',
      author: 'Ernest Hemmingway'
    },
    {
      title: 'The Apostates: When Muslims Leave Islam',
      language: 'English',
      author: 'Simon Cottee'
    },
    {
      title: 'Efsane',
      language: 'Turkish',
      author: 'Iskender Pala'
    },
    {
      title: 'Robinson Crusoe',
      language: 'English',
      author: 'Daniel Defoe'
    },
    {
      title: 'Les Miserables',
      language: 'English',
      author: 'Victor Hugo'
    },
    {
      title: 'First Muslim: The Story of Muhammad',
      language: 'English',
      author: 'Lesley Hazleton'
    },
    {
      title: 'Denizler Altında 20000 Fersah',
      language: 'Turkish',
      author: 'Jules Verne'
    },
    {
      title: 'Cingöz Recai',
      language: 'Turkish',
      author: 'Peyami Safa'
    },
    {
      title: 'Just for Fun',
      language: 'English',
      author: 'Linus Torvalds'
    },
    {
      title: 'Mercan Adası',
      language: 'Turkish',
      author: 'R. M. Ballantyne'
    }
  ];

  const englishBooks = bookDetails.filter(book => book.language === 'English');
  console.log('Number of English books:', englishBooks.length);

  const turkishBooks = bookDetails.filter(book => book.language === 'Turkish');
  console.log('Number of Turkish books:', turkishBooks.length);

  const authors = bookDetails.map(book => book.author);
  console.log('All authors:', authors);

  const turkishAuthors = bookDetails
    .filter(book => book.language === 'Turkish')
    .map(book => book.author);
  console.log('Turkish authors:', turkishAuthors);

  const uniqueLanguages = bookDetails.reduce((acc, book) => {
    if (!acc.includes(book.language)) {
      acc.push(book.language);
    }
    return acc;
  }, []);

  console.log('Unique languages:', uniqueLanguages);
}