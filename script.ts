const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = <T>(url: string): Promise<[{ id: number; email: string }]> => {
  return fetch(url).then(response => response.json())
}

getData(COMMENTS_URL).then(data =>
  data.map(item => {
    console.log(`ID: ${item.id}, Email: ${item.email}`)
  }),
)

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
