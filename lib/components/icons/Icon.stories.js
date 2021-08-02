import React from 'react';
import { Icon } from '../icons';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'component to use all our icons',
      table: {
        type: {
          summary:
            'account|alert|analyticsFilled|analyticsOutline|arrowDown|arrowLeft|arrowRight|arrowUp|check|chevronDown|chevronLeft|chevronRight|chevronUp|close|delete|download|edit|error|externalLink|file|help|helpFilled|homeFilled|homeOutline|import|incidentResponseFilled|incidentResponseOutline|incidentsFilled|incidentsOutline|info|infrastructureFilled|infrastructureOutline|integrationsFilled|integrationsOutline|lock|minus|organizationFilled|organizationOutline|plus|search|settings|starFilled|starOutline|statusPagesFilled|statusPagesOutline|success|refresh|runbooksFilled|runbooksOutline|team|ticket|unlock|userFilled|userOutline|warning',
        },
        defaultValue: { summary: 'n/a' },
      },
      control: {
        type: 'select',
        options: [
          'account',
          'alert',
          'analyticsFilled',
          'analyticsOutline',
          'arrowDown',
          'arrowLeft',
          'arrowRight',
          'arrowUp',
          'check',
          'chevronDown',
          'chevronLeft',
          'chevronRight',
          'chevronUp',
          'close',
          'delete',
          'download',
          'edit',
          'error',
          'externalLink',
          'file',
          'help',
          'helpFilled',
          'homeFilled',
          'homeOutline',
          'import',
          'incidentResponseFilled',
          'incidentResponseOutline',
          'incidentsFilled',
          'incidentsOutline',
          'info',
          'infrastructureFilled',
          'infrastructureOutline',
          'integrationsFilled',
          'integrationsOutline',
          'lock',
          'minus',
          'organizationFilled',
          'organizationOutline',
          'plus',
          'refresh',
          'runbooksFilled',
          'runbooksOutline',
          'search',
          'settings',
          'starFilled',
          'starOutline',
          'statusPagesFilled',
          'statusPagesOutline',
          'success',
          'team',
          'ticket',
          'unlock',
          'userFilled',
          'userOutline',
          'warning',
        ],
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const ChooseAnIcon = Template.bind({});
ChooseAnIcon.args = {
  name: 'info',
};

export const AccountIcon = Template.bind({});
AccountIcon.args = {
  name: 'account',
};

export const AlertIcon = Template.bind({});
AlertIcon.args = {
  name: 'alert',
};

export const AnalyticsFilledIcon = Template.bind({});
AnalyticsFilledIcon.args = {
  name: 'analyticsFilled',
};

export const AnalyticsOutlineIcon = Template.bind({});
AnalyticsOutlineIcon.args = {
  name: 'analyticsOutline',
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
  name: 'arrowRight',
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = {
  name: 'arrowDown',
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  name: 'arrowLeft',
};

export const ArrowUpIcon = Template.bind({});
ArrowUpIcon.args = {
  name: 'arrowUp',
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  name: 'check',
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  name: 'chevronDown',
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  name: 'chevronLeft',
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  name: 'chevronRight',
};

export const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = {
  name: 'chevronUp',
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  name: 'close',
};

export const DeleteIcon = Template.bind({});
DeleteIcon.args = {
  name: 'delete',
};

export const DownloadIcon = Template.bind({});
DownloadIcon.args = {
  name: 'download',
};

export const EditIcon = Template.bind({});
EditIcon.args = {
  name: 'edit',
};

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  name: 'email',
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  name: 'error',
};

export const ExternalLinkIcon = Template.bind({});
ExternalLinkIcon.args = {
  name: 'externalLink',
};

export const FileIcon = Template.bind({});
FileIcon.args = {
  name: 'file',
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  name: 'filter',
};

export const HelpIcon = Template.bind({});
HelpIcon.args = {
  name: 'help',
};

export const HelpFilledIcon = Template.bind({});
HelpFilledIcon.args = {
  name: 'helpFilled',
};

export const HomeFilledIcon = Template.bind({});
HomeFilledIcon.args = {
  name: 'homeFilled',
};

export const HomeOutlineIcon = Template.bind({});
HomeOutlineIcon.args = {
  name: 'homeOutline',
};

export const ImportIcon = Template.bind({});
ImportIcon.args = {
  name: 'import',
};

export const IncidentResponseFilledIcon = Template.bind({});
IncidentResponseFilledIcon.args = {
  name: 'incidentResponseFilled',
};

export const IncidentResponseOutlineIcon = Template.bind({});
IncidentResponseOutlineIcon.args = {
  name: 'incidentResponseOutline',
};

export const IncidentsFilledIcon = Template.bind({});
IncidentsFilledIcon.args = {
  name: 'incidentsFilled',
};

export const IncidentsOutlineIcon = Template.bind({});
IncidentsOutlineIcon.args = {
  name: 'incidentsOutline',
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  name: 'info',
};

export const InfrastructureFilledIcon = Template.bind({});
InfrastructureFilledIcon.args = {
  name: 'infrastructureFilled',
};

export const InfrastructureOutlineIcon = Template.bind({});
InfrastructureOutlineIcon.args = {
  name: 'infrastructureOutline',
};

export const IntegrationsFilledIcon = Template.bind({});
IntegrationsFilledIcon.args = {
  name: 'integrationsFilled',
};

export const IntegrationsOutlineIcon = Template.bind({});
IntegrationsOutlineIcon.args = {
  name: 'integrationsOutline',
};

export const LockIcon = Template.bind({});
LockIcon.args = {
  name: 'lock',
};

export const MinusIcon = Template.bind({});
MinusIcon.args = {
  name: 'minus',
};

export const OrganizationFilledIcon = Template.bind({});
OrganizationFilledIcon.args = {
  name: 'organizationFilled',
};

export const OrganizationOutlineIcon = Template.bind({});
OrganizationOutlineIcon.args = {
  name: 'organizationOutline',
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  name: 'plus',
};

export const RefreshIcon = Template.bind({});
RefreshIcon.args = {
  name: 'refresh',
};

export const RunbooksFilledIcon = Template.bind({});
RunbooksFilledIcon.args = {
  name: 'runbooksFilled',
};

export const RunbooksOutlineIcon = Template.bind({});
RunbooksOutlineIcon.args = {
  name: 'runbooksOutline',
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  name: 'search',
};

export const SettingsIcon = Template.bind({});
SettingsIcon.args = {
  name: 'settings',
};

export const StarFilledIcon = Template.bind({});
StarFilledIcon.args = {
  name: 'starFilled',
};

export const StarOutlineIcon = Template.bind({});
StarOutlineIcon.args = {
  name: 'starOutline',
};

export const StatusPagesFilledIcon = Template.bind({});
StatusPagesFilledIcon.args = {
  name: 'statusPagesFilled',
};

export const StatusPagesOutlineIcon = Template.bind({});
StatusPagesOutlineIcon.args = {
  name: 'statusPagesOutline',
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  name: 'success',
};

export const TeamIcon = Template.bind({});
TeamIcon.args = {
  name: 'team',
};

export const TicketIcon = Template.bind({});
TicketIcon.args = {
  name: 'ticket',
};

export const UnlockIcon = Template.bind({});
UnlockIcon.args = {
  name: 'unlock',
};

export const UserFilledIcon = Template.bind({});
UserFilledIcon.args = {
  name: 'userFilled',
};

export const UserOutlineIcon = Template.bind({});
UserOutlineIcon.args = {
  name: 'userOutline',
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  name: 'warning',
};
