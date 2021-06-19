<table class="table_sort">
  <thead>
    <tr>
      <td></td>
    </tr>
      <tr>
          <th class="sorted" data-order="-1" on:click ={getSort}>Тарифный план</th>
          <th on:click ={getSort}>Подключение к сети Интернет c 07:00 до 21:00</th>
          <th on:click ={getSort}>Подключение к сети Интернет c 21:00 до 07:00</th>
          <th on:click ={getSort}>Абонентская плата (Сум)</th>
          <th on:click ={getSort}>Объём трафика</th>
          <th on:click ={getSort}>Tas-IX</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>CT office 3</td>
          <td>до 3 Мбит/с</td>
          <td>до 1 Мбит/с</td>
          <td>250 000</td>
          <td>100 Мбит/с</td>
          <td>неограничен</td>
      </tr>
      <tr>
        <td>CT office 5</td>
        <td>до 5 Мбит/с</td>
        <td>до 2 Мбит/с</td>
        <td>450 000</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
      </tr>
      <tr>
        <td>CT office 7	</td>
        <td>до 7 Мбит/с</td>
        <td>до 3 Мбит/с</td>
        <td>650 000</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
    </tr>
      <tr>
        <td>CT office 10</td>
        <td>до 10 Мбит/с</td>
        <td>до 3 Мбит/с</td>
        <td>1 050 000	</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
      </tr>
      <tr>
        <td>CT office 15</td>
        <td>до 15 Мбит/с</td>
        <td>до 5 Мбит/с</td>
        <td>1 400 000</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
      </tr>
      <tr>
        <td>CT office 20</td>
        <td>до 20 Мбит/с</td>
        <td>до 5 Мбит/с</td>
        <td>1 700 000</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
      </tr>
      <tr>
        <td>VIP</td>
        <td>По требованию</td>
        <td>По требованию</td>
        <td>на основании договора</td>
        <td>100 Мбит/с</td>
        <td>неограничен</td>
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
    background: #CAB389;
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
    background: #E4DFD0;
}

th {
    position: relative;
}
th.sorted[data-order="1"],
th.sorted[data-order="-1"] {
    position: relative;
}

th.sorted[data-order="1"]::after,
th.sorted[data-order="-1"]::after {
    right: 8px;
    position: absolute;
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
  /* content: "▲"; */
  content: "▲";
  color:black;
 
}
/* th.sorted[data-order="-1"]::before {
  content: "▲";
  color:black;
  opacity: 0;
} */
th.sorted[data-order="1"]::after {
  content: "▼";
  opacity: 0;
  color:black;
  
}
th.sorted::before{
  content: none;
}
/* th.sorted[data-order="1"]::before {
  content: "▲";
  color:black;
} */
th::before {
  content: "▲";
  color:black;
  position:absolute;
  top: 10px;
  right: 8px;
  font-size:10px;
  /* opacity: 0; */
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
