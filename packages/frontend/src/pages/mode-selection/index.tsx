import { Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import { TestIds } from './const';
import { ROUTES } from '../../routes/const';
import ModeCard from '../../components/ModeCard';
import { SkywalkerImage, StarshipImage } from '../../assets/images';

const ModeSelectionPage = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <Typography.Title style={{ textAlign: 'center' }}>
        <FormattedMessage id="mode.select" defaultMessage="Select mode" />
      </Typography.Title>
      <Row gutter={16}>
        <Col span={24} md={12} style={{ display: 'flex' }}>
          <ModeCard
            testId={TestIds.People}
            img={SkywalkerImage}
            onClick={() => navigate(ROUTES.People)}
            title={intl.formatMessage({
              id: 'mode.peopleFight',
              defaultMessage: 'People Fight',
            })}
          />
        </Col>
        <Col md={12} style={{ display: 'flex' }}>
          <ModeCard
            testId={TestIds.Starships}
            img={StarshipImage}
            onClick={() => navigate(ROUTES.Starships)}
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
