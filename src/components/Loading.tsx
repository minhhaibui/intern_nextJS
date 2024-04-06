import { Alert, Flex, Spin } from 'antd';

/**
 * Renders a loading component with different sizes and types of spinners.
 * @param message - the message to display in the alert
 * @param description - the description to display in the alert
 */
export default function Loading({
  message = 'Đang xử lý...',
  description = message,
}: {
  message?: string;
  description?: string;
}) {
  return (
    <Flex gap="small" vertical>
      <Flex gap="small">
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Flex>
      <Spin tip="Loading...">
        <Alert message={message} description={description} type="info" />
      </Spin>
    </Flex>
  );
}
