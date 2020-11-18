import News from "../model/News";
import NewsDataModel from "../model/NewsDataModel";

export default class NewsService {

    private mapNews = (currentNews: any) => {
        return new News(currentNews.author,
            currentNews.description,
            currentNews.url,
            currentNews.urlToImage,
            currentNews.publishedAt,
            currentNews.content,
            currentNews.title);
    };
    getNewsData = (news: any) => {
        // console.info(news);
        const uri = "http://localhost:3001/news";
        return fetch(uri).then((data) => {
            return data.json();
        }).then((data) => {
            return data.articles.map((element: any) => { return new NewsDataModel(element.description, element.url) });
        });
    };

    saveNewsData = (news: any) => {
        // console.info(news);
        const uri = "http://localhost:3001/news";
        return fetch(uri, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(news)
        }).then((data) => {
            return data.status;
        }).then((data) => {
            return data;
        });
    };
    getNews = async (typ: string) => {
        let uri = '';
        switch (typ) {
            case "everything": uri = "http://newsapi.org/v2/everything?q=bitcoin&apiKey=8eef926b47a84572bb4f12659be245f9"; break;
            case "topNews": uri = "http://newsapi.org/v2/top-headlines?country=us&apiKey=8eef926b47a84572bb4f12659be245f9"; break;
            default: uri = "http://localhost:5000/articles"; break;
        }

        let fetchResult = fetch(uri);
        return await fetchResult.then((data) => {
            if (data.status === 200) {
                let json = data.json();
                return Promise.resolve(json);
            }
            else {
                return Promise.reject(`${data.status}:${data.statusText}`);
            }

        })
            .then((data) => {                
                if (typ === "") {
                    let test: any;
                    test = data;
                    return test;
                }
                else{
                let articles=data.articles;
                // let articles=data;
                let news:News[]=articles.map((current:any)=>{return this.mapNews(current)});
                return news;
                // console.info(test);
                }
                

            });

    };


}

