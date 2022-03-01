import { Card, Image, Typography } from 'antd';

import { ModeCardProps } from './types';

const ModeCard = ({ img, title, onClick }: ModeCardProps) => (
  <Card
    {...{ onClick }}
    hoverable
    style={{
      width: '100%',
      paddingTop: '40px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    bodyStyle={{ marginTop: 'auto', paddingBottom: 0 }}
    cover={
      <Image
        alt={title}
        preview={false}
        style={{ maxHeight: '500px', objectFit: 'contain' }}
        src={img}
      />
    }
  >
    <Typography.Title style={{ marginBottom: 0 }}>{title}</Typography.Title>
  </Card>
);

export default ModeCard;
