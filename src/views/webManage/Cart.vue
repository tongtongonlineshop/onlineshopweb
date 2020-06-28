<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="margin:50px auto;width: 70%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="商品信息">
        <template slot-scope="scope">{{ scope.row.goods.name }}</template>
      </el-table-column>
      <el-table-column label="单价">
        <template slot-scope="scope">{{ scope.row.goods.price }}</template>
      </el-table-column>
      <el-table-column label="数量" width="255">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.num"
            @change="numChange"
            :min="1"
            :max="10"
            label="数量"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="合计">
        <template slot-scope="scope">{{ scope.row.goods.price*scope.row.num|toDecimal }}</template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <div style="margin-top: 20px" slot="append">
        <div class="cart-footer clear">
          <div class="delete-con">
            <a class="cart-delete-seleced link">
              <el-button @click="dels">删除选中</el-button>
            </a>
          </div>
          <div class="submit-con">
            <span>
              已选商品
              <span id="selectGoodsCount">{{totalCount}}</span> 件
            </span>
            <span>总价：</span>
            <span class="submit-total">
              ￥
              <span id="selectGoodsMoney">{{sum|toDecimal}}</span>
            </span>
            <el-button class="btn submit-btn" :class="totalCount>0?'':'submitDis'" 
              @click.native="toOrderSave">去结算</el-button>
          </div>
        </div>
      </div>
    </el-table>
  </div>
</template>

<script>
import { cartList } from "@/api/cartManage/cart";
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [] //存储选中的列表
    };
  },
  created() {
    cartList({ userId: 1 })
      .then(r => {
        this.tableData = r;
      })
      .catch(() => {});
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete(index, row) {
      console.log(row);
      this.tableData.splice(index, 1);
    },
    dels() {
      //删除选中
    },
    numChange(value) {
      console.log(value);
    },
    toOrderSave(){
      var cartOrder=[]
      for (var i = 0; i < this.multipleSelection.length; i++) {
        cartOrder[i]=this.multipleSelection[i];     
      }
      this.$router.push({path: 'OrderSave', query: {cartOrder: cartOrder}})
    }
  },
  computed: {
    totalCount: function() {
      //总件数：遍历对象数组统计数组中每个对象的count值
      var counts = 0;
      this.multipleSelection.forEach(function(v) {
        counts += v.num;
      });
      return counts;
    },
    sum: function() {
      //总价钱
      var totalSum = 0.0;
      this.multipleSelection.forEach(function(v) {
        totalSum += v.goods.price * v.num; //等价于totalSum=totalSum+v.price*v.count
      });
      return totalSum;
    }
  }
};
</script>
<style lang="scss">
/* cart-footer */
.cart-footer {
  position: relative;
  line-height: 50px;
  background: #eee;
  overflow: hidden;
}
.cart-footer .select-con {
  float: left;
  padding-left: 20px;
}
.cart-footer .delete-con {
  float: left;
  margin-left: 20px;
}
.cart-footer .submit-con {
  float: right;
}
.btn{
  background: #c60023;
  color:#eee
}
.cart-footer .submit-con .submit-total,
#selectGoodsCount {
  font-size: 18px;
  color: #c60023;
  font-weight: bold;
  margin-right: 30px;
  vertical-align: middle;
}
#selectGoodsCount {
  margin-right: 5px;
}
.submit-con .submitDis {
  background: #b0b0b0;
  cursor: no-drop;
}
.cart-footer .submit-con .btn-submit {
  width: 80px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>