
<div class="main__header">
  <h1> Услуги </h1>
  <h2>Все, что вам нужно</h2>
</div>
<div class="main__content">
  <article>
    <div class="article__img">
      <img src="./images/main-img.webp" alt="">
    </div>
    <div class="article__text">
      <a href="/internet">ИНТЕРНЕТ</a>
      <p>Подключить Интернет в офис или дома? Не вопрос! Мы сделаем это в максимально короткие сроки.</p>
    </div>
  </article>
  <article>
    <div class="article__img">
      <img src="./images/main-img-2.webp" alt="">
    </div>
    <div class="article__text">
      <a href="/ip-tv">IP TV</a>
      <p>Обратите внимание на тарифы телевидения по оптимальной цене.</p>
    </div>
  </article>
  <article>
    <div class="article__img">
      <img src="./images/main-img-3.webp" alt="">
    </div>
    <div class="article__text">
      <a href="/ip-telephone">IP ТЕЛЕФОНИЯ</a>
      <p>Звоните куда угодно и когда угодно с помощью технологии IP-АТС.</p>
    </div>
  </article>
  <div class="article__img__mobile">
    <img src="./images/main-img.webp" alt="">
  </div>
  <div class="article__img__mobile">
    <img src="./images/main-img-2.webp" alt="">
  </div>
  <div class="article__img__mobile">
    <img src="./images/main-img-3.webp" alt="">
  </div>
</div>


<style>
  .main__header{
    text-align: center;
    font-family: "Oswald", "HELVETICA", sans-serif;
    color:rgba(58, 47, 26,.8);
  }
  .article__img__mobile{
    display:none;
  }
  h1{
    font-size:24px;
    font-family: "Oswald", sans-serif;
    font-weight:normal;
  }
  h2{
    font-size: 16px;
    font-family: "Playfair Display", sans-serif;

  }
.main__content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 50px;
}
article{
  width: 30%;
  color: white;
}
img{
  width: 100%;
  height:250px;
}
.article__text{
  margin-top: 20px;
  height:200px;
  width: 100%;
  background-color:rgb(112, 88, 46);
  text-align:center;
  padding-top: 30px;
}
a:hover{
  text-decoration: none;
}
.article__text > a {
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid white;
}
.article__text > p{
  width: 300px;
  margin: 30px auto;
  font-size: 18px;
}
@media (min-width:1024px) and (max-width:1500px){
  .article__text > a {
  color: white;
  font-size: 20px;
  border-bottom: 1px solid white;
}
.article__text > p{
  width: 200px;
  margin: 30px auto;
  font-size: 16px;
}
}
@media (min-width:320px) and (max-width:768px){
  .main__content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
}
article{
  width: 90%;
  margin: 0 auto;
  color: white;
}
.article__text{
  margin-top: 10px;
  height:auto;
  width: 100%;
  background-color:white;
  text-align:center;
  padding-top: 0px;
}
.article__text > a {
  color: rgba(112, 88, 46,.6);
  font-weight: 700;
  text-decoration:underline;
  font-size: 20px;
  border-bottom: 1px solid white;
}
.article__text > p{
  width: 100%;
  margin: 5px auto;
  font-size: 16px;
  color: rgb(112, 88, 46);
}
.article__img{
  display: none;
}
.article__img__mobile{
    display:block;
    margin-top: 20px;
  }
}
@media (min-width:769px) and (max-width:1023px){
  .main__content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
}
article{
  width: 50%;
  margin: 0 auto;
  color: white;
}
.article__text{
  margin: 20px auto;
  height:auto;
  width: 70%;
  background-color:white;
  text-align:center;
  padding-top: 0px;
}
.article__text > a {
  color: rgba(112, 88, 46,.6);
  font-weight: 700;
  text-decoration:underline;
  font-size: 20px;
  border-bottom: 1px solid white;
}
.article__text > p{
  width: 100%;
  margin: 5px auto;
  font-size: 16px;
  color: rgb(112, 88, 46);
}
.article__img{
  display: none;
}
.article__img__mobile{
    display:block;
    margin-top: 20px;
    margin: 20px auto;
    width: 70%;
  }
}
</style>
