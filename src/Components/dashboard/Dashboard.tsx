import NewsService from "../../service/news.service";
import React, { useState } from "react";
import { makeStyles, createStyles } from '@material-ui/styles';
import Card from "../card/Card";
import News from "../../model/News";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 80,
        }, 
        flexContainer:
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: 200,
                paddingLeft: 75,
                paddingRight: 75
            }
    }))


export default function Dashboard() {
    const newsService = new NewsService();    
    const classes = useStyles();
    const [news, setNews] = useState<News[]>([]);

    
    let newsDataList:any;
    // useEffect(()=>{
        newsService.getNews("everything")
        .then((res) =>{ 
            return res;            
        }).then((data)=>{
            let newsData=[...data];
            // setNews({ "news": "newsData" });
            if(news.length===0)
            {
                setNews(newsData);
            }            
        });
        
        // console.info(news);
        newsDataList=news.map((element=>{
            return <Card currentNews={element}></Card>
        }));
        console.info(news);
        
        //<Card newsList={news}></Card>
    return (<div className={classes.root}><div className={classes.flexContainer}>{newsDataList}</div></div>);
};



