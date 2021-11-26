<template>
  <div class="box">
    <div class="top">
      <div class="title">数据速览</div>
      <div class="text">三省一市存贷款情况分析</div>
      <div class="text">
        <span style="padding-right: 30px">专题</span>
        <span>配置</span>
      </div>
    </div>
    <div class="menus">
      <div class="btns ">
        <div class="btn active "><div class="text"><span >重庆辖内分支行</span></div></div>
        <div class="btn "> <div class="text"><span >成都分行</span></div></div>
        <div class="btn "> <div class="text"><span >贵阳分行</span></div></div>
        <div class="btn "> <div class="text"><span >西安分行</span></div></div>
      </div>
      <div><span class="fontCorler text" >数据截至：2021/09/11</span></div>
    </div>
    <div class="detalis">
      <div class="title2">
        <div>
          <span style="font-weight: bold">重庆辖内分支行</span>
          <span>-存款余额趋势分析</span>
        </div>
        <div class="fontCorler">
          <span class="typeActive typebtn" style="padding-right: 20px">存款</span>
          <span class="typebtn">贷款</span>
        </div>
      </div>
      <div class="moneysDetails">
        <div class="moneysDetailsL">
          <div class="leftBox1">
            <div style="font-size: 12px;color: #333333">存款余额(亿)</div>
            <div style="font-weight: bold;color:#666666;font-size: 20px;margin-top: 10px">13688 <img src="../assets/just.png" alt=""></div>
          </div>
          <div class="leftBox2">
            <div class="text">
              <span class="fontCorler" >较上年末</span>
              <span style="padding-left: 30px;color: #fe2c2a">+9999</span>
            </div>
          </div>
          <div class="leftBox3">
            <div class="chart1Tile">
              <span style="color: #333333">存款余额</span>
              <span style="color: #999999">（占全行比）</span>
            </div>
            <div id="chart1"></div>
          </div>
        </div>
        <div class="moneysDetailsR">
          <div class="moneysDetailsRBox" >
            <div class="card">
              <img src="../assets/icon/gyck.png" alt="">
              <div class="cardText">
                <div>
                  <div class="text">
                    <span class="fontCorler" >共营存款(亿)</span>
                  </div>
                </div>
                <div class="cardNum">77777</div>
              </div>
            </div>
            <div class="card">
              <img src="../assets/icon/syck.png" alt="">
              <div class="cardText">
                <div>
                  <div class="text">
                    <span class="fontCorler" >私营存款(亿)</span>
                  </div>
                </div>
                <div class="cardNum">77777</div>
              </div>
            </div>
            <div class="card">
              <img src="../assets/icon/wbck.png" alt="">
              <div class="cardText">
                <div>
                  <div class="text">
                    <span class="fontCorler" >外币存款(亿)</span>
                  </div>
                </div>
                <div class="cardNum">77777</div>
              </div>
            </div>
          </div>
          <div id="chart2">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
   export default {
    computed:{
      ...mapGetters({
        qwe:"qwe"
      })
    },
    mounted() {
      // console.log(this.$route)
      // this.axios.get('/login').then(res=>{
      //   console.log(JSON.parse(res.data.msg))
      // })
      // this.$store.dispatch("qwe").then(()=>{
      //   console.log("qwe")
      //   console.log(this.qwe)
      //   console.log("qwe")
      // })
      this.chart1()
      this.chart2()
    },
     methods:{
      chart1(){
        let myChart = this.$echarts.init(document.getElementById('chart1'));
        var data = [{
          'name': '热点网格',
          'value': 5600
        }, {
          'name': '大气污染',
          'value': 3600
        }]
        let option = {
          color:['#c7e8f4', '#6dccf5'],
          title: {
            text: '30%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontSize: 12,
              fontFamily:"微软雅黑",
            }
          },
          series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
              show: false,
            },
            data: data,
          }]
        };
        myChart.setOption(option)
      },
      chart2(){
        let myChart = this.$echarts.init(document.getElementById('chart2'));
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            borderWidth: 0,
            top: '14%',
            left: '6%',
            bottom: '10%'
          },
          legend: {
            data: ['存款额', '增长率'],
            textStyle:{
              fontSize: "12",
              fontFamily:'微软雅黑'
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              },
              axisLine: {
                lineStyle: {
                  color: '#999999'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#999999',
                  fontFamily: '微软雅黑'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '(亿)',
              min: 0,
              max: 250,
              interval: 50,

              splitLine: {
                show: true,
                lineStyle: {
                  color: '#d9d9d9'
                }
              },
              axisLabel: {
                formatter: '{value}',
                show: true,
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#d9d9d9'
                  }
                },
                textStyle: {
                  color: '#999999',
                  fontFamily: '微软雅黑'
                }
              }
            },
            {
              type: 'value',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#999999',
                  fontFamily: '微软雅黑'
                },
                formatter: '{value}%'
              }
            }
          ],
          series: [
            {
              name: '存款额',
              type: 'bar',
              barWidth: '22',
              color: '#6fcbf5',
              data: [146, 126, 155, 166, 177, 222]
            },
            {
              name: '增长率',
              type: 'line',
              yAxisIndex: 1,
              color: '#fe5f56',
              symbolSize: 10,
              smooth: true,
              data: [12, 23.2, 33.3, 43.5, 47, 100]
            }
          ]
        }
        myChart.setOption(option)
      }
     }
  }
