import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./News.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

function News() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterNews, setfilterNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=b36c2fed602c43eeb8b252376b099d38&category=sports"
      )

      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setfilterNews(
      data.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data]);

  if (loading) {
    return <p>Loading News...</p>;
  }

  return (
    <div style={{ backgroundColor: "#333" }}>
      <NavBar />
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      {filterNews.map((datas) => (
        <div className="cont" style={{ display: "inline-block" }}>
          <Card
            style={{
              width: "18rem",
              height: "22rem",
              background: "white",
              margin: "20px 24px",
              boxShadow: "5px 5px 5px #333333",
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={datas.urlToImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  style={{ fontSize: "15px" }}
                >
                  {datas.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="outlined" color="primary">
                <a
                  href={datas.url}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default News;
