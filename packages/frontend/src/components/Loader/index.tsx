import { Spin } from 'antd';
import { useIntl } from 'react-intl';

const Loader = () => {
  const intl = useIntl();

  return (
    <div className="h-100 flex center">
      <Spin
        size="large"
        tip={intl.formatMessage({
          id: 'misc.loading',
          defaultMessage: 'Loading...',
        })}
      />
    </div>
  );
};

export default Loader;
