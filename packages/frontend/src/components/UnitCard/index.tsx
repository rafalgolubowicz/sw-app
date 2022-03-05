import { useIntl } from 'react-intl';
import { Descriptions, Typography } from 'antd';

import { UnitCardProps } from './types';

const UnitCard = <T extends Record<string, any>>({
  data,
  titleKey,
  rows,
  highlighted,
}: UnitCardProps<T>) => {
  const { formatMessage } = useIntl();

  return (
    <Descriptions
      style={{ width: 300 }}
      labelStyle={{
        background: highlighted ? 'lightyellow' : 'inherit',
        fontWeight: 'bold',
      }}
      bordered
      title={
        <Typography.Title
          level={4}
          style={{ marginBottom: 0, textAlign: 'center' }}
        >
          {data[titleKey]}
        </Typography.Title>
      }
    >
      {rows.map(({ key, translationKey, defaultMessage }) => (
        <Descriptions.Item
          {...{ key }}
          span={12}
          label={formatMessage({
            id: translationKey,
            defaultMessage: defaultMessage,
          })}
        >
          {data[key]}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default UnitCard;
