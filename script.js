var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url).then(function (response) { return response.json(); });
};
getData(COMMENTS_URL).then(function (data) {
    return data.map(function (item) {
        console.log("ID: ".concat(item.id, ", Email: ").concat(item.email));
    });
});
//
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
