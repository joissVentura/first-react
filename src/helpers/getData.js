
export const getData = async(name) => {
    
    const url = `https://api.jikan.moe/v3/search/anime?q=${name}`;
    const res = await fetch(url);
    const {results} = await res.json();

    const data = results.map( item => {
        return({
            id: item.mal_id,
            title: item.title,
            start_date: item.start_date,
            image: item.image_url,
            episodes: item.episodes,
            score: item.score
        })
    })

    return data;
}
