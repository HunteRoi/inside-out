import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

type Props = {
    changeStep: () => void
    icon: React.ReactNode
};

const ChangeStepButton: React.FC<Props> = ({ changeStep, icon }) => (
    <>
        <Button
            type='primary'
            shape='circle'
            icon={icon}
            size='large'
            onClick={changeStep}
        />
    </>
);

export default ChangeStepButton;