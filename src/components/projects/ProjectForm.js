import React, { useState } from 'react'
import { Steps, Panel, Placeholder, ButtonGroup, Button } from 'rsuite';
import CompletedForm from './CompletedForm';
import Container from './Container'
import ProjectInfoForm from './ProjectInfoForm';
import ProjectTypeForm from './ProjectTypeForm';
import TeamSettingsForm from './TeamSettingsForm';

const forms = [ProjectTypeForm, ProjectInfoForm, TeamSettingsForm, CompletedForm]

const ProjectForm = () => {
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const Form = forms[step]

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    return (
            <Container>
                <Steps current={step}>
                    <Steps.Item title="Project Type" description="Description" />
                    <Steps.Item title="Project Info" description="Description" />
                    <Steps.Item title="Team Settings" description="Description" />
                    <Steps.Item title="Completed" description="Description" />
                </Steps>
                <hr />
                <Form /> 
                <Panel header={`Step: ${step + 1}`}>
                    <Placeholder.Paragraph />
                </Panel>
                <hr />
                <ButtonGroup>
                    <Button onClick={onPrevious} disabled={step === 0}>
                        Previous
                    </Button>
                    <Button onClick={onNext} disabled={step === 3}>
                        Next
                    </Button>
                </ButtonGroup>
            </Container>
    )
}
export default ProjectForm