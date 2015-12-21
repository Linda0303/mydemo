var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',color:'red'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball',color:'red'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball',color:'red'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch',color:'red'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5',color:'red'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7',color:'red'},
  {category: 'Cloth', price: '$199.99', stocked: false, name: 'coat',color:'red'},
];

var Table = React.createClass({
	render:function(){
		return <FilterableProductTable products={PRODUCTS}/>
	}
});

ReactDOM.render(
    <Table/>,
    document.getElementById('abcd')
);