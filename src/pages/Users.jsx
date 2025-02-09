import { Button, Flex, Input, Table, Typography } from "antd";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

export default function Users() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Flex justify="space-between">
        <Typography.Title level={3} style={{ margin: 0 }}>
          Companies
        </Typography.Title>

        <Flex gap="small">
          <Button type="primary" icon={<Plus size={16} />}>
            Add
          </Button>
          <div>
            <Input prefix={<Search size={16} />} placeholder="Search here ..." />
          </div>
        </Flex>
      </Flex>

      <Table
        size="middle"
        rowSelection={rowSelection}
        scroll={{ x: "max-content" }}
        dataSource={Array.from({
          length: 125,
        }).map((_, i) => ({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        }))}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
        ]}
        pagination={{
          showSizeChanger: true,
          // defaultPageSize: 100,
          size: "default",
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </>
  );
}
