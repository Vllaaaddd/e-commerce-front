import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = ({ loading, children }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: 'green' }} spin />;

  return (
    <div>
      <Spin indicator={antIcon} spinning={loading} size='large'>
        {children}
      </Spin>
    </div>
  );
};

export default Loader;
