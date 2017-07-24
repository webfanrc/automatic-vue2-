<template>
  <i-row>
    <i-col :span="22">
      <i-tabs value="name1">
        <i-tab-pane label="已完成" name="name1">
          <i-table border :columns="columns" :data="dealedData"></i-table>
          <i-page :total="100"></i-page>
        </i-tab-pane>
        <i-tab-pane label="未完成" name="name2">标签二的内容</i-tab-pane>
      </i-tabs>
    </i-col>
  </i-row>
</template>
<script>
import moment from 'moment';
import { Row, Col } from 'iview/src/components/grid';
import Table from 'iview/src/components/table';
import Tabs from 'iview/src/components/tabs';
import Page from 'iview/src/components/page';
export default {
  name: 'Home',
  components: {
    iRow: Row,
    iCol: Col,
    'iTable': Table,
    iTabs: Tabs,
    iTabPane: Tabs.Pane,
    iPage:Page
  },
  created () {
    this.$http.get('http://192.168.2.122:8080/history').then((response) => {
      if (response.body && response.body.orders.length > 0) {
        this.$store.state.homeData = response.body.orders;
        this.dealHomeData()
      }
      this.$Message.success(`${response && response.statusText || ''}, 请求数据成功`);
    }, (error) => {
      this.$Message.error(`${error && error.statusText || ''}, 请求数据失败`);
    });
  },
  methods: {
    selectStatus (state, type) {
      const isColor = type === 'color';
      switch (state) {
        case -1:
          return isColor ? 'red' : '已撤销';
        case 0:
          return isColor ? 'orange' : '未成交';
        case 1:
          return isColor ? 'blue' : '部分成交';
        case 2:
          return isColor ? 'green' : '完全成交';
        case 4:
          return isColor ? 'yellow' : '撤单处理中';
        default:
          return '确认中'
      }
    },
    dealHomeData () {
      this.dealedData = [].concat(this.$store.state.homeData);
      this.dealedData.map(item => {
        item.create_date = moment(item.create_date).format("YYYY MM DD, h:mm:ss a");
        return item;
      })
    }
  },
  data () {
    return {
      columns: [
        {
          title: '数量',
          key: 'amount',
          sortable: true
        }, {
          title: '平均价格 (btc_cny)',
          key: 'avg_price',
          sortable: true
        }, {
          title: '价格 (btc_cny)',
          key: 'price',
          sortable: true
        }, {
          title: '成交数量',
          key: 'deal_amount',
          sortable: true
        }, {
          title: '创建时间',
          key: 'create_date'
        }, {
          title: '状态',
          key: 'status',
          render: (h, params) => {
            const row = params.row;
            const color = this.selectStatus(row.status, 'color');
            const text = this.selectStatus(row.status);
            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, text);
          }
        }
      ],
      dealedData: []
    }
  }
}
</script>
<style lang="less" scoped>
</style>
