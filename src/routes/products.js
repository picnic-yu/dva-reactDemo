// import React from 'react';
// import { connect } from 'dva';
// import List from '../components/list';
//  函数方式传入数据
// const Products = ({ dispatch, products,example }) => {
//     function handleDelete(id) {
//         console.log(example)
//         console.log(products)
//         dispatch({
//             type: 'products/delete',
//             payload: id,
//         });
//     }
//     return (
//         <div>
//             <h2>List of Products</h2>
//             <List onDelete={handleDelete} products={products} />
//         </div>
//     );
// };
 
// // export default Products;
// export default connect(({ products, example}) => ({
//     products,example
// }))(Products);


// class方式注入数据
import React from 'react';
import { connect } from 'dva';
import List from '../components/list';
class Products extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id){
        this.props.dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    render(){
        const { dispatch, products,example} = this.props;
        console.log(products)
        return(
            <div>
                <h2>List of Products</h2>
                <List onDelete={this.handleDelete} products={products} />
            </div> 
        )
    }
} 

function mapStateToProps({ dispatch, products,example}) {
    return { dispatch, products,example};
}

export default connect(mapStateToProps)(Products);