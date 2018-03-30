export default function mapStateToProps(state) {
  console.log(state);
  // 遍历cartlist计算总价
  let totalCost = 0;
  let selectAll = true; //默认全选
  state.card_List.forEach((item, ind) => {
    if (item.selected == 1) {
      totalCost += item.discount_price * item.count;
    }
    if (item.selected == 0) {
       selectAll = false;
    }
  });
  return {
    cartList: state.card_List,
    totalCost,
    selectAll
  };
}
