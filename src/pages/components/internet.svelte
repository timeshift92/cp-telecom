<script>
	import TableA from './TableA.svelte';
  import TableB  from "./TableB.svelte";
import TableMobile from './TableMobile.svelte';
</script>
<div class="internet__content">
<section class="internet__info">
  <article class="internet__video">
    <video autoplay loop >
      <source src="/video/internet.mp4">
    </video>
  </article>
  <article class="internet__text">
    <h1>ИНТЕРНЕТ</h1>
    <h3>Подключить Интернет в офис или дома? Не вопрос! Мы сделаем это в максимально короткие сроки.</h3>
    <p>
      Это одна из самых востребованных услуг. Результаты превосходят все ожидания абонентов, а уровень качества всегда оставляет приятные впечатления от работы с нашей компанией. Мы все делаем в срок, внимательны к деталям и всегда отвечаем за результат. Вы можете во всем и всегда положиться на компанию «Capital Telecom».
    </p>
    <button><a href="#table__container">Подробнее</a></button>
  </article>
</section>
<section id="table__container" class="table__all">
  <div class="table__header">
  <h1>ТАРИФНЫЕ ПЛАНЫ</h1>
  </div>
  <section class="table">
    <div>
      <h1>для Физических лиц</h1>
    <TableA/>
    </div>
    <div>
    <h1>для Юридических лиц</h1>
    <TableB/>
    </div>
    </section>
</section>
<section class="table__mobile">
  <TableMobile/>
</section>
  </div>
  <style>
.table__mobile{
  display: none;
}
  .internet__info{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
  }
  .internet__text{
    width: 400px;

  }
  .internet__text > h1{
    text-align: center;
    font-size:40px;
    color: rgb( 202,190,160);
  }
  .internet__text > h3{
    text-align: center;
    font-weight: 400;
    color: rgb(83,73,45);
    font-size:18px;
  }
  .internet__text > p{
    width: 370px;
    margin: 0 auto;
    letter-spacing: 0;
    color: rgb(83,73,45);
    font-size:18px;
  }
  
  .internet__video > video{
    width: 550px; height: 500px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  .internet__text > button {
    width: 120px;
    height:40px;
    margin: 20px 30%;
    background-color: rgb( 202,190,160);
    padding:0;
  }
  .internet__text > button:hover{
    opacity: 0.5;
  }
  .internet__text > button > a {
    color: white;
    display: block;
    width: 100%;
    height:100%;
    padding-top:7px;
    margin: 0;
    
  }
  .internet__text > button > a:hover {
    text-decoration: none;
    
  }
  .table{
    width: 900px;
    /* text-align: center; */
    padding: 10px 30px;
    margin: 0 auto;
    background: url(/images/internet.webp) no-repeat;
    /* background-color: rgba(red, green, blue, alpha); */
    background-size: 100% 100%;
  }
  .table > div > h1{
    font-size: 30px;
  }
  .table__all {
    margin-top: 30px;
  }
  .table__all > .table__header {
    width: 90%;
 
    margin: 0px auto;
    text-align: center;
  background: url(/images/background.webp) no-repeat;
    position: relative;
    background-size: 100% 100%;
  }
  .table__all > .table__header > h1 {
    font-size:40px;
    margin:0 ;
    z-index: 2;
    position: relative;
  }
  @media (min-width:1024px) and (max-width:1500px){
    .internet__video > video{
    width: 400px; height: 400px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  .internet__text{
    width: 350px;
    margin-right: 10%;
  }
  .internet__text > h1{
    text-align: center;
    font-size:35px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgb( 202,190,160);
  }
  .internet__text > h3{
    text-align: center;
    font-weight: 400;
    color: rgb(83,73,45);
    font-size:16px;
  }
  .internet__text > p{
    width: 320px;
    margin: 0 auto;
    letter-spacing: 0;
    color: rgb(83,73,45);
    font-size:16px;
}
.table{
    width: 750px;
    /* text-align: center; */
    padding: 10px 30px;

  }
  .table > div > h1{
    font-size: 30px;
  }
  .table__all {
    margin-top: 30px;
  }
  .table__all > .table__header {
    width: 90%;
 
    margin: 0px auto;
    text-align: center;
  background: url(/images/background.webp) no-repeat;
    position: relative;
    background-size: 100% 100%;
  }
  .table__all > .table__header > h1 {
    font-size:40px;
    margin:0 ;
    z-index: 2;
    position: relative;
  }
  }
  @media (min-width:320px) and (max-width:1023px){
    .table{
      display:none;
    }
    .table__mobile{
    display:block;
}
.table__all > .table__header > h1 {
    font-size:24px;
    margin:0 ;
    z-index: 2;
    position: relative;
  }
  .table__all > .table__header{
    padding-top: 10px;
    width: 100%;
    margin-bottom: -15px;
  }
  .internet__info{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .internet__video > video{
    width: 100%; height: 200px;
    object-fit: cover;
    object-position: 100% 50%;
  }
  .internet__text{
    width: 100%;
    text-align: center;

  }
  .internet__text > h1{
    text-align: center;
    font-size:26px;
    color: rgb( 202,190,160);
  }
  .internet__text > h3{
    text-align: center;
    font-weight: 400;
    color: rgb(83,73,45);
    font-size:16px;
  }
  .internet__text > p{
    width: 90%;
    margin: 0 auto;
    letter-spacing: 0;
    color: rgb(83,73,45);
    font-size:18px;
  }
  
  .internet__text > button {
    width: 120px;
    height:40px;
    margin: 20px 30%;
    background-color: rgb( 202,190,160);
    padding:0;
  }
  }
</style>
