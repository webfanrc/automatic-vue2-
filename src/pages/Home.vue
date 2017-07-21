<template>
  <Row>
    <Col :span="22">
      <Tabs value="name1">
        <Tab-pane label="已完成" name="name1">
          <Table border :columns="columns" :data="dealedData"></Table>
          <Page :total="100"></Page>
        </Tab-pane>
        <Tab-pane label="未完成" name="name2">标签二的内容</Tab-pane>
      </Tabs>
    </Col>
  </Row>
</template>
<script>
import moment from 'moment';
export default {
  name: 'Home',
  created () {
    this.$http.get('http://192.168.2.122:8080/history').then((response) => {
      if (response.body && response.body.orders.length > 0) {
        this.$store.state.homeData = response.body.orders;
        this.dealHomeData()
      }
      this.$Message.success(`${response.statusText || ''}, 请求数据成功`);
    }, (error) => {
      this.$Message.error(`${error.statusText || ''}, 请求数据失败`);
    });
  },
  methods: {
    selectStatus (state, type) {
      const isColor = type === 'color';
      switch (state) {
        case -1:
          return isColor ? '#ed3f14' : '已撤销';
        case 0:
          return isColor ? '#ff9900' : '未成交';
        case 1:
          return isColor ? '#2d8cf0' : '部分成交';
        case 2:
          return isColor ? '#19be6b' : '完全成交';
        case 4:
          return isColor ? '#e4e807' : '撤单处理中';
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
            console.log('color', color);
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
