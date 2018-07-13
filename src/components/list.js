import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import styles from'./list.css'
const List = ({ onDelete, products }) => {

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  products.forEach((element, index) => {
    element.key = index;
})
  return (
    
    <div className={styles.test}>
        <Table 
            dataSource={products}
            columns={columns}
            />
    </div>
    
  );
};
 
List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};
 
export default List;