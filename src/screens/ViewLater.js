import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import SearchView from "../components/searchView";
import FormSearch from "../components/formSearch";
import react, { useState, useEffect } from "react";

import styles from "./CSS/ViewLater.module.css";
import clsx from "clsx";
import ItemSearch from "../components/ItemSearch";
import {
  getListWatchLaterByTopic,
  getListWatchLaterNews,
} from "../api/watchLaterApi";
import Cookies from "js-cookie";
import { getNewsById } from "../api/newsApi";

function ViewLater() {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    getAllWatchLater();
  }, []);

  const getAllWatchLater = () => {
    setListNews([])
    getListWatchLaterNews(Cookies.get("access_token"))
      .then((res) => {
        console.log(res.data);
        let listNewsId = res.data;
        for (let i in listNewsId) {
          console.log(listNewsId[i]["news_id"]);
          getNewsById(listNewsId[i]["news_id"])
            .then((res) => {
              setListNews((prev) => [...prev, res.data]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => console.log(err));
  }

  const topicFilter = (topic) => {
    getListWatchLaterByTopic(Cookies.get("access_token"), topic).then((res) => {
      if(res.data.length == 0) setListNews([])
      let listNewsId = res.data;
      for (let i in listNewsId) {
        console.log(listNewsId[i]["news_id"]);
        getNewsById(listNewsId[i]["news_id"])
          .then((res) => {
            setListNews([res.data]);
          })
          .catch((err) => {
            console.log(err);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className={styles.TimKiem}>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <div className={styles.leftSection}>
            <h3>Ch??? ?????</h3>

            <div className={styles.optionRow}>
              <p
                className={styles.fieldOption}
                onClick={() => topicFilter("Th???i s???")}
              >
                Th???i s???
              </p>
              <p
                className={styles.fieldOption}
                onClick={() => topicFilter("G??c nh??n")}
              >
                G??c nh??n
              </p>
            </div>

            <div className={styles.optionRow}>
              <p
                className={styles.fieldOption}
                onClick={() => topicFilter("Th??? gi???i")}
              >
                Th??? gi???i
              </p>
              <p
                className={styles.fieldOption}
                onClick={() => topicFilter("Kinh doanh")}
              >
                Kinh doanh
              </p>
            </div>

            <div className={styles.optionRow}>
              <p
                className={styles.fieldOption}
                onClick={() => topicFilter("Du l???ch")}
              >
                Du l???ch
              </p>

              <p
                className={styles.fieldOption}
                onClick={getAllWatchLater}
              >
                T???t c???
              </p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <h2>N???i dung ???? l??u</h2>
            {listNews.length != 0 &&
              listNews.map((item, index) => (
                <ItemSearch
                  key={index}
                  data={item}
                  op1={index + 1 !== listNews.length ? 1 : 0}
                  isViewLater={1}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewLater;
