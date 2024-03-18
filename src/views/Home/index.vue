<script setup>
import { ref, reactive, computed } from "vue";
import { dayDate, year, day, yearDate, formattedDate, previousYear, previousMonth, previousDay, lastDayDate, hour, minutes, seconds, hms, ymdhms } from 'get-year-month-day-hour-minute-second'

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
           <div class="item"> 当前年份 {{ year }}</div>
           <div class="item"> 当前月份 {{ month }}</div>
           <div class="item"> 当前日 {{ day }}</div>
           <div class="item"> 当前年份字符串 {{ yearDate }}</div>
           <div class="item"> 当前年月字符串 {{ formattedDate }}</div>
           <div class="item"> 当前年-月-日字符串 {{ dayDate }}</div>
           <div class="item"> 前一天的年份 {{ previousYear }}</div>
           <div class="item"> 前一天的月份 {{ previousMonth }}</div>
           <div class="item"> 前一天的日 {{ previousDay }}</div>
           <div class="item"> 前一天的（年-月-日）{{ lastDayDate }}</div>
           <div class="item"> 当前小时 {{ hour }}</div>
           <div class="item"> 当前分钟 {{ minutes }}</div>
           <div class="item"> 当前秒 {{ seconds }}</div>
           <div class="item"> 时分秒 {{ hms }}</div>
           <div class="item"> 年月日时分秒 {{ ymdhms }}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
.container {
  padding: 20px;
  background-color: antiquewhite;
}
.card{
    display: flex;
    // 上下分布
    flex-direction: column;
    .item{
        margin: 10px;
    }
    }
    

</style>