</script>
<style scoped>
  .box{
    width: 820px;
    height: 480px;
    background: #ffffff;
    border-radius: 20px;
    padding: 24px;
    box-sizing: border-box;
    font-family: 微软雅黑;
  }
  .text{
    font-size: 0.7rem;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.875);
  }
  .top{
    width: 100%;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
  .top .title{
    color: #333333;
    font-family: 微软雅黑;
    font-size: 17px;
    font-weight: bold;
  }
  .menus{
    width: 100%;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menus .btns{
    display: flex;
  }
  .menus .btn{
    cursor: pointer;
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    background: #fafafb;
    color: #999999;
    margin-left: 5px;
  }
  .btn:first-child{
    margin: 0px!important;
  }
  .active{
    color: #5ea5f4!important;
    background: #eef5fe!important;
  }
  .fontCorler{
    color: #999999;
  }
  .detalis{
    height: 328px;
    width: 100%;
    /*background: #5ea5f4;*/
  }
  .title2{
    padding-left: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333333;
  }
  .typebtn{
    cursor: pointer;
  }
  .typeActive{
    color: #60a1f4;
  }
  .moneysDetails{
    padding-top: 10px;
    width: 100%;
    height: 322px;
    display: flex;
  }
  .moneysDetailsL{
    width:25% ;
    height: 100%;
    margin-right: 30px;
    box-sizing: border-box;
    background: #f7f7f7;
  }
  .moneysDetailsR{
    flex: 1;
    height: 100%;
  }
  .leftBox1{
    display: flex;
    padding-left: 20px;
    justify-content: center;
    flex-direction: column;
    height: 82px;
    width: 100%;
  }
  .leftBox2{
    margin:0px 20px;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    height: 44px;
    line-height: 44px;
    /*width: 100%;*/
  }
  .leftBox3{
    height: calc(100% - 44px - 82px);
    width: 100%;
  }
  .chart1Tile{
    padding-left: 20px;
    height: 44px;
    line-height: 44px;
    width: 100%;
    font-size: 12px;
  }
  #chart1{
    width: 100%;
    height: calc(100% - 44px);
  }
  .moneysDetailsRBox{
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .moneysDetailsRBox .card{
    width: 32%;
    max-width: 166px;
    height: 64px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
  }
  #chart2{
    width: 100%;
    height: calc(100% - 74px);
  }
  .cardText{
    padding-left: 10px;
  }
  .cardNum{
    color: #666666;
    font-weight: bold;
    font-size: 20px
  }

</style>
