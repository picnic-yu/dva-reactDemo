import dva from 'dva';
import './index.css';
import productsModel from './models/products';
import exampleModel from './models/example';
// 1. Initialize
// const app = dva();
const app = dva({
    // initialState: {
    //     products: [
    //         { name: 'dva', id: 1 },
    //         { name: 'antd', id: 2 },
    //     ],
    // },
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(productsModel);
app.model(exampleModel);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
