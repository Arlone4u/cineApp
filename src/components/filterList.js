import movies from '../movies.json'

export default function filterList(arr, method) {

    if(method == null) return movies;

    else {
          return movies.filter(movies => {
          const sizeArray = movies.size.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return movies;
            }
          }
          else {
              return movies;
          }
      })  
    }
}