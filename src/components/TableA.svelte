<table class="table_sort">
  <thead>
    <tr>
      <td></td>
    </tr>
      <tr>
          <th class="sorted" data-order="-1" on:click ={getSort}>Тарифный план</th>
          <th  on:click ={getSort}>Подключение к сети Интернет</th>
          <th on:click ={getSort}>Абонентская плата (Сум)</th>
          <th on:click ={getSort}>Объём трафика</th>
          <th on:click ={getSort}>Tas-IX</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>CT 6</td>
          <td>до 6 Мбит/с</td>
          <td>99 000</td>
          <td>неограничен</td>
          <td>100 Мбит/с</td>
      </tr>
      <tr>
          <td>CT 10</td>
          <td>до 10 Мбит/с</td>
          <td>110 000</td>
          <td>неограничен</td>
          <td>100 Мбит/с</td>
      </tr>
      <tr>
        <td>CT 15</td>
        <td>до 15 Мбит/с</td>
        <td>125 000</td>
        <td>неограничен</td>
        <td>100 Мбит/с</td>
    </tr>
      <tr>
          <td>CT 20</td>
          <td>до 20 Мбит/с</td>
          <td>160 000</td>
          <td>неограничен</td>
          <td>100 Мбит/с</td>
      </tr>
      <tr>
          <td>CT 40</td>
          <td>до 40 Мбит/с</td>
          <td>250 000</td>
          <td>неограничен</td>
          <td>100 Мбит/с</td>
      </tr>
  </tbody>
</table>
<style>
  .table_sort {
    z-index: 10;
    background-color:rgb(250, 248, 245);
    border-radius: 10px;
    color: black;
    font-size: 14px;
  }
.table_sort table {
    border-collapse: collapse;
}

.table_sort th {
    background: #dbad7f;
    cursor: pointer;
    width: 150px;
    color: black;
}

.table_sort td,
.table_sort th {
    width: 250px;
    height: 40px;
    text-align: center;
    padding-right:15px;
    /* border: 2px solid #846868; */
}

.table_sort tbody tr:nth-child(even) {
    background: #f5e8de;
}

th {
    position: relative;
}


th::after {
	content: "▼";
  right: 8px;
  position:absolute;
  top: 20px;
  color:black;
  font-size:10px;
}
th.sorted[data-order="-1"]::after {
  content: "▼";
  color: white
}
th.sorted[data-order="-1"]::before {
  content: "▲";
  color:black;
}

th::before {
	content: "▲";
  color: white;
  position:absolute;
  top: 10px;
  right: 8px;
  font-size:10px;
}
</style>
<script>

     const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

   
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
     document.querySelectorAll('.table_sort thead tr th').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
</script>
