export default [
  // For placeholder only
  {
    group: 'Button',
    name: 'with Icon',
    code: `
        <Button 
            variant="primary"
            rightIcon={<Icon name="arrowRight" />}>
            Continue
        </Button>
        `,
  },
  {
    group: 'Button',
    name: 'group',
    code: `
        <ButtonGroup spacing="1">
            <Button 
                variant="secondary">
                Cancel
            </Button>
            <Button 
                variant="primary"
                rightIcon={<Icon name="arrowRight" />}>
                Continue
            </Button>
        </ButtonGroup>
        `,
  },
];
