<template>
  <div class="specialBox">
    <div class="title">全行存贷款专题</div>
    <div class="detalisBox">
      <div class="detalis">
        <div class="detalisT" >存款</div>
        <div class="cardBox">
          <div class="card">
            <div class="cardTitle">存款余额 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="numbox">
              <div style="width: 30%">
                <div style="font-size: 20px;color: #333333;font-weight: bold">7777</div>
                <div class="compareBig">
                  <div class="text2">
                    <span>较年初:  +999</span>
                  </div>
                </div>
              </div>
              <div class="companerBox">
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款月日均</span>
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款季日均</span>
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款年日均</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardTitle">存款余额变动情况 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="numbox">
              <div class="companerBox2">
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareBig">
                    <div class="text">
                      <span>较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/big.png" alt="">
                    </div>

                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareSmall">
                    <div class="text">
                      <span >较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/small.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareBig">
                    <div class="text">
                      <span>较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/big.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chartBox1">
          <div class="chart1Title">
            <div class="cardTitle">存款余额变动情况 <span style="color:#b9b9b9;">[亿]</span></div>
            <div  style="font-size: 12px">
              <span class="btn">按日展示</span>
              <span> | </span>
              <span class="btn btnActive">按月展示</span>
            </div>
          </div>
          <div id="depositchart1"></div>
        </div>
        <div class="chartBox2">
          <div class="constituteBox">
            <div class="cardTitle" style="padding-top: 20px;padding-left: 20px">存款余额业务构成 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="chart" id="depositchart2"></div>
          </div>
          <div class="constituteBox">
            <div class="cardTitle" style="padding-top: 20px;padding-left: 20px">存款余额条线构成 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="chart" id="depositchart3"></div>
          </div>
        </div>
      </div>
      <div class="detalis">
        <div class="detalisT" >贷款</div>
        <div class="cardBox">
          <div class="card">
            <div class="cardTitle">贷款余额 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="numbox">
              <div style="width: 30%">
                <div style="font-size: 20px;color: #333333;font-weight: bold">7777</div>
                <div class="compareBig">
                  <div class="text2">
                    <span>较年初:  +999</span>
                  </div>
                </div>
              </div>
              <div class="companerBox">
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款月日均</span>
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款季日均</span>
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="companerBg">
                    <div class="text">
                      <span >存款年日均</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardTitle">贷款余额变动情况 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="numbox">
              <div class="companerBox2">
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareBig">
                    <div class="text">
                      <span>较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/big.png" alt="">
                    </div>

                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareSmall">
                    <div class="text">
                      <span >较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/small.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="companer">
                  <div class="companerNumber">7777</div>
                  <div class="compareBig">
                    <div class="text">
                      <span>较上日</span>
                      <img style="margin-left: 10px" src="../assets/icon/big.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chartBox1">
          <div class="chart1Title">
            <div class="cardTitle">贷款余额变动情况 <span style="color:#b9b9b9;">[亿]</span></div>
            <div  style="font-size: 12px">
              <span class="btn">按日展示</span>
              <span> | </span>
              <span class="btn btnActive">按月展示</span>
            </div>
          </div>
          <div id="loanchart1"></div>
        </div>
        <div class="chartBox2">
          <div class="constituteBox">
            <div class="cardTitle" style="padding-top: 20px;padding-left: 20px">贷款余额业务构成 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="chart" id="loanchart2"></div>
          </div>
          <div class="constituteBox">
            <div class="cardTitle" style="padding-top: 20px;padding-left: 20px">贷款余额条线构成 <span style="color:#b9b9b9;">[亿]</span></div>
            <div class="chart" id="loanchart3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.depositChartTrend()
      this.depositBusinessComposition()
      this.depositLineComposition()

      this.loanChartTrend()
      this.loanBusinessComposition()
      this.loanLineComposition()
    },
    methods:{
      depositChartTrend(){
        let mychart = this.$echarts.init(document.getElementById("depositchart1"))
        let option = {
          color: ['#6fcbf5', '#ff8b31'],
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            bottom: '5',
            textStyle:{
              color:"#939393",
              fontWeight:'bold',
            }
          },
          grid: {
            left: '6%',
            right: '6%',
            bottom: '22%',
            top:"10%",
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
              color: '#939393',
              fontSize: '12',
              fontWeight:'bold'
            },
            axisLine: {
              lineStyle: {
                color: '#939393'
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: [5, 10],
                dashOffset: 5
              }
            }
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              symbol:"circle",
              symbolSize:'5',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              symbol:"circle",
              symbolSize:'5',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };
        mychart.setOption(option)
      },
      //存款业务构成
      depositBusinessComposition(){
        let mychart = this.$echarts.init(document.getElementById("depositchart2"))
        let option = {
          color:["#6fcbf5","#c8e9f7","#46d5cc","#ff8b2f",],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            bottom:'10',
            textStyle:{
              fontWeight:'bold',
              color:"#939393"
            }
          },
          series: [
            {
              name: 'Access From',
              center:["50%","40%"],
              type: 'pie',
              radius: '60%',
              label:{
                fontWeight:'bold',
                color:"#939393"
              },
              labelLine:{
                length:'10',
                length2:"30",
                smooth: true
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mychart.setOption(option)
      },
      //存款条线构成
      depositLineComposition(){
        let mychart = this.$echarts.init(document.getElementById("depositchart3"))
        let option = {
          color:["#6fcbf5","#c8e9f7","#46d5cc","#ff8b2f",],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            bottom:'10',
            textStyle:{
              fontWeight:'bold',
              color:"#939393"
            }
          },
          series: [
            {
              name: 'Access From',
              center:["50%","40%"],
              type: 'pie',
              radius: '60%',
              label:{
                fontWeight:'bold',
                color:"#939393"
              },
              labelLine:{
                length:'10',
                length2:"30",
                smooth: true
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mychart.setOption(option)
      },

      loanChartTrend(){
        let mychart = this.$echarts.init(document.getElementById("loanchart1"))
        let option = {
          color: ['#6fcbf5', '#ff8b31'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            bottom: '5',
            textStyle:{
              color:"#939393",
              fontWeight:'bold',
            }
          },
          grid: {
            left: '6%',
            right: '6%',
            bottom: '22%',
            top:"10%",
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
              color: '#939393',
              fontWeight:'bold',
              fontSize: '12'
            },
            axisLine: {
              lineStyle: {
                color: '#939393'
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: [5, 10],
                dashOffset: 5
              }
            }
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              symbol:"circle",
              symbolSize:'5',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              symbol:"circle",
              symbolSize:'5',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };
        mychart.setOption(option)
      },
      //贷款业务构成
      loanBusinessComposition(){
        let mychart = this.$echarts.init(document.getElementById("loanchart2"))
        let option = {
          color:["#6fcbf5","#c8e9f7","#46d5cc","#ff8b2f",],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            bottom:'10',
            textStyle:{
              fontWeight:'bold',
              color:"#939393"
            }
          },
          series: [
            {
              name: 'Access From',
              center:["50%","40%"],
              type: 'pie',
              radius: '60%',
              label:{
                fontWeight:'bold',
                color:"#939393"
              },
              labelLine:{
                length:'10',
                length2:"30",
                smooth: true
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mychart.setOption(option)
      },
      //贷款条线构成
      loanLineComposition(){
        let mychart = this.$echarts.init(document.getElementById("loanchart3"))
        let option = {
          color:["#6fcbf5","#c8e9f7","#46d5cc","#ff8b2f",],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            bottom:'10',
            textStyle:{
              fontWeight:'bold',
              color:"#939393"
            }
          },
          series: [
            {
              name: 'Access From',
              center:["50%","40%"],
              type: 'pie',
              radius: '60%',
              label:{
                fontWeight:'bold',
                color:"#939393"
              },
              labelLine:{
                length:'10',
                length2:"30",
                smooth: true
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mychart.setOption(option)
      }
    }
  }
</script>
<style scoped>
  .compareBig{
    font-size: 12px;
    color: #fe0222;
    background: #fef3f2;
    font-weight: bold;
    width: max-content;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-top: 16px;
  }
  .compareSmall{
    font-size: 12px;
    color: #3cca11;
    background: #f4fef3;
    font-weight: bold;
    width: max-content;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-top: 16px;
  }
  .text{
    font-size: 0.7rem;
    -webkit-transform-origin-x: 2;
    display: flex;
    align-items: center;
    -webkit-transform: scale(0.75);
  }
  .text2{
    font-size: 0.7rem;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.875);
  }
  .specialBox{
    box-sizing: border-box;
    padding: 20px 20px ;
    height: 100%;
    width: 100%;
    background: #f7f7f7;
    font-family: 微软雅黑;
  }
  .title{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    line-height: 80px;
  }
  .detalisBox{
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
  }
  .detalis{
    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    background: #ffffff;
    width:calc((100% - 30px )/2) ;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
  }
  .detalisT{
    font-weight: bold;
    font-size: 24px;
    color: #333333;
  }
  .cardBox{
    width: 100%;
    height: 23%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .card{
    width: calc((100% - 20px) / 2);
    height: 100%;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.15);
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .cardTitle{
    font-size: 13.5px;
    font-weight: bold;
    color: #333333;
  }
  .numbox{
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .companerBox{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .companerBox2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .companer{
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;align-items: center;
  }
  .companerBg{
    background:#f7f7f7 ;
    font-weight: bold;
    text-align: center;
    height: 28px;
    line-height: 28px;
    margin-top: 16px;
    width: max-content;
  }
  .companerNumber{
    font-weight: bold;
    font-size: 12px;
    color: #333333;
  }
  .chartBox1{
    height: 33%;
    width: 100%;
    margin-top: 15px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.15);
    padding: 20px 0px 0px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  #depositchart1{
    width: 100%;
    flex: 1;
  }
  #loanchart1{
    width: 100%;
    flex: 1;
  }
  .chart1Title{
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .btn{
    padding: 0 5px;
    cursor: pointer;
  }
  .btnActive{
    color: #6fcbf5;
  }
  .chartBox2{
    height: 33%;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .constituteBox{
    width: calc((100% - 20px) /2);
    height: 100%;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
  }
  .chart {
    width: 100%;
    flex: 1;
  }
</style>
