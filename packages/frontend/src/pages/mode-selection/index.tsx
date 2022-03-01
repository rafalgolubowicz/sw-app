import { useIntl } from 'react-intl';
import { Col, Row, Typography } from 'antd';

import { FightMode } from './const';
import { useModeSelection } from './hooks';
import ModeCard from '../../components/ModeCard';
import { SkywalkerImage, StarshipImage } from '../../assets/images';

const ModeSelectionPage = () => {
  const intl = useIntl();
  const { onSelectMode } = useModeSelection();

  return (
    <>
      <Typography.Title style={{ textAlign: 'center' }}>
        {intl.formatMessage({
          id: 'mode.select',
          defaultMessage: 'Select mode',
        })}
      </Typography.Title>
      <Row gutter={16}>
        <Col span={24} md={12} style={{ display: 'flex' }}>
          <ModeCard
            testId={FightMode.PEOPLE}
            img={SkywalkerImage}
            onClick={() => onSelectMode(FightMode.PEOPLE)}
            title={intl.formatMessage({
              id: 'mode.peopleFight',
              defaultMessage: 'People Fight',
            })}
          />
        </Col>
        <Col md={12} style={{ display: 'flex' }}>
          <ModeCard
            testId={FightMode.STARSHIPS}
            img={StarshipImage}
            onClick={() => onSelectMode(FightMode.STARSHIPS)}
            title={intl.formatMessage({
              id: 'mode.starshipsFight',
              defaultMessage: 'Starships Fight',
            })}
          />
        </Col>
      </Row>
    </>
  );
};

export default ModeSelectionPage;
