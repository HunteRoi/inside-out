import ChangeStepButton from '../ChangeStepButton';

type Props = {
    disclaimer: string,
    goToNextStep: () => void
};

const Experience: React.FC<Props> = ({ disclaimer, goToNextStep }) => (
    <>
        <ChangeStepButton 
            changeStep={goToNextStep}
            label="Débuter l'expérience"
        />
        <p>{disclaimer}</p>
    </>
);

export default Experience;
