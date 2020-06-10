import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import { store } from 'store';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Font */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600%7CUbuntu:300,400,500,700" rel="stylesheet" />
        {/* CSS */}
        <link rel="stylesheet" href="css/bootstrap-reboot.min.css" />
        <link rel="stylesheet" href="css/bootstrap-grid.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="css/nouislider.min.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/plyr.css" />
        <link rel="stylesheet" href="css/photoswipe.css" />
        <link rel="stylesheet" href="css/default-skin.css" />
        <link rel="stylesheet" href="css/main.css" />
        {/* Favicons */}
        <link rel="icon" type="image/png" href="icon/favicon-32x32.jpg" sizes="32x32" />
        <link rel="apple-touch-icon" href="icon/favicon-32x32.jpg" />
        <link rel="apple-touch-icon" sizes="72x72" href="icon/apple-touch-icon-72x72.jpg" />
        <link rel="apple-touch-icon" sizes="114x114" href="icon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="icon/apple-touch-icon-144x144.png" />
        <meta name="description" content="وێبسایتێك تایبەت بە ئەلقە و فیلمی ئەنیمی ژێرنووسکراو بە کوردی" />
        <meta name="keywords" content="anime in kurdish, anime kurd, kurd anime, kurdish anime, kurdish subtitle,
	kurd anime naruto, kurdish anime sub, ئەنیمی بە کوردی ،کوردئەنیمی، ئەنیمی کورد، ئەنێمی، ئەنیمی ژێرنووس" />  
        <meta name="author" content="AnimeInKurdish" />
        <title>Anime In Kurdish , Anime TV Shows &amp; Movies</title>
        {/* header */}
        <header className="header">
          <div className="header__wrap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header__content">
                    {/* header logo */}
                    <a href="index.html" className="header__logo">
                      <img src="img/2.png" alt="" width={86} height={82} />
                    </a>
                    {/* end header logo */}
                    {/* header nav */}
                    <ul className="header__nav">
                      {/* dropdown */}
                      <li className="header__nav-item">
                        <a href="index.html" className="header__nav-link">Home</a>
                      </li>
                      {/* end dropdown */}
                      <li className="header__nav-item">
                        <a href="series.html" className="header__nav-link">Series</a>
                      </li>
                      <li className="header__nav-item">
                        <a href="movies.html" className="header__nav-link">Movies</a>
                      </li>
                      <li className="header__nav-item">
                        <a href="shortfilms.html" className="header__nav-link">Short Films</a>
                      </li>
                      <li className="header__nav-item">
                        <a href="about.html" className="header__nav-link">About</a>
                      </li>
                      {/* dropdown */}
                      <li className="dropdown header__nav-item">
                        <a className="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon ion-ios-more" /></a>
                        <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                          <li><a target="_blank" href="https://www.facebook.com/AnimeInKurdish">Facebook</a></li>
                          <li><a target="_blank" href="https://www.instagram.com/anime_inkurdish">Instagram</a></li>
                        </ul>
                      </li>
                      {/* end dropdown */}
                    </ul>
                    {/* end header nav */}
                    {/* header auth */}
                    <div className="header__auth">
                      <button className="header__search-btn" type="button" onclick="topfunction()">
                        <i className="icon ion-ios-search" />
                      </button>
                      <a href="https://www.youtube.com/channel/UCBTljgjekltpT9EEVQaKlLA?sub_confirmation=1" className="header__sign-in" target="_blank">
                        <i className="icon ion-ios-log-in" />
                        <span><em><strong>SUBSCRIBE</strong></em></span>
                      </a>
                    </div>
                    {/* end header auth */}
                    {/* header menu btn */}
                    <button className="header__btn" type="button">
                      <span />
                      <span />
                      <span />
                    </button>
                    {/* end header menu btn */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header search */}
          <form action className="header__search">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header__search-content">
                    <input type="text" id="myInput" autoComplete="off" onkeyup="searchFunction()" placeholder="Search for an anime that you are looking for" />
                    <button id="click" onclick="sfunction()" type="button">search</button>
                  </div>
                  <div id="sfunction" className="searchd">
                    <ul className="footer__listb" id="myUL">
                      <li><img src="img/covers/AkinoKanade.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/AkiNoKanade.html">Aki No Kanade کچە تەپڵ لیدەرەکە</a></li>
                      <li><img src="img/covers/banana.jpg" alt="" width="70px" height="100px" /><a href="Series/BananaFish.html">Banana Fish بانانە فیش</a></li>
                      <li><img src="img/covers/B the begining.jpg" alt="" width="70px" height="100px" /><a href="Series/Bthebeginning.html">B The Beginning (B: The Beginning) بی دەستپێکەکە</a></li>
                      <li><img src="img/covers/BlackFox.jpg" alt="" width="70px" height="100px" /><a href="movies/BlackFox.html">Black Fox ڕێوی ڕەش</a></li>
                      <li><img src="img/covers/91-xhsX3g8L._SL1500_.jpg" alt="" width="70px" height="100px" /><a href="Series/dororo.html">Dororo دۆرۆرۆ</a></li>
                      <li><img src="img/covers/ggg.jpg" alt="" width="70px" height="100px" /><a href="movies/graveOfFireflies.html">Grave Of Fireflies (hotaru no haka) گۆڕێ گوڵەئەستیرەکان</a></li>
                      <li><img src="img/covers/Hotarubi no Mori.jpg" alt="" width="70px" height="100px" /><a href="movies/HotarubinoMori.html">Hotarubi no Mori e (Into the Forest of Firefly Lights) بەرەو دارستانی گوڵەئەستیرەکان</a></li>
                      <li><img src="img/covers/2.jpg" alt="" width="70px" height="100px" /><a href="Series/IdInvaded.html">ID Invaded (ID:Invaded) ناسنامە : پەلاماردراو</a></li>
                      <li><img src="img/covers/hono.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/KanojotoKanojonoNeko.html">Kanojo to Kanojo no Neko (She and Her Cat: Their Standing Points) ئەو و پشیلەکەی</a></li>
                      <li><img src="img/covers/moribito.jpg" alt="" width="70px" height="100px" /><a href="Series/Moribito.html">Moribito Guardian Of The Spirit (Seirei no Moribito) پاسەوانی ڕۆحە مەزنەکە</a></li>
                      <li><img src="img/covers/modestHeros.jpg" alt="" width="70px" height="100px" /><a href="movies/ModestHeroes.html">Modest Heroes پاڵەوانە بێفیزەکان</a></li>
                      <li><img src="img/covers/samurai champloo.jpg" alt="" width="70px" height="100px" /><a href="Series/samuraichamploo.html">Samurai Champloo سامۆرای چامپلوو</a></li>
                      <li><img src="img/covers/shelter.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/Shelter.html">Shelter پەناگە</a></li>
                      <li><img src="img/covers/f1.jpg" alt="" width="70px" height="100px" /><a href="movies/slamdunk.html">Slam Dunk All Movies سلام دانك</a></li>
                      <li><img src="img/covers/thegreatepasaage.jpg" alt="" width="70px" height="100px" /><a href="Series/TheGreatPassage.html">The Great Passage (Fune wo Amu) ڕێڕەوی مەزن</a></li>
                      <li><img src="img/covers/Tsumiki no le.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/TsumikiNoLe.html">The House of Small Cubes (Tsumiki No Ie) خانووی شەشپاڵووە بچووکەکان</a></li>
                      <li><img src="img/covers/tokyo m.jpg" alt="" width="70px" height="100px" /><a href="Series/TokyoMagnitude.html">Tokyo Magnitude 8:0 بوومەلەرزەی تۆکیۆ</a></li>
                      <li><img src="img/covers/tayfoo.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/Typhoon Noruda.html">Typhoon Noruda (Taifuu no Noruda) زریانی نۆروودا</a></li>
                      <li><img src="img/covers/violet.jpg" alt="" width="70px" height="100px" /><a href="movies/violetevergarden2019.html">Violet Evergarden Eternity and the Auto Memory Doll 2019 ڤایۆلێت ئێڤێرگاردێن</a></li>
                      <li><img src="img/covers/LilSpiederGirl.jpg" alt="" width="70px" height="100px" /><a href="ShortFilm/Li'lSpiderGirl.html">Wasurenagumo (Li'l Spider Girl) </a></li>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* end header search */}
        </header>
        {/* end header */}
        {/* home */}
        <section className="home">
          {/* home bg */}
          <div className="owl-carousel home__bg">
            <div className="item home__cover" data-bg="img/home/home__bg.jpg" />
            <div className="item home__cover" data-bg="img/home/home__bg2.jpg" />
            <div className="item home__cover" data-bg="img/home/home__bg3.jpg" />
            <div className="item home__cover" data-bg="img/home/home__bg4.jpg" />
          </div>
          {/* end home bg */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="home__title"><b>New Animes</b></h1>
                <button className="home__nav home__nav--prev" type="button">
                  <i className="icon ion-ios-arrow-round-back" />
                </button>
                <button className="home__nav home__nav--next" type="button">
                  <i className="icon ion-ios-arrow-round-forward" />
                </button>
              </div>
              <div className="col-12">
                <div className="owl-carousel home__carousel">
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/moribito.jpg" alt="" />
                        <a href="Series/Moribito.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="Series/Moribito.html">Moribito: Guardian of the Spirit</a></h3>
                        <span className="card__category">
                          <p>Action</p>
                          <p>Adventure</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />8.5</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/thegreatepasaage.jpg" alt="" />
                        <a href="Series/TheGreatPassage.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="Series/TheGreatPassage.html">The Great Passage</a></h3>
                        <span className="card__category">
                          <p>Slice of Life</p>
                          <p>Romance</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />7.6</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/modestHeros.jpg" alt="" />
                        <a href="movies/ModestHeroes.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="movies/ModestHeroes.html">Modest Heroes</a></h3>
                        <span className="card__category">
                          <p>Fantasy</p>
                          <p>Anthology</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />7.0</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/Hotarubi no Mori.jpg" alt="" />
                        <a href="movies/HotarubinoMori.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="movies/HotarubinoMori.html">Hotarubi no Mori E</a></h3>
                        <span className="card__category">
                          <p>Romance</p>
                          <p>Fantasy</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />8.4</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/AkinoKanade.jpg" alt="" />
                        <a href="ShortFilm/AkiNoKanade.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="ShortFilm/AkiNoKanade.html">Aki no Kanade</a></h3>
                        <span className="card__category">
                          <p>‎Slice of Life</p>
                          <p>Music</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />6.8</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/banana.jpg" alt="" />
                        <a href="Series/BananaFish.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="Series/BananaFish.html">Banana Fish</a></h3>
                        <span className="card__category">
                          <p>Action</p>
                          <p>Crime</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />7.9</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/2.jpg" alt="" />
                        <a href="Series/IdInvaded.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="Series/IdInvaded.html">ID:Invaded</a></h3>
                        <span className="card__category">
                          <p>Mystery</p>
                          <p>Drama</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />7.5</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/violet.jpg" alt="" />
                        <a href="movies/violetevergarden2019.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="movies/violetevergarden2019.html">Violet Evergarden eternity and the auto memories doll</a></h3>
                        <span className="card__category">
                          <p>Slice of life</p>
                          <p>Fantasy</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />7.4</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card card--big">
                      <div className="card__cover">
                        <img src="img/covers/BlackFox.jpg" alt="" />
                        <a href="movies/BlackFox.html" className="card__play">
                          <i className="icon ion-ios-play" />
                        </a>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title"><a href="movies/BlackFox.html">Black Fox</a></h3>
                        <span className="card__category">
                          <p>Action</p>
                          <p>Sci-fi</p>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star" />6.1</span>
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end home */}
        <section className="content" id>
          <div className="content__head">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* content title */}
                  <h2 className="content__title">All Movies &amp; Series</h2>
                  {/* end content title */}
                  {/* content tabs nav */}
                  <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">SERIES</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">SHORT FILM</a>
                    </li>
                  </ul>
                  {/* end content tabs nav */}
                  {/* content mobile tabs nav */}
                  <div className="content__mobile-tabs" id="content__mobile-tabs">
                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <input type="button" defaultValue="All" />
                      <span />
                    </div>
                    <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">ALL</a></li>
                        <li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a></li>
                        <li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">SERIES</a></li>
                        <li className="nav-item"><a className="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">SHORT FILM</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* end content mobile tabs nav */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* content tabs */}
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                <div className="row">
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/moribito.jpg" alt="" />
                            <a href="Series/Moribito.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/Moribito.html">Moribito: Guardian of the Spirit</a></h3>
                            <span className="card__category">
                              <p>Action</p>
                              <p>Adventure</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.5</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2007</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکی ئەنیمیەکە باسی ئافرەتێکی جەنگاوەر دەکات بە ناوی (بالسا) کە بەڵێنی پاراساتنی کەسانی دیکەی بەخۆی داوە، و لە گەشتێکیدا بالسا دەگاتە وڵاتی یۆگۆی نوێ، و خاتوونی ئیمبڕاتۆڕی ئەو وڵاتە داوای پاراستنی شازادەی دووەمی کۆشك دەکات لە بالسا، کە ئیمبڕاتۆڕ ویستی کوشتنی هەبوو
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/thegreatepasaage.jpg" alt="" />
                            <a href="Series/TheGreatPassage.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/TheGreatPassage.html">The Great Passage</a></h3>
                            <span className="card__category">
                              <p>Slice of Life</p>
                              <p>Drama</p>
                              <p>Romance</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.6</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2016</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکی ئەنمیەکە سەبارەت بە میتسویا ماجیمی و ماساشی نیشیوکایە، میتسویا پیاوێکی جدییە و کەم قسە دەکات، بەڵام ماساشی کەسێکی کۆمەڵایەتییە، چیرۆکەکە سەبارەت بە هاوڕێیەتی و بەردەوامی و هەستەکانی ئەو دووانەیە کە هەوڵدەدەن بۆ درووستکردنی فەرهەنگێکی نوێ بەناوی ڕێڕەوی مەزن
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/modestHeros.jpg" alt="" />
                            <a href="movies/ModestHeroes.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/ModestHeroes.html">Modest Heroes</a></h3>
                            <span className="card__category">
                              <p>Fantasy</p>
                              <p>Anthology</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.0</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2018</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم فیلمە لە سێ چیرۆکی کورت پێکدێت، یەکەم بە ناوی "کانی و کانینو" وئەویش چیرۆکێکی خەیاڵیە باسی دوو برا دەکات لە ناو ئاودا دەژین، و دووەم بە ناوی "ژیان نادۆڕێنیت" و ئەویش چیرۆکێکە کە خۆشەویستی نێوان دایک و منداڵێك نیشان دەدات، و سێیەم بە ناوی "پیاوە نادیارەکە" کە باسی پیاوێک دەکات کە لەلایەن کەسەوە نابینرێت
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/Hotarubi no Mori.jpg" alt="" />
                            <a href="movies/HotarubinoMori.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/HotarubinoMori.html">Hotarubi no Mori E</a></h3>
                            <span className="card__category">
                              <p>Romance</p>
                              <p>Fantasy</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.4</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>16+</li>
                                <li>2013</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی کچێك دەکات بە ناوی (هوتارو) کە هەموو هاوینێک دەچیت بۆ ماڵی مامەی ، ڕۆژێک بەتەنها دەچێت بۆ دارستانەکە و بزردەبێت، و ئەم دارستانە بەوە ناسراوە کە ڕۆحەکانی تێدا دەژی، لەناکاودا کوڕێکی بۆ دەردەچێت بە ناوی (جين) و یارمەتی دەدات بۆ دەرچوون لە دارستانەکە، (جين) بە (هوتارو) گوت کە ئەگەر مرۆڤ دەستی لێبدات ئەوا بوونی نامێنێت.
                              </p>										
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/AkinoKanade.jpg" alt="" />
                            <a href="ShortFilm/AkiNoKanade.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/AkiNoKanade.html">Aki no Kanade</a></h3>
                            <span className="card__category">
                              <p>Slice of Life</p>
                              <p>Music</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />6.8</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2015</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی ئاکی میاگاوا دەکات کە دەچێتە تۆکیۆ بۆ ئەوەی ببێتە تەپڵ لێدەر لە ئاهەنگەکان، بەڵام ئەو بە بارودۆخێکی خراپدا تێدەپەڕێ و ئێستا دوای 15 ساڵ دەگەڕێتەوە بۆ ڕاهێنان لەگەڵ تەپڵ لێدەرەکانی دیکە	
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/LilSpiederGirl.jpg" alt="" />
                            <a href="ShortFilm/Li'lSpiderGirl.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/Li'lSpiderGirl.html">Li'l Spider Girl</a></h3>
                            <span className="card__category">
                              <p>Comedy</p>
                              <p>Fantasy</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.1</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2012</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>	یەکێکە لە کورتە فیلەمکان کە باسی دڕندەیەکی جاڵجاڵۆکەی بچووك دەکات لە شێوەی کچێکی بچووکی مرۆڤدا، کە لە کتێبێکدا زیندانی کراوە و دواتر بەهەڵە ڕزگاری دەکرێت و ئەم دڕندە بچووکە هەوڵدەدات بگەڕێتەوە بۆ لای دایکی و خۆراک بدات پێی کە خۆراکەکەش بریتییە لە مرۆڤ
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/Tsumiki no le.jpg" alt="" />
                            <a href="ShortFilm/TsumikiNoLe.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/TsumikiNoLe.html">The House of Small Cubes</a></h3>
                            <span className="card__category">
                              <p>Drama</p>
                              <p>Slice Of Life</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.1</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2008</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p> یەکێکە لە کورتە فیلمە بەناوبانگەکان کە بووەتە براوەی ئۆسکار ، پێویست بە چیرۆک ناکات بەهۆی کورتی ئەنیمیەکە 	</p>																		
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/banana.jpg" alt="" />
                            <a href="Series/BananaFish.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/BananaFish.html">Banana Fish</a></h3>
                            <span className="card__category">
                              <p>Action</p>
                              <p>Crime</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.9</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>17+</li>
                                <li>2018</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆك : سرووشت وای لە ”ئاش لينكس” کردووە کە کوڕێکی سەرنجڕاکێش بێت، دواتر بەخێوکردنەکەی دەیکات بە بکوژێکی خوێن ساردی بێبەزەیی، هەڵاتوویەک کە بە بەردەوامی دەکوژێت. “ئاش”، ئێستا لە ناوەڕاستی تەمەنی 17 ساڵیدایە، شانیشینەکەی جێهێشتووە دواتر ئەو شەیتانە دەبینێت کە بەخێویکردووە
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/2.jpg" alt="" />
                            <a href="Series/IdInvaded.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/IdInvaded.html">ID:Invaded</a></h3>
                            <span className="card__category">
                              <p>Drama</p>
                              <p>Mystery</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.5</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>16+</li>
                                <li>2020</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی لێکۆڵەر ” ساكايدۆ” دەکات کە لێکۆڵینەوە لە کوژرانی کچێکی نەناسراو دەکات بە ناوی “كايرۆ تشان” ، بەڵام شیکارکردنی ئەم کەیسە وەکو کەیسی تر نییە ، و ئەویش توشی نهێنی زۆر دەبێتەوە کە جیهانەکەی سەروژێر دەبێت.
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/violet.jpg" alt="" />
                            <a href="movies/violetevergarden2019.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/violetevergarden2019.html">Violet Evergarden eternity and the auto memories doll</a></h3>
                            <span className="card__category">
                              <p>Slice of life</p>
                              <p>Fantasy</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.4</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2019</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکە باسی ئیزابێلا دەکات و ئەو کچی خێزانێکی پلە بەرزە بەناوی یۆرك، کە لە قوتابخانەیەکی تیابەتدا دەخوێنێت بۆ بکرێتە خاتوونێکی پلە بەرز و سەرەڕای ئەوە ئەو دەیەوێت واز لەو داهاتووە بهێنێت، و ئەو قوتابخانەکە وەکو زیندانێك دەبینێت. خێزانەکەی ئەوەیان تێبینی کرد کە تێناکۆشێت لە خوێندنەکەیدا بۆیە ڤایۆلێت ئێڤێرگاردێن بە کرێ دەگرن بۆ ئەوەی ببێتە مامۆستای تایبەتی</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                <div className="row">
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/modestHeros.jpg" alt="" />
                            <a href="movies/ModestHeroes.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/ModestHeroes.html">Modest Heroes</a></h3>
                            <span className="card__category">
                              <p>Fantasy</p>
                              <p>Anthology</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.0</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2018</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم فیلمە لە سێ چیرۆکی کورت پێکدێت، یەکەم بە ناوی "کانی و کانینو" وئەویش چیرۆکێکی خەیاڵیە باسی دوو برا دەکات لە ناو ئاودا دەژین، و دووەم بە ناوی "ژیان نادۆڕێنیت" و ئەویش چیرۆکێکە کە خۆشەویستی نێوان دایک و منداڵێك نیشان دەدات، و سێیەم بە ناوی "پیاوە نادیارەکە" کە باسی پیاوێک دەکات کە لەلایەن کەسەوە نابینرێت
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/Hotarubi no Mori.jpg" alt="" />
                            <a href="movies/HotarubinoMori.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/HotarubinoMori.html">Hotarubi no Mori E</a></h3>
                            <span className="card__category">
                              <p>Romance</p>
                              <p>Fantasy</p>&gt;
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.4</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>16+</li>
                                <li>2013</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی کچێك دەکات بە ناوی (هوتارو) کە هەموو هاوینێک دەچیت بۆ ماڵی مامەی ، ڕۆژێک بەتەنها دەچێت بۆ دارستانەکە و بزردەبێت، و ئەم دارستانە بەوە ناسراوە کە ڕۆحەکانی تێدا دەژی، لەناکاودا کوڕێکی بۆ دەردەچێت بە ناوی (جين) و یارمەتی دەدات بۆ دەرچوون لە دارستانەکە، (جين) بە (هوتارو) گوت کە ئەگەر مرۆڤ دەستی لێبدات ئەوا بوونی نامێنێت.
                              </p>										
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/violet.jpg" alt="" />
                            <a href="movies/violetevergarden2019.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="movies/violetevergarden2019.html">Violet Evergarden eternity and the auto memories doll</a></h3>
                            <span className="card__category">
                              <p>Slice of life</p>
                              <p>Drama</p>
                              <p>Fantasy</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.4</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2019</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکە باسی ئیزابێلا دەکات و ئەو کچی خێزانێکی پلە بەرزە بەناوی یۆرك، کە لە قوتابخانەیەکی تیابەتدا دەخوێنێت بۆ بکرێتە خاتوونێکی پلە بەرز و سەرەڕای ئەوە ئەو دەیەوێت واز لەو داهاتووە بهێنێت، و ئەو قوتابخانەکە وەکو زیندانێك دەبینێت. خێزانەکەی ئەوەیان تێبینی کرد کە تێناکۆشێت لە خوێندنەکەیدا بۆیە ڤایۆلێت ئێڤێرگاردێن بە کرێ دەگرن بۆ ئەوەی ببێتە مامۆستای تایبەتی</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                <div className="row">
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/moribito.jpg" alt="" />
                            <a href="Series/Moribito.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/Moribito.html">Moribito: Guardian of the Spirit</a></h3>
                            <span className="card__category">
                              <p>Action</p>
                              <p>Adventure</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.5</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2007</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکی ئەنیمیەکە باسی ئافرەتێکی جەنگاوەر دەکات بە ناوی (بالسا) کە بەڵێنی پاراساتنی کەسانی دیکەی بەخۆی داوە، و لە گەشتێکیدا بالسا دەگاتە وڵاتی یۆگۆی نوێ، و خاتوونی ئیمبڕاتۆڕی ئەو وڵاتە داوای پاراستنی شازادەی دووەمی کۆشك دەکات لە بالسا، کە ئیمبڕاتۆڕ ویستی کوشتنی هەبوو
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/thegreatepasaage.jpg" alt="" />
                            <a href="Series/TheGreatPassage.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/TheGreatPassage.html">The Great Passage</a></h3>
                            <span className="card__category">
                              <p>Slice of Life</p>
                              <p>Romance</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.6</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>14+</li>
                                <li>2016</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆکی ئەنمیەکە سەبارەت بە میتسویا ماجیمی و ماساشی نیشیوکایە، میتسویا پیاوێکی جدییە و کەم قسە دەکات، بەڵام ماساشی کەسێکی کۆمەڵایەتییە، چیرۆکەکە سەبارەت بە هاوڕێیەتی و بەردەوامی و هەستەکانی ئەو دووانەیە کە هەوڵدەدەن بۆ درووستکردنی فەرهەنگێکی نوێ بەناوی ڕێڕەوی مەزن
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/banana.jpg" alt="" />
                            <a href="Series/BananaFish.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/BananaFish.html">Banana Fish</a></h3>
                            <span className="card__category">
                              <p>Action</p>
                              <p>Crime</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.9</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>17+</li>
                                <li>2018</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>چیرۆك : سرووشت وای لە ”ئاش لينكس” کردووە کە کوڕێکی سەرنجڕاکێش بێت، دواتر بەخێوکردنەکەی دەیکات بە بکوژێکی خوێن ساردی بێبەزەیی، هەڵاتوویەک کە بە بەردەوامی دەکوژێت. “ئاش”، ئێستا لە ناوەڕاستی تەمەنی 17 ساڵیدایە، شانیشینەکەی جێهێشتووە دواتر ئەو شەیتانە دەبینێت کە بەخێویکردووە
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/2.jpg" alt="" />
                            <a href="Series/IdInvaded.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="Series/IdInvaded.html">ID:Invaded</a></h3>
                            <span className="card__category">
                              <p>Drama</p>
                              <p>Mystery</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.5</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>16+</li>
                                <li>2020</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی لێکۆڵەر ” ساكايدۆ” دەکات کە لێکۆڵینەوە لە کوژرانی کچێکی نەناسراو دەکات بە ناوی “كايرۆ تشان” ، بەڵام شیکارکردنی ئەم کەیسە وەکو کەیسی تر نییە ، و ئەویش توشی نهێنی زۆر دەبێتەوە کە جیهانەکەی سەروژێر دەبێت.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                <div className="row">
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/AkinoKanade.jpg" alt="" />
                            <a href="ShortFilm/AkiNoKanade.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/AkiNoKanade.html">Aki no Kanade</a></h3>
                            <span className="card__category">
                              <p>Slice of Life</p>
                              <p>Music</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />6.8</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2015</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>ئەم چیرۆکە باسی ئاکی میاگاوا دەکات کە دەچێتە تۆکیۆ بۆ ئەوەی ببێتە تەپڵ لێدەر لە ئاهەنگەکان، بەڵام ئەو بە بارودۆخێکی خراپدا تێدەپەڕێ و ئێستا دوای 15 ساڵ دەگەڕێتەوە بۆ ڕاهێنان لەگەڵ تەپڵ لێدەرەکانی دیکە	
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/LilSpiederGirl.jpg" alt="" />
                            <a href="ShortFilm/Li'lSpiderGirl.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/Li'lSpiderGirl.html">Li'l Spider Girl</a></h3>
                            <span className="card__category">
                              <p>Comedy</p>
                              <p>Fantasy</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />7.1</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2012</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p>	یەکێکە لە کورتە فیلەمکان کە باسی دڕندەیەکی جاڵجاڵۆکەی بچووك دەکات لە شێوەی کچێکی بچووکی مرۆڤدا، کە لە کتێبێکدا زیندانی کراوە و دواتر بەهەڵە ڕزگاری دەکرێت و ئەم دڕندە بچووکە هەوڵدەدات بگەڕێتەوە بۆ لای دایکی و خۆراک بدات پێی کە خۆراکەکەش بریتییە لە مرۆڤ
                              </p>											
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  {/* card */}
                  <div className="col-6 col-sm-12 col-lg-6">
                    <div className="card card--list">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="card__cover">
                            <img src="img/covers/Tsumiki no le.jpg" alt="" />
                            <a href="ShortFilm/TsumikiNoLe.html" className="card__play">
                              <i className="icon ion-ios-play" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-8">
                          <div className="card__content">
                            <h3 className="card__title"><a href="ShortFilm/TsumikiNoLe.html">The House of Small Cubes</a></h3>
                            <span className="card__category">
                              <p>Drama</p>
                              <p>Slice Of Life</p>
                            </span>
                            <div className="card__wrap">
                              <span className="card__rate"><i className="icon ion-ios-star" />8.1</span>
                              <ul className="card__list">
                                <li>Full HD</li>
                                <li>13+</li>
                                <li>2008</li>
                              </ul>
                            </div>
                            <div className="card__description">
                              <p> یەکێکە لە کورتە فیلمە بەناوبانگەکان کە بووەتە براوەی ئۆسکار ، پێویست بە چیرۆک ناکات بەهۆی کورتی ئەنیمیەکە 	</p>																		
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
            </div>
            {/* end content tabs */}
          </div>
          <ul className="card__listb">
            <li id="colorpages" className="listb"><a>01</a></li> 
            <li className="listb"><a href="index2.html">02</a></li>
          </ul>
        </section>
        <div className="ADS">
          {/* nellads - كود الإعلان الصوري  */}
          <div id="adm-container-1043" />
          {/* nellads - كود الإعلان الصوري */}
        </div>
        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* footer list */}
              <div className="col-12 col-md-3">
                <h6 className="footer__title">Subscribe To Our Channels</h6>
                <ul className="footer__app">
                  <li><a href="https://www.youtube.com/channel/UCBTljgjekltpT9EEVQaKlLA"><img src="img/Animeinkurdish-badge.png" alt="" /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCPaKdZeAI8lrUOQe2T06s_g"><img src="img/KurdNightcoreicon.png" alt="" /></a></li>
                </ul>
              </div>
              {/* end footer list */}
              {/* footer list */}
              <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title">Resources</h6>
                <ul className="footer__list">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="about.html">Who I Am?</a></li>
                </ul>
              </div>
              {/* end footer list */}
              {/* footer list */}
              <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title">Top Animes</h6>
                <ul className="footer__list">
                  <li><a href="Series/dororo.html">Dororo</a></li>
                  <li><a href="Series/BananaFish.html">Banana Fish</a></li>
                  <li><a href="movies/violetevergarden2019.html">Violet Evergarden Movie</a></li>
                </ul>
              </div>
              {/* end footer list */}
              {/* footer list */}
              <div className="col-12 col-sm-4 col-md-3">
                <h6 className="footer__title">Contact</h6>
                <ul className="footer__list">
                  <li><p>ehsanayub80@gmail.com</p></li>
                </ul>
                <ul className="footer__social">
                  <li className="facebook"><a target="_blank" href="https://www.facebook.com/AnimeInKurdish"><i className="icon ion-logo-facebook" /></a></li>
                  <li className="instagram"><a target="_blank" href="https://www.instagram.com/anime_inkurdish/"><i className="icon ion-logo-instagram" /></a></li>
                  <li className="twitter"><a target="_blank" href="https://www.youtube.com/channel/UCBTljgjekltpT9EEVQaKlLA"><img src="img/Youtube-512.png" width={20} height={22} /></a></li>
                </ul>
              </div>
              {/* end footer list */}
              {/* footer copyright */}
              <div className="col-12">
                <div className="footer__copyright">
                  <small><p>2020 Copyright</p></small>
                </div>
              </div>
              {/* end footer copyright */}
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* JS */}
      </div>
    );
  }
});
store.subscribe(render);
render();
registerServiceWorker();
